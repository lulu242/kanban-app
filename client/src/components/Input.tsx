import React from 'react';

interface InputProps {
  label: string;
  id: string
  type: string;
  placeholder: string;
  value?: string;
  onBlur?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ id, label, type, placeholder, value, onBlur, onChange }) => {
  return (
    <div>
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className="w-full text-black p-1 rounded-sm my-2"
        value={value}
        onBlur={(e) => {onBlur ? onBlur(e.target.value) : undefined}}
        onChange={(e) => {onChange ? onChange(e.target.value) : undefined}}
      />
    </div>
  );
};

export default Input;
