import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const StockChart = () => {
    const [chartData, setChartData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/stock-data', {
                    params: {
                        symbol: 'AAPL',
                        interval: '1day',
                        start_date: '2023-01-01',
                        end_date: '2023-12-01',
                    },
                });

                const timeSeries = response.data.values;
                const dates = timeSeries.map(item => item.datetime).reverse();
                const prices = timeSeries.map(item => parseFloat(item.close)).reverse();

                setChartData({
                    labels: dates,
                    datasets: [
                        {
                            label: 'Closing Prices',
                            data: prices,
                            borderColor: 'blue',
                            borderWidth: 1,
                        },
                    ],
                });
            } catch (err) {
                console.error('Error fetching stock data:', err.message);
                setError('Failed to fetch stock data.');
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Stock Chart</h2>
            {error ? <p>{error}</p> : <Line data={chartData} />}
        </div>
    );
};

export default StockChart;
