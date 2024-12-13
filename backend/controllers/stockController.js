const { fetchStockData } = require('../services/stockService');

/*
 * Controller function to fetch historical stock data
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function getHistoricalStockData(req, res) {
    const { symbol, interval } = req.query; // Extract symbol and interval from query parameters

    if (!symbol) {
        return res.status(400).json({ error: 'Stock symbol is required.' });
    }

    try {
        // Fetch historical stock data using the stockService
        const stockData = await fetchStockData(symbol, interval || '1day');

        // Respond with the fetched data
        res.status(200).json(stockData);
    } catch (error) {
        console.error(`Error fetching historical data for symbol ${symbol}:`, error.message);

        // Send error response
        res.status(500).json({ error: 'Failed to fetch historical stock data.', details: error.message });
    }
}

module.exports = {
    getHistoricalStockData,
};
