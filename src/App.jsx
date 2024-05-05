import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
import WorkExperience from './Components/WorkExperience'
import Education from './Components/Education'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import ScrollButton from './Components/ScrollButton'
import React, { useState, useEffect } from 'react';
import Spinner from './Components/Spinner'
function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    setDataLoaded(true);
    setTimeout(() => {
      setDataLoaded(false);
    }, 3000);
  }, []);
  return (

    <>
      {dataLoaded ? (
        <div className="spinner-container">
          <div className="spinner-app">
            <Spinner />
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <main>
            <Home />
            <About />
            <WorkExperience />
            <Education />
            <Projects />
            <Contact />
            <ScrollButton />
          </main>
          <Footer />
        </>
      )}

    </>
  )
}

export default App
