const BarChart = () => {
  // Sample data for 30 days
  const data = Array.from({ length: 30 }, () => Math.floor(Math.random() * 50) + 30);
  
  // Find the maximum value for scaling
  const maxValue = Math.max(...data);

  return (
    <div className="w-full h-32 flex items-start gap-1">
      {data.map((value, index) => {
        const height = (value / maxValue) * 100;
        const isHighlighted = index === 25; // Highlight the 26th bar (0-based index)
        
        return (
          <div
            key={index}
            className="flex-1"
            style={{ height: '100%' }}
          >
            <div
              className={`w-full ${isHighlighted ? 'bg-blue-500' : 'bg-blue-100'} transition-all duration-300 hover:bg-blue-300`}
              style={{ height: `${height}%` }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BarChart;
