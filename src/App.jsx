import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Projetos from "./pages/Projetos"
import Contato from "./pages/Contato"

function App() {
    return (
    <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    )
}

export default App