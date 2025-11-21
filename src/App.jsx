import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [question, setQuestion] = useState("")
  const [answer , setAnswer] = useState("")

 async function generateai (){
   setAnswer("Loading");
  const responce = await axios({
     url : "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAVjUyk1hJgmOvrfk09V71SbwN2IDmFTew",
     method : "post",
     data : {
    "contents": [
      {
        "parts": [
          {
            "text": question
          }
        ]
      }
    ]
  }
    })
    console.log(
      setAnswer(responce['data']['candidates'][0]['content']['parts']['0']['text'])
    );
  }
  return (
    <>
 
      <h1>AI Chat Bot</h1>
      <textarea value={question} onChange={(e) => setQuestion(e.target.value)}  cols="30" rows="10" ></textarea>
      <button onClick={generateai}>Generate</button>
      <pre>{answer}</pre>
    </>
  )
}

export default App
