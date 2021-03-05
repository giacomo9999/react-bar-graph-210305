import BarGraph from "./BarGraph";

function App() {
  const graphHeight = 300;
  const barGraphData = {
    data: [35, 10, 76, 32, 55, 29, 44, 66],
    color: "yellowgreen",
    gapPct: 10,
  };
  return (
    <div className="container-outer">
      <h1>Graph Name</h1>
      <BarGraph graphData={barGraphData} graphHeight={graphHeight} />
    </div>
  );
}

export default App;
