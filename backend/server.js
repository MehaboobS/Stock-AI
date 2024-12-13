const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Route to fetch historical stock data
app.get("/api/stock-data", async (req, res) => {
    const symbol = req.query.symbol;
    try {
      const response = await axios.get(
        `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&apikey=${process.env.TWELVE_DATA_API_KEY}`
      );
  
      // Process the response to extract labels and prices
      const labels = response.data.values.map(item => item.datetime);
      const prices = response.data.values.map(item => parseFloat(item.close));
  
      res.json({ labels, prices });
    } catch (error) {
      console.error("Error fetching stock data:", error);
      res.status(500).send("Error fetching data");
    }
  });

  
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


