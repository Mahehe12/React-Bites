import { useState } from 'react'
import './app.css'

const wordsArray = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do',
  'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'ut',
  'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris',
  'nisi', 'ut', 'aliquip', 'ex', 'ea', 'commodo', 'consequat'
]

export default function App() {
  const [input, setInput] = useState(0);
  const [para, setPara] = useState('');

  function generatePara() {
    if (input < 1) {
      setPara('Please enter a number greater than 0!!');
      return;
    }

    let generatedWords = [];

    for (let i = 0; i < input; i++) {
      const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
      generatedWords.push(randomWord);
    }

    setPara(generatedWords.join(' ') + '.');
  }

  return (
    <div className='flex flex-col items-center justify-center'>

      <h1 className='text-4xl font-bold mt-12 mb-12 '>Paragraph Generator</h1>

      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          className='input-style'
          placeholder='Enter Number of Words'
          type='number'>
        </input>

        &nbsp; &nbsp; &nbsp;

        <button className='btn-style' onClick={generatePara}>
          Generate
        </button>
      </div>

      {para && (
        <div className='mt-6 w-1/2 text-center border-2 border-slate-400 px-4 py-2 mb-4'>
          <p className='text-xl'>{para}</p>
        </div>
      )}
    </div>
  )
}
