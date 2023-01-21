import React from 'react';

interface TypeButtonProps {
  text: string
}

function TypeButton({ text }: TypeButtonProps) {
  return (
    <div className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white font-bold py-2 px-4 rounded cursor-pointer">{text}</div>
  );
}

export default TypeButton;
