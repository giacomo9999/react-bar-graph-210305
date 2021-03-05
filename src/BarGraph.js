const BarGraph = () => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* with relative unit such as percentage, the visual size
  of the square looks unchanged regardless of the viewBox
   */}
      <rect x="0" y="0" width="100%" height="100%" />

      {/* with a large viewBox the circle looks small
  as it is using user units for the r attribute:
  4 resolved against 100 as set in the viewBox */}

      <circle cx="50%" cy="50%" r="4" fill="white" />
    </svg>
  );
};

export default BarGraph;
