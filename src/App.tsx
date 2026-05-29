import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MLFrameworkArtifact from "./pages/MLFrameworkArtifact";
import NeuralNetworkArtifact from "./pages/NeuralNetworkArtifact";
import GenAITrainingArtifact from "./pages/GenAITrainingArtifact";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artifact/ml-framework" element={<MLFrameworkArtifact />} />
        <Route path="/artifact/neural-networks" element={<NeuralNetworkArtifact />} />
        <Route path="/artifact/genai-training" element={<GenAITrainingArtifact />} />
        {/* Catch-all to redirect back home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
