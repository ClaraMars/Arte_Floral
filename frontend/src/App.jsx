import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Main/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Main/Login/Login";
import Profile from "./components/Main/Profile/Profile";
import Not_Found from "./components/Not_Found/Not_Found";

function App() {
  return (
    <Router>
      <Header />
      <main className="c-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Not_Found />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
