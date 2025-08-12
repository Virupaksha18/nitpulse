require('dotenv').config();
const express = require('express');
const axios = require('axios');
const router = express.Router();

console.log("Hugging Face Key:", process.env.HUGGINGFACE_API_KEY ? "Loaded" : "Missing");
const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY;

// Example route to use Hugging Face API
router.post('/generate-text', async (req, res) => {
  try {
    const userInput = req.body.text;

    const response = await axios.post(
      'https://api-inference.huggingface.co/models/gpt2', // You can change to another model
      {
        inputs: userInput
      },
      {
        headers: {
          Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
        }
      }
    );

    res.json({ output: response.data });
  } catch (error) {
    console.error("Hugging Face full error:",JSON.stringify(error.response?.data || error,null,2));
    res.status(500).json({ error: error.response?.data || error.message });
  }
});

module.exports = router;