import { React, useState, useEffect } from 'react';
import axios from 'axios';
import TypeButton from '../components/TypeButton.tsx';

export default function Home() {
  const [showCover2, setShowCover2] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [responseParagraphs, setResponseParagraphs] = useState([]);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [animationIndex, setAnimationIndex] = useState(0);
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [info, setInfo] = useState('');
  const [spice, setSpice] = useState(1);
  const [length, setLength] = useState(300);
  const [language, setLanguage] = useState('English');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleInfoChange = (e) => {
    setInfo(e.target.value);
  };

  const handleSpiceChange = (e) => {
    setSpice(e.target.value);
  };

  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSubmitCoverLetter = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/api/hello',
      data: {
        fullName,
        company,
        role,
        info,
        spice,
        length,
        language,
      },
    }).then((data) => {
      setShowResult(true);
      const resParagraphs = data.data[0].text.split('\n').filter(Boolean);
      setResponseParagraphs(resParagraphs);
    });
  };

  useEffect(() => {
    if (currentParagraph < responseParagraphs.length) {
      setTimeout(() => {
        setAnimationIndex(animationIndex + 1);
        setCurrentParagraph(currentParagraph + 1);
      }, (currentParagraph + 1) * 1000);
    }
  }, [currentParagraph, responseParagraphs.length, animationIndex]);

  return (
    <div>
      <div className="flex flex-row mt-5 max-w-3xl my-0 mx-20">
        <div className="mr-5 font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 content-center">What do you want to write?</div>
        {/* <div className="flex flex-row flex-start">
          <TypeButton text="Cover Letter" />
          <TypeButton text="Email" />
        </div> */}
      </div>
      { /* Show cover 2 */
        showCover2
        && (
          <div className="w-1/3 float-left mx-20">
            <div className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Please fill in the following:</div>
            <form className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-4">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Full Name
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    onChange={(e) => {
                      handleFullNameChange(e);
                    }}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    placeholder="Jane Doe"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Company
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    onChange={(e) => {
                      handleCompanyChange(e);
                    }}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    placeholder="Google"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Role
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    onChange={(e) => {
                      handleRoleChange(e);
                    }}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    placeholder="Software Engineer"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Additional Information
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    onChange={(e) => {
                      handleInfoChange(e);
                    }}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    placeholder="I have x experience..."
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Number of words
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    onChange={(e) => {
                      handleLengthChange(e);
                    }}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    placeholder="300"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Spice 🔥
                  </label>
                </div>
                <div className="md:w-2/3">
                  <div className="relative">
                    <select
                      onChange={(e) => {
                        handleSpiceChange(e);
                      }}
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:5"
                    >
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>

                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Language
                  </label>
                </div>
                <div className="md:w-2/3">
                  <div className="relative">
                    <select
                      onChange={(e) => {
                        handleLanguageChange(e);
                      }}
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:5"
                    >
                      <option>English</option>
                      <option>Spanish</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>

                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3" />
                <div className="md:w-2/3">
                  <button
                    onClick={(e) => {
                      handleSubmitCoverLetter(e);
                    }}
                    className="bg-purple-400 hover:bg-purple-500 active:bg-purple-600 focus:outline-none focus:ring focus:ring-violet-300 text-white font-bold py-2 px-4 rounded cursor-pointer"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>

          </div>
        )
      }
      {' '}

      {
  showResult && (
    <div>
      {
        responseParagraphs.map((p, i) => {
          p.concat('\n\n');

          return (
            <div>
              <p
                key={i}
                style={{
                  visibility: i <= currentParagraph ? 'visible' : 'hidden',
                  animation: `fade-in 1s ${animationIndex * 0.5}s ease-out forwards`,
                }}
              >
                {p}
              </p>
              <p>&nbsp;</p>
            </div>
          );
        })
      }
    </div>
  )
}

    </div>
  );
}
