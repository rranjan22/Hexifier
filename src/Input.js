const Input = ({ handleColor }) => {
  return (
    <div className="InputColor">
      <input
        type="text"
        placeholder="Add color name"
        onChange={(e) => {
          handleColor(e);
        }}
      />
    </div>
  );
};

export default Input;

