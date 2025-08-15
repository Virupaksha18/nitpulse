// const express = require("express");
// const router = express.Router();
// const axios = require("axios");

// router.post("/chat", async (req, res) => {
//   try {
//     const { messages } = req.body;

//     const response = await axios.post(
//       "https://api.deepseek.com/chat/completions",
//       {
//         model: "deepseek-chat",
//         messages
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
//           "Content-Type": "application/json"
//         }
//       }
//     );

//     res.json({ reply: response.data.choices[0].message.content });
//   } catch (err) {
//     console.error("DeepSeek API Error:", err.response?.data || err.message);
//     res.status(500).json({ error: "DeepSeek API request failed" });
//   }
// });

// module.exports = router;