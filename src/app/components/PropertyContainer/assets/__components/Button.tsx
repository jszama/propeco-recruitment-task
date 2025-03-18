import React from 'react'

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick: () => void;
  disabled: boolean;
}

export default function Button( { text, type, onClick, disabled }: ButtonProps ) {
  return (
    <button className={`bg-orange-700 text-white hover:bg-orange-800 hover:drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] px-4 py-1 w-auto rounded-sm transition-all duration-150 ease-in-out ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} type={type} onClick={onClick} disabled={disabled}>
        {text}
    </button>
  )
}
