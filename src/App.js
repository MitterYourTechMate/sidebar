import logo from "./logo.svg"
import "./App.css"
import ButtonAppBar from "./components/navbar/navbar"
import TemporaryDrawer from "./components/sidebar/sidebar"
import Dashboard from "./components/dashboard/dashboard"
import Analyics from "./components/analytics/analytics"
import Reports from "./components/reports/reports"
import News from "./components/news/news"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <ButtonAppBar></ButtonAppBar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/analytics" element={<Analyics />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
          <Route path="/news" element={<News />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
