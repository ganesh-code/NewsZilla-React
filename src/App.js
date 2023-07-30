import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import FullNewsPage from './components/FullNewsPage';
import Error from './components/Error';

export default function App() {

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0);

  const [theme, setTheme] = useState("light");
  const [icon, setIcon] = useState("moon");
  const [text, setText] = useState("dark")
  
  const toogleTheme = ()=>{
    if(theme==="light"){
      setTheme("dark");
      setIcon("sun");
      setText("light")
      document.body.style.backgroundColor = '#181a1c';
      document.body.style.color = 'white';
    }else{
      setTheme("light")
      setIcon("moon");
      setText("dark")
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';

    }
  }

  return (
    <div>
      <BrowserRouter >
        <Navbar theme={theme} icon={icon} toogleTheme={toogleTheme} />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path='/' element={<News theme={theme} text={text} setProgress={setProgress} apiKey={apiKey} country="in" category="general" />} />
          <Route exact path="/business" element={<News theme={theme} text={text} setProgress={setProgress} apiKey={apiKey} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News theme={theme} text={text} setProgress={setProgress} apiKey={apiKey} country="in" category="entertainment" />} />
          <Route exact path="/health" element={<News theme={theme} text={text} setProgress={setProgress} apiKey={apiKey} country="in" category="health" />} />
          <Route exact path="/sports" element={<News theme={theme} text={text} setProgress={setProgress} apiKey={apiKey} country="in" category="sports" />} />
          <Route exact path="/science" element={<News theme={theme} text={text} setProgress={setProgress} apiKey={apiKey} country="in" category="science" />} />
          <Route exact path="/technology" element={<News theme={theme} text={text} setProgress={setProgress} apiKey={apiKey} country="in" category="technology" />} />
          <Route exact path="/news" element={<FullNewsPage theme={theme} text={text} />} />
          <Route exact path='*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}