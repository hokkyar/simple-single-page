import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Layout'
import Home from "./Home"
import Contact from "./Contact"
import Projects from "./Projects"
import { data } from "../utils/data"


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Home data={data} />} />
                    <Route path="contact" element={<Contact data={data} />} />
                    <Route path="projects" element={<Projects data={data} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
