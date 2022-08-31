import React, {useState} from 'react';
import { romanLetters } from '../constant/index';
import styles from '../style';

const Popup = () => {
    const [active, setActive] = useState(false);
  return (
    <div className={`flex justify-center bg-black_op text-white absolute left-0 top-0 w-full h-[100vh] ${active ? 'hidden' : ''}`}>
            <div className={styles.popup}>
                <h2 className='mb-[10px]'>Calculator for convert Roman numeral to Arabic numeral</h2>
                <p className='mb-[20px]'>Roman numerals is an ancient number system that is still used in many places.
                  In roman numerals, alphabets are used to represent the fixed positive numbers.
                    These roman numerals are I, II, III, IV, V, VI, VII, VIII, IX, and X represent 
                    1, 2, 3, 4, 5, 6, 7, 8, 9 and 10 respectively.</p>
                    <div className='mb-[20px] '>
                        <div className='flex justify-center'>
                            {romanLetters.map((item) => (
                                <span className='p-[10px] border-[1px] w-full font-ibm'>{item.letter}</span>
                            ))}
                        </div>
                        <div className='flex justify-center'>
                            {romanLetters.map((item) => (
                                <span className='p-[10px] border-[1px] w-full'>{item.number}</span>
                            ))}
                        </div>
                    </div>
                    
                <button className='py-2 px-5 text-black bg-white rounded-[20px]' onClick={() => {setActive(true)}}>Ok</button>
            </div>
            
          </div>
  )
}

export default Popup