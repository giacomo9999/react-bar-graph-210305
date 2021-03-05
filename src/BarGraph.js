const BarGraph = (props) => {
  console.log(props);
  // graphNumbers = array of values
  const graphNumbers = props.graphData.data;
  let barWidth = 100 / graphNumbers.length;
  const graphBars = graphNumbers.map((entry, index) => (
    <rect
      key={"rect" + index}
      x={barWidth * index + "%"}
      y="0"
      height={entry * 10}
      width="30"
      fill={props.graphData.color}
    />
  ));

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="300px">
      <rect x="0" y="0" width="100%" height="300px" />
      {graphBars}
    </svg>
  );
};

export default BarGraph;
