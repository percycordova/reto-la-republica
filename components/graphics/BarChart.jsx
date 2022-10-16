import React, { useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import Chart from 'chart.js/auto'
const BarChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      datalabels: {
        display: true,
        color: 'gray',
        formatter: Math.round,
        anchor: 'end',
        offset: -20,
        align: 'start'
      }
    },
    legend: {
      display: false
    }
  }
  useEffect(() => {
    Chart.register(ChartDataLabels)
  }, [])
  return <Bar data={data} options={options} />
}

export default BarChart
