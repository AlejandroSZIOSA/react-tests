import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ContactsPage from "./component/routes/ContactsPage";
import AboutPage from "./component/routes/AboutPage";
import HomePage from "./component/routes/HomePage";

function App() {
  return (
    <Router>
      <div>
        <header style={{ display: "flex", flexDirection: "row" }}>
          <h3>Header</h3>
          <nav>
            <ul>
              <li>
                <Link to="/HomePage">Home Page</Link>
              </li>
              <li>
                <Link to="/ContactsPage">Contact Page</Link>
              </li>
              <li>
                <Link to="/AboutPage">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/ContactsPage" element={<ContactsPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
