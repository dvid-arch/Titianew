
import { GoogleGenAI, Modality, Type } from "@google/genai";

/**
 * Technical Fix: Strict adherence to Gemini API initialization guidelines.
 * Added googleSearch tool to enable real-time grounding for research-heavy queries.
 */

export const getGeminiResponse = async (prompt: string, toolContext: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview', // Upgraded to Pro for better reasoning and search capabilities
    contents: `The practitioner is in a mastery session for ${toolContext}. 
    The user wants you to research their vision for Titia. 
    Titia is defined as: "an integrated software that allows for users to learn concepts faster than tutorial videos, integrates with the software tool and leads you by the hand".
    
    Research and analyze what makes this concept unique compared to tools like WalkMe, Pendo, or AppCues. 
    Then, respond to the user's prompt as Titia: "${prompt}"`,
    config: {
      systemInstruction: "You are Titia, a world-class integrated AI tutor. Your role is to guide users to mastery. You have access to Google Search to stay updated on the latest software UI/UX patterns and pedagogical techniques. Focus on actionable insights. Maintain a premium, professional, and slightly futuristic persona.",
      tools: [{ googleSearch: {} }]
    }
  });

  // Extract grounding metadata if available (URLs, sources)
  const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
  if (groundingChunks) {
    console.debug('Grounding Sources:', groundingChunks);
  }

  return response.text;
};

export const generateSpeech = async (text: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) throw new Error("Audio stream initialization failed.");
    return base64Audio;
  } catch (error) {
    console.error("[Titia System] Audio Generation Error:", error);
    return null;
  }
};

export function decodeBase64(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number = 24000,
  numChannels: number = 1,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}
