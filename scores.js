const stages = [
  { stage: 'Problem Diagnosis', score: 90 },
  { stage: 'Solution Explanation', score: 90 },
  { stage: 'Introduction', score: 50 },
  { stage: 'Upsell Attempts', score: 90 },
  { stage: 'Closing', score: 30 },
  { stage: 'Maintenance Offer', score: 30 }
];

// Sort in descending order
const sortedData = stages.sort((a, b) => b.score - a.score);
const labels = sortedData.map(item => item.stage);
const scores = sortedData.map(item => item.score);

// Create chart
const ctx = document.getElementById('horizontalChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Compliance Score',
      data: scores,
      backgroundColor: scores.map(score =>
        score >= 80 ? '#2A9D8F' :
        score >= 60 ? '#E9C46A' :
        '#E76F51'
      ),
      borderRadius: 8,
      barThickness: 22
    }]
  },
  options: {
    indexAxis: 'y', // horizontal orientation
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        ticks: {
          color: 'white',
          font: { size: 12 }
        },
        title: {
          display: true,
          text: 'Score (out of 100)',
          color: 'white',
          font: { size: 13, weight: 'bold' }
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'white',
          font: { size: 13, weight: 'bold' }
        }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#17252A',
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 13 }
      }
    }
  }
});
