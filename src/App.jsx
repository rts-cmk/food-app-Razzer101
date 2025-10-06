import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Details from "./pages/Details"

function App() {

  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="details/:burgerId" element={<Details/>}/>
    </Routes>
  )
}

export default App
