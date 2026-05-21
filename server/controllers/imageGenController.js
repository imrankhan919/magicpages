import fetch from "node-fetch";
import fs from "node:fs";
import path from "node:path";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const UPLOADS_DIR = path.join(process.cwd(), "uploads");
if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

async function fetchImageAsBase64(imageUrl) {
    const response = await fetch(imageUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    const contentType = response.headers.get("content-type") || "image/jpeg";
    const buffer = await response.buffer();
    const base64 = buffer.toString("base64");
    return { base64, mimeType: contentType.split(";")[0] };
}

const transformImage = async (req, res) => {
    const { imageURL, prompt } = req.body;

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

        if (!imagePart) {
            const textPart = parts.find((p) => p.text);
            return res.status(500).json({
                error: "Gemini did not return an image.",
                geminiMessage: textPart?.text ?? "No message.",
            });
        }

        const ext = imagePart.inlineData.mimeType.split("/")[1] || "png";
        const filename = `styled_${Date.now()}.${ext}`;
        const filePath = path.join(UPLOADS_DIR, filename);

        const imageBuffer = Buffer.from(imagePart.inlineData.data, "base64");
        fs.writeFileSync(filePath, imageBuffer);
        console.log(`Image saved to: ${filePath}`);

        const textPart = parts.find((p) => p.text && !p.thought);
        if (textPart) console.log("Gemini note:", textPart.text);

        return res.status(200).json({
            message: "Image styled and saved successfully.",
            filename,
            filePath,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message || "Image Generation Failed!" }); // ✅ Fixed
    }
};

const imageController = { transformImage };
export default imageController;