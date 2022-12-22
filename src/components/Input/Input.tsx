import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <label className="flex flex-col">
      <span>{label}</span>
      <input
        className="p-[15px] my-[10px] outline-gray-300 outline focus:outline-gray-700 rounded-md"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
}
