const express = require('express');
const { getHistoricalStockData } = require('../controllers/stockController');
const {
    calculateRSI,
    calculateMACD,
    calculateBollingerBands,
    calculateSMA,
    calculateEMA,
    generateSignals,
} = require('../services/indicatorService');

const router = express.Router();

// Route to fetch processed stock data and calculate indicators and signals
router.get('/process-stock/:symbol', async (req, res) => {
    try {
        const { symbol } = req.params; // Extract stock symbol from request params

        if (!symbol) {
            return res.status(400).json({ error: 'Stock symbol is required.' });
        }

        // Fetch historical stock data for the given symbol
        const historicalData = await getHistoricalStockData(symbol);
        const closingPrices = historicalData.map(data => data.close);

        // Calculate indicators
        const rsi = calculateRSI(closingPrices);
        const macd = calculateMACD(closingPrices);
        const bollingerBands = calculateBollingerBands(closingPrices);
        const sma = calculateSMA(closingPrices, 20); // Example: 20-period SMA
        const ema = calculateEMA(closingPrices, 20); // Example: 20-period EMA

        // Combine indicators with price data for signal generation
        const indicators = closingPrices.map((price, index) => ({
            price,
            rsi: rsi[index],
            macd: macd[index]?.MACD || null,
            histogram: macd[index]?.histogram || null,
            bollinger: {
                upper: bollingerBands[index]?.upper || null,
                lower: bollingerBands[index]?.lower || null,
                middle: bollingerBands[index]?.middle || null,
            },
        }));

        // Generate Buy/Sell signals
        const signals = generateSignals(indicators);

        res.status(200).json({
            symbol,
            indicators,
            signals,
        });
    } catch (error) {
        console.error('Error processing stock data:', error.message);
        res.status(500).json({ error: 'Failed to process stock data.' });
    }
});

module.exports = router;
