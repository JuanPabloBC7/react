import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './components/layouts/Principal';
import Home from './components/pages/Home';
import SimpleCrud from './components/pages/SimpleCrud';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Principal />}>
          <Route path="/" element={<Home />} />
          <Route path="/simple-crud" element={<SimpleCrud />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
