import React from "react";
import { Route } from "react-router-dom";
import CitoQuestPage from "../pages/CitoQuestPage";
// import CitoPuzzlePage from "../pages/CitoplasmaPage";

const ConteudosRoutes = () => (
  <>
    <Route path="/games/cito-quest" element={<CitoQuestPage />} />
    {/* <Route path="/games/cito-puzzle" element={<CitoPuzzlePage />} /> */}
  </>
);

export default ConteudosRoutes;
