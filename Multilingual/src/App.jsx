// import { useState } from 'react';
// import "./App.css";

// function App() {
//   const [currentLanguage, setCurrentLanguage] = useState("English");
//   const [fontSize, setFontSize] = useState(40);
//   const languageDict = {
//     "English": "Good Morning",
//     "Chinese": "早上好",
//     "Spanish": "Buenos Días",
//     "Haitian": "Bonjou",
//     "Portuguese": "Bom Dia"
//   };
//   const increaseFontSize = () => setFontSize(fontSize + 2);
//   const decreaseFontSize = () => setFontSize(fontSize - 2);

//   return (
//     <div>
//       <div>
//         <button onClick={decreaseFontSize}>-</button>
//         <button onClick={increaseFontSize}>+</button>
//       </div>
//       <h1 style={{ fontSize: `${fontSize}px` }}>{languageDict[currentLanguage]}</h1>
//       <div>
//         {Object.keys(languageDict).map((language) => (
//           <button key={language} onClick={() => setCurrentLanguage(language)}>
//             {language}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


import { useState } from 'react';
import "./App.css";

const LanguageButtons = ({ languages, setCurrentLanguage }) => {
  return (
    <div>
      {languages.map((language) => (
        <button key={language} onClick={() => setCurrentLanguage(language)}>
          {language}
        </button>
      ))}
    </div>
  );
};

const FontSizeControls = ({ increaseFontSize, decreaseFontSize }) => {
  return (
    <div>
      <button onClick={decreaseFontSize}>-</button>
      <button onClick={increaseFontSize}>+</button>
    </div>
  );
};

function App() {
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const [fontSize, setFontSize] = useState(40);
  const languageDict = {
    "English": "Good Morning",
    "Chinese": "早上好",
    "Spanish": "Buenos Días",
    "Haitian": "Bonjou",
    "Portuguese": "Bom Dia"
  };
  const increaseFontSize = () => setFontSize(fontSize + 2);
  const decreaseFontSize = () => setFontSize(fontSize - 2);

  return (
    <div>
      <FontSizeControls increaseFontSize={increaseFontSize} decreaseFontSize={decreaseFontSize} />
      <h1 style={{ fontSize: `${fontSize}px` }}>{languageDict[currentLanguage]}</h1>
      <LanguageButtons languages={Object.keys(languageDict)} setCurrentLanguage={setCurrentLanguage} />
    </div>
  );
}

export default App;