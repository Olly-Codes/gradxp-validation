import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing'
import SMMEForm from './pages/smmeForm'
import StudentForm from './pages/studentForm'
import Success from './pages/success'

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/smmeForm" element={<SMMEForm />}/>
        <Route path="/studentForm" element={<StudentForm />}/>
        <Route path="/success" element={<Success />}/>
      </Routes>
    </Router>
  )
}

export default App
