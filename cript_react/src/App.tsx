import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomeStack from "./stack/HomeStack.tsx";
import AppStack from "./stack/AppStack.tsx";
import Main from "./pages/App/Main.tsx";
import Transactions from "./pages/App/Transactions.tsx";
import Shop from "./pages/App/Shop.tsx";


function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<HomeStack/>}/>
            <Route path="/app" element={<AppStack/>}>
                <Route path="/app/home" element={<Main/>}/>
                <Route path="/app/transactions" element={<Transactions/>}/>
                <Route path="/app/shop" element={<Shop/>}/>
            </Route>
        </Routes>

    </>
  )
}

export default App
