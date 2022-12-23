import { InputHTMLAttributes, useRef, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

export default function Input({
  label,
  type,
  name,
  value,
  pattern,
  placeholder,
  errorMessage,
  onChange,
}: InputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [focused, setFocused] = useState<boolean>(false);

  const handleBlur = () => {
    if (inputRef.current) {
      inputRef.current.dataset.focused = "true";
    }
    setFocused(true);
  };

  return (
    <label className="flex flex-col">
      <span>{label}</span>
      <input
        ref={inputRef}
        className="p-[15px] my-[10px] outline-gray-300 outline focus:outline-gray-700 rounded-md"
        type={type}
        name={name}
        value={value}
        pattern={pattern}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={onChange}
        data-focused={focused}
      />
      <span className="input-error-message">{errorMessage}</span>
    </label>
  );
}
