const axios = require('axios');

// Function to fetch historical stock data from Twelve Data API
async function fetchStockData(symbol, interval = '1day') {
    try {
        // Base URL for the Twelve Data API
        const baseUrl = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&apikey=${process.TWELVE_DATA_API_KEY}`;

        // Make the GET request to Twelve Data API
        const response = await axios.get(baseUrl, {
            params: {
                symbol, // Stock symbol (e.g., TSLA)
                interval, // Interval for the data (e.g., 1day, 1week)
                apikey: process.env.TWELVE_DATA_API_KEY, // API key from environment variable
            },
        });

        // Check for errors in the response
        if (response.data.status === 'error') {
            throw new Error(response.data.message);
        }

        // Return the historical data
        return response.data;
    } catch (error) {
        console.error(`Error fetching stock data for ${symbol}:`, error.message);
        throw error;
    }
}

module.exports = {
    fetchStockData,
};
