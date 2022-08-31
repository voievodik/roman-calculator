import React, { useState } from 'react';
import styles from './style';
import { roman, romanLetters } from './constant/index';
import Popup from './components/Popup';

function App() {

    const [data, setData] = useState("");  
    
    const s = data;

    function romanToInt(s) {
      let accumulator = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "I" && s[i + 1] === "V") {
              accumulator += 4;
              i++;
            } else if (s[i] === "I" && s[i + 1] === "X") {
              accumulator += 9;
              i++;
            } else if (s[i] === "X" && s[i + 1] === "L") {
              accumulator += 40;
              i++;
            } else if (s[i] === "X" && s[i + 1] === "C") {
              accumulator += 90;
              i++;
            } else if (s[i] === "C" && s[i + 1] === "D") {
              accumulator += 400;
              i++;
            } else if (s[i] === "C" && s[i + 1] === "M") {
              accumulator += 900;
              i++;
            } else {
              accumulator += roman[s[i]];
            }
          }
          return accumulator;
    }

    const handleClick = (e) =>{
      setData(data.concat(e.target.name));
    }

    const clear = () =>{
      setData("");
    }

    const result = () =>{
      setData(romanToInt(s))
    };

    return (
        <div className={`w-full h-[100vh] bg-main relative ${styles.paddingX} ${styles.flexCenter}`}>
          <Popup />
          
          <div className='bg-box rounded-[20px] py-[60px] px-8'>
            <div>
              <input className={styles.inputStyle} type="text" name='txt' readOnly onInput={() => {data}} defaultValue={data}/>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {romanLetters.map((item) => (
                    <button key={item.id} className={styles.buttonStyle} onClick={handleClick} name={item.letter}>
                      {item.letter}
                    </button>
                ))}
              <button className={styles.buttonStyle} onClick={clear}>сlear</button>
              <button className={styles.buttonStyle} onClick={result} name="=">=</button>
            </div>
          </div>
        </div>
    )
  }

export default App;
