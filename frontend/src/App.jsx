import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home"
import AddMood from "./pages/AddMood";
import MoodHistory from "./pages/MoodHistory"


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Router path='/' element={ <Home/> } />
      <Router path='/add-mood' element={ <AddMood />} />
      <Router path='/mood-history' element={ <MoodHistory /> } />
      </Routes>
    </Router>
  )
}

export default App
