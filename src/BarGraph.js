const BarGraph = (props) => {
  console.log(props);
  // graphNumbers = array of values
  const graphNumbers = props.graphData.data;
  console.log(
    graphNumbers.length,
    props.graphData.gap,
    graphNumbers.length + (graphNumbers.length - 1) * props.graphData.gap
  );
  let barWidth =
    100 /
    (graphNumbers.length + (graphNumbers.length - 1) * props.graphData.gap);
  let barGap = props.graphData.gap * barWidth;

  console.log(barWidth, barGap);
  let maxDataVal = Math.max(...graphNumbers);
  let heightUnit = props.graphHeight / maxDataVal;

  const graphBars = graphNumbers.map((entry, index) => (
    <rect
      key={"rect" + index}
      x={(barWidth + barGap) * index + "%"}
      y={props.graphHeight - entry * heightUnit}
      height={entry * heightUnit}
      width={`${barWidth}%`}
      fill={props.graphData.color}
    />
  ));

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={`${props.graphHeight}px`}>
      <rect x="0" y="0" width="100%" height={`${props.graphHeight + 10}px`} />
      {graphBars}
    </svg>
  );
};

export default BarGraph;
