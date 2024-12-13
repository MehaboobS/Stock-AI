const technicalIndicators = require('technicalindicators');

/**
 * Calculate RSI (Relative Strength Index)
 * @param {Array<number>} prices - Array of closing prices
 * @param {number} period - Number of periods to calculate RSI (default: 14)
 * @returns {Array<number>} - RSI values
 */
function calculateRSI(prices, period = 14) {
    return technicalIndicators.RSI.calculate({
        values: prices,
        period,
    });
}

/*
 * Calculate MACD (Moving Average Convergence Divergence)
 * @param {Array<number>} prices - Array of closing prices
 * @param {number} fastPeriod - Fast EMA period (default: 12)
 * @param {number} slowPeriod - Slow EMA period (default: 26)
 * @param {number} signalPeriod - Signal EMA period (default: 9)
 * @returns {Object} - MACD line, Signal line, and Histogram
 */
function calculateMACD(prices, fastPeriod = 12, slowPeriod = 26, signalPeriod = 9) {
    return technicalIndicators.MACD.calculate({
        values: prices,
        fastPeriod,
        slowPeriod,
        signalPeriod,
        SimpleMAOscillator: false,
        SimpleMASignal: false,
    });
}

/*
 * Calculate Bollinger Bands
 * @param {Array<number>} prices - Array of closing prices
 * @param {number} period - Number of periods (default: 20)
 * @param {number} stdDev - Standard deviation multiplier (default: 2)
 * @returns {Object} - Upper band, lower band, and middle band
 */
function calculateBollingerBands(prices, period = 20, stdDev = 2) {
    return technicalIndicators.BollingerBands.calculate({
        values: prices,
        period,
        stdDev,
    });
}

/*
 * Calculate Simple Moving Average (SMA)
 * @param {Array<number>} prices - Array of closing prices
 * @param {number} period - Number of periods for SMA
 * @returns {Array<number>} - SMA values
 */
function calculateSMA(prices, period) {
    return technicalIndicators.SMA.calculate({
        values: prices,
        period,
    });
}

/*
 * Calculate Exponential Moving Average (EMA)
 * @param {Array<number>} prices - Array of closing prices
 * @param {number} period - Number of periods for EMA
 * @returns {Array<number>} - EMA values
 */
function calculateEMA(prices, period) {
    return technicalIndicators.EMA.calculate({
        values: prices,
        period,
    });
}

/*
 * Generate Buy/Sell Signals based on thresholds
 * @param {Object} indicators - Calculated indicators (RSI, MACD, etc.)
 * @returns {Array<Object>} - Array of Buy/Sell signals
 */
function generateSignals(indicators) {
    const signals = [];

    indicators.forEach((indicator, index) => {
        const { rsi, macd, histogram, bollinger, price } = indicator;

        if (rsi < 30) {
            signals.push({ index, signal: 'Buy', reason: 'RSI Oversold' });
        } else if (rsi > 70) {
            signals.push({ index, signal: 'Sell', reason: 'RSI Overbought' });
        }

        if (histogram > 0 && macd > 0) {
            signals.push({ index, signal: 'Buy', reason: 'MACD Positive Divergence' });
        } else if (histogram < 0 && macd < 0) {
            signals.push({ index, signal: 'Sell', reason: 'MACD Negative Divergence' });
        }

        if (price > bollinger.upper) {
            signals.push({ index, signal: 'Sell', reason: 'Price Above Bollinger Upper Band' });
        } else if (price < bollinger.lower) {
            signals.push({ index, signal: 'Buy', reason: 'Price Below Bollinger Lower Band' });
        }
    });

    return signals;
}

module.exports = {
    calculateRSI,
    calculateMACD,
    calculateBollingerBands,
    calculateSMA,
    calculateEMA,
    generateSignals,
};
