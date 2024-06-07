
import './App.css'

import NavBar from "./components/navbar/NavBar.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";

function App() {


  return (
      <div>
        <NavBar/>
        <hr/>
        <div className="app-content flex">
          <Sidebar/>
        </div>
      </div>
  )
}

export default App
