import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Trail1 from "./pages/Trail1";
import Trail2 from "./pages/Trail2";
import Trail3 from "./pages/Trail3";
import ExpoTrail from "./pages/ExpoTrail";
import Results from "./pages/Results";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/trail1" element={<Trail1 />} />
                <Route path="/trail2" element={<Trail2 />} />
                <Route path="/trail3" element={<Trail3 />} />
                <Route path="/expoTrail" element={<ExpoTrail />} />
                <Route path="/results" element={<Results />} />
            </Routes>
        </Router>
    );
}

export default App;

