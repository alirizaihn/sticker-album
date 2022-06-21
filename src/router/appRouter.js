import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../container/home";
import Dashboard from "../container/dashboard";
import Team from "../components/team";

const AppRouter = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="album" element={<Home />}>
          <Route path=":id/:teamName" element={<Team />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
