import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition ${className || ""}`}
    >
      {children}
    </button>
  );
}
