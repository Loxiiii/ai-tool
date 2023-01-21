import React from 'react';

interface TypeButtonProps {
  text: string
}

function TypeButton({ text }: TypeButtonProps) {
  return (
    <div className="bg-purple-400 hover:bg-purple-500 active:bg-purple-600 focus:outline-none focus:ring focus:ring-violet-300 text-white font-bold py-2 px-4 rounded cursor-pointer">{text}</div>
  );
}

export default TypeButton;
