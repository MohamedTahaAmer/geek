const Input = ({
  label,
  placeholder,
  type,
}: {
  label: string;
  placeholder: string;
  type: string;
}) => {
  return (
    <>
      <div className="flex flex-col pb-4">
        <label htmlFor={label} className="">
          {label}
        </label>
        <input
          type={type}
          id={label}
          placeholder={placeholder}
          name="name"
          className="rounded border-2 p-1 "
        />
      </div>
    </>
  );
};

export default Input;
