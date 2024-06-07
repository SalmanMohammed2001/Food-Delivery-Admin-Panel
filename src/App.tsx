
import './App.css'

import NavBar from "./components/navbar/NavBar.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import {Route, Routes} from "react-router-dom";
import Add from "./pages/add/Add.tsx";
import List from "./pages/list/List.tsx";
import Orders from "./pages/order/Orders.tsx";

function App() {


  return (
      <div>
        <NavBar/>
        <hr/>
        <div className="app-content flex">
          <Sidebar/>
            <Routes>
                <Route path={"/add"} element={<Add/>}/>
                <Route path={"/list"} element={<List/>}/>
                <Route path={"/order"} element={<Orders/>}/>
            </Routes>
        </div>
      </div>
  )
}

export default App
