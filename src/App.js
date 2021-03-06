import BarGraph from "./BarGraph";

function App() {
  const graphHeight = 300;
  const barGraphData = {
    graphName: "My Bar Graph",
    data: [
      { label: "O", value: 35 },
      { label: "OOO", value: 17 },
      { label: "O", value: 73 },
      { label: "OOOOOO", value: 27 },
      { label: "O", value: 78 },
      { label: "OOO", value: 55 },
      { label: "OO", value: 37 },
      { label: "O", value: 29 },
      { label: "OOO", value: 77 },
      { label: "O", value: 82 },
      { label: "OOO", value: 16 },
    ],
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
