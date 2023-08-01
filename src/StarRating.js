const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starConatainerStyle = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};
export default function StarRating({ maxRating }) {
  return (
    <div style={containerStyle}>
      <div style={starConatainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}
