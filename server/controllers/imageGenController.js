import fetch from "node-fetch";
import fs from "node:fs";
import path from "node:path";
import { GoogleGenAI } from "@google/genai";
import uploadToCloudinary from "../middlewares/cloudinaryMiddleware.js";
import GenImage from "../models/genImageModel.js";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const UPLOADS_DIR = path.join(process.cwd(), "uploads");
if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

const fetchImageAsBase64 = async (imageUrl) => {
    const response = await fetch(imageUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    const contentType = response.headers.get("content-type") || "image/jpeg";
    const buffer = await response.buffer();
    const base64 = buffer.toString("base64");
    return { base64, mimeType: contentType.split(";")[0] };
}

const generateImage = async (imageURL, prompt) => {
    try {
        const { mimeType, base64 } = await fetchImageAsBase64(imageURL);

        console.log(`Sending to Gemini with prompt: "${prompt}"`);
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-image", // ✅ Fixed model name
            contents: [
                {
                    parts: [
                        { text: prompt },
                        {
                            inlineData: {
                                mimeType,
                                data: base64,
                            },
                        },
                    ],
                },
            ],
            config: {
                responseModalities: ["IMAGE", "TEXT"],
            },
        });

        const parts = response.candidates?.[0]?.content?.parts ?? [];
        const imagePart = parts.find((p) => p.inlineData);
        const ext = imagePart.inlineData.mimeType.split("/")[1] || "png";
        const filename = `styled_${Date.now()}.${ext}`;
        const filePath = path.join(UPLOADS_DIR, filename);
        const imageBuffer = Buffer.from(imagePart.inlineData.data, "base64");
        fs.writeFileSync(filePath, imageBuffer);
        const uploadedResult = await uploadToCloudinary(filePath)
        // Remove From Server
        fs.unlinkSync(filePath)
        return uploadedResult.secure_url

    } catch (error) {
        console.error(error);
        return { error: error.message || "Image Generation Failed!" }
    }
}



const transformImage = async (req, res) => {
    const { imageURL, prompt } = req.body;

    if (!imageURL || !prompt) {
        res.status(409)
        throw new Error("Please fill all details!")
    }

    const userId = req.user._id

    const generatedImageResult = await generateImage(imageURL, prompt)

    console.log(generatedImageResult)

    const image = new GenImage({
        user: userId,
        imageURL: generatedImageResult
    })

    await image.save()
    await image.populate('user')

    if (!image) {
        res.status(409)
        throw new Error("Image Not Saved!")
    }

    res.status(201).json(image)

};

const imageController = { transformImage };
export default imageController;