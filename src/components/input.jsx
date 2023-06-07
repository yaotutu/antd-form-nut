const Input = (props) => {
  return <input {...props} />;
};
const input = (props) => {
  const { value = "", ...otherProps } = props;
  return (
    <div>
      <Input value={value} {...otherProps} />
    </div>
  );
};

export default input;
