const BarGraph = (props) => {
  console.log(props);
  // graphNumbers = array of values
  const graphNumbers = props.graphData.data;
  let baseBarWidth = 100 / graphNumbers.length;
  let baseGapWidth = 100 / graphNumbers.length - 1;
  let barGap = (baseGapWidth * props.graphData.gapPct) / 100;
  let adjBarWidth = baseBarWidth - barGap;
  let maxDataVal = Math.max(...graphNumbers);
  let heightUnit = props.graphHeight / maxDataVal;

  const graphBars = graphNumbers.map((entry, index) => (
    <rect
      key={"rect" + index}
      x={(adjBarWidth + barGap) * index + "%"}
      y={props.graphHeight - entry * heightUnit + 10}
      height={entry * heightUnit}
      width={`${adjBarWidth}%`}
      fill={props.graphData.color}
    />
  ));

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${props.graphHeight + 10}px`}
    >
      <rect x="0" y="0" width="100%" height={`${props.graphHeight + 10}px`} />
      {graphBars}
    </svg>
  );
};

export default BarGraph;
