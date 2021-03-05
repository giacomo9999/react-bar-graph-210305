import BarGraph from "./BarGraph";

function App() {
  const graphHeight = 300;
  const barGraphData = {
    graphName: "My Bar Graph",
    data: [35, 10, 76, 32, 55, 29, 44, 66],
    color: "#9CAAB9",
    gap: 0.2,
  };
  return (
    <div className="container-outer">
      <h1>{barGraphData.graphName}</h1>
      <BarGraph graphData={barGraphData} graphHeight={graphHeight} />
    </div>
  );
}

export default App;
