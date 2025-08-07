require('dotenv').config();
const express = require('express');
const axios = require('axios');
const router = express.Router();

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
    console.error('Error calling Hugging Face API:', error.response?.data || error.message);
    res.status(500).json({ error: 'Hugging Face API error' });
  }
});

module.exports = router;