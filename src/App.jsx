import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
