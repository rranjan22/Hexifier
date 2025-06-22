const Box = ({ colorValue, hexValue }) => {
  return (
    <section
      className="Box"
      style={{ backgroundColor: hexValue || "transparent" }}  // Use safe background
    >
      <p>
        {colorValue ? colorValue : "Empty Value"}
        <br />
        {hexValue}
      </p>
    </section>
  );
};

export default Box;



