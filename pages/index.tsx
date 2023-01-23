import { React, useState, useEffect } from 'react';
import axios from 'axios';
import TypeButton from '../components/TypeButton.tsx';

export default function Home() {
  const [showCover2, setShowCover2] = useState(false);

  return (
    <>
      <div className="flex flex-row mt-5 ">
        <div className="mr-5 font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">What do you want to write?</div>
        <div className="flex flex-row flex-start">
          {/* <div>Cover Letter</div>
          <div>Email</div> */}
          <TypeButton text="Cover Letter" />
          <TypeButton text="Email" />
        </div>
      </div>
      {/* Cover Letter Stage 2 */}
      <div>
        Hello
      </div>
    </>
  );
}
