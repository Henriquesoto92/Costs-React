import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style/color.css"


import {
  Home, 
  Projects, 
  Company, 
  Contact, 
  NewProject
} from "./components/pages/index"
import {
  Navigation, 
  Container, 
  Footer
} from "./components/layout/index"


function App() {
  return (
    <Router >
      <Navigation />

      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes >
      </Container >

      <Footer />
    </Router >
  );
}

export default App;
