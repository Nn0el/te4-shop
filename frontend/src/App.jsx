import { Box, useColorModeValue} from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import LoginPage from "./pages/LoginPage"
import CartPage from "./pages/CartPage"

function App() {
 

  return (
    <Box minH={("100vh")} bg={useColorModeValue("gray.100", "gray.900")} >
      <Navbar />
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/create" element={<CreatePage/>}/>
  <Route path="/login" element={<LoginPage/>}/>
  <Route path="/cart" element={<CartPage/>}/>
 

</Routes>
    </Box>
  )
}

export default App
