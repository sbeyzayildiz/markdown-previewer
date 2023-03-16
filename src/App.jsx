import './App.css';
import { useEffect, useState } from 'react';
import { marked } from 'marked';

function App() {

  const [input, setInput] = useState(`Heading
  =======
  
  Sub-heading
  -----------
  
  ### Another deeper heading
  
  Paragraphs are separated
  by a blank line.
  
  Leave 2 spaces at the end of a line to do a
  line break
  
  Text attributes *italic*, **bold**,
  \`monospace\`, ~~strikethrough~~ .
  
  Shopping list:
  
    * apples
    * oranges
    * pears
  
  Numbered list:
  
    1. apples
    2. oranges
    3. pears
  
  The rain---not the reign---in
  Spain.
  
   *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`);


  const [preview, setPreview] = useState({ __html: '' })

  useEffect(() => {

    const parsedText = marked(input, { sanitize: true })

    setPreview({ __html: parsedText });

  }, [input])

  const handleTextarea = (e) => {

    const value = e.target.value;

    setInput(value);



  }




  return (
    <div className="App">
      <header className="App-header">
        Markdown Previewer
      </header>
      <div className="container">
        <textarea className='input-board' value={input} onChange={handleTextarea} ></textarea>
        <div className='text-board' dangerouslySetInnerHTML={preview}>

        </div>
      </div>
    </div>
  );
}

export default App;
