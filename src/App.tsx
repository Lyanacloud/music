import './App.css'
import {Routes, Route} from "react-router";
import Home from "./Home/Home.tsx";
import Analysis from "./Analyse/Analyse.tsx";
import Artist from "./Artist/Artist.tsx";
import {AnimatePresence} from "motion/react"

function App() {

  return (
    <>
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>} />
            <Route path="/analyticPage" element={<Analysis/>}/>
            <Route path="/:id" element={<Artist/>}/>
        </Routes>
    </AnimatePresence>

    </>
  )
}

export default App
