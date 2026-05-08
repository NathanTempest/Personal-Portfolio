import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MLFrameworkArtifact from "./pages/MLFrameworkArtifact";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Personal-Portfolio/" element={<Home />} />
        <Route path="/Personal-Portfolio/artifact/ml-framework" element={<MLFrameworkArtifact />} />
        {/* Fallback for local dev and other paths */}
        <Route path="/" element={<Home />} />
        <Route path="/artifact/ml-framework" element={<MLFrameworkArtifact />} />
      </Routes>
    </Router>
  );
};

export default App;
