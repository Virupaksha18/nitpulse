const express = require("express");
const router = express.Router();
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY
});

router.post("/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    const completion = await client.chat.completions.create({
      model: "deepseek-chat",
      messages
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DeepSeek API request failed" });
  }
});

module.exports = router;