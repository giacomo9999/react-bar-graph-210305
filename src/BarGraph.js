import { useEffect, useState } from "react";

const BarGraph = (props) => {
  // graphNumbers = array of values
  const graphNumbers = props.graphData.data.map((entry) => entry.value);
  const labelNames = props.graphData.data.map((entry) => entry.label);
  const [labelWidths, setLabelWidths] = useState([]);

  useEffect(() => {
    const labelWidths = [];
    let allLabelsInfo = document.querySelectorAll("text");
    let graphWidth = document.querySelector("svg").getBoundingClientRect()
      .width;
    console.log("Graph Width: ", graphWidth);
    for (let i = 0; i < allLabelsInfo.length; i++) {
      labelWidths.push(
        (
          (allLabelsInfo[i].getBoundingClientRect().width / graphWidth) *
          100
        ).toFixed(2)
      );
    }
    setLabelWidths(labelWidths);
  }, []);

  console.log("Label Widths: ", labelWidths);

  let barWidth =
    100 /
    (graphNumbers.length + (graphNumbers.length - 1) * props.graphData.gap);
  let barGap = props.graphData.gap * barWidth;

  let maxDataVal = Math.max(...graphNumbers);
  let heightUnit = props.graphHeight / maxDataVal;

  const graphBars = graphNumbers.map((entry, index) => {
    let centeringAdj = barWidth.toFixed(2) - labelWidths[index] || 0;
    centeringAdj = centeringAdj / 2 || 0;
    console.log(
      index,
      barWidth.toFixed(2),
      labelWidths[index],
      centeringAdj.toFixed(2)
    );
    return (
      <svg key={"bar_" + index}>
        <rect
          key={"rect" + index}
          x={(barWidth + barGap) * index + "%"}
          y={props.graphHeight - entry * heightUnit}
          height={entry * heightUnit}
          width={`${barWidth}%`}
          fill={props.graphData.color}
        />
        <text
          key={"label" + index}
          x={(barWidth + barGap) * index + "%"}
          y={props.graphHeight + 30}
          fill="white"
          fontWeight="300"
          fontSize="24px"
        >
          {labelNames[index]}
        </text>
      </svg>
    );
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${props.graphHeight + 50}px`}
    >
      <rect x="0" y="0" width="100%" height={`${props.graphHeight + 10}px`} />
      {graphBars}
    </svg>
  );
};

export default BarGraph;
