import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import About from "./component/routes/AboutPage";
import ContactsPage from "./component/routes/ContactsPage";
/* import { CustomHookFetch } from "./component/CustomHookFetch"; */

function App() {
  return (
    <Router>
      <header>
        <h1>React Tests</h1>
        {/*   <CustomHookFetch /> */}
        <ol>
          <li>
            <Link to="/ContactPage">Contact page</Link>
          </li>
          <li>
            <Link to="/AboutPage">About</Link>
          </li>
        </ol>
      </header>
      <Routes>
        <Route path="/ContactPage" element={<ContactsPage />} />
        <Route path="/AboutPage" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
