import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/details/Details";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <BrowserRouter>
        
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </Box>
  );
}

export default App;
