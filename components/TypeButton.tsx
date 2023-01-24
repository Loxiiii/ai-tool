import React from 'react';
import axios from 'axios';

interface TypeButtonProps {
  text: string
}

const testRequest = () => {
  console.log('You just clicked');
  axios({
    method: 'post',
    url: '/api/hello',
    data: {
      prompt: 'Hello, nice to meet you! what is your name?',
    },
  }).then((data) => {
    console.log(data.data[0].text);
  });
};

function TypeButton({ text }: TypeButtonProps) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="bg-purple-400 hover:bg-purple-500 active:bg-purple-600 focus:outline-none focus:ring focus:ring-violet-300 text-white font-bold py-2 px-4 rounded cursor-pointer"
      onClick={() => {
        testRequest();
      }}
    >
      {text}

    </div>
  );
}

export default TypeButton;
