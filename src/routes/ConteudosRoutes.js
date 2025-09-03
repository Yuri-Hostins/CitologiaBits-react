import React from "react";
import { Route } from "react-router-dom";
import CitoplasmaPage from "../pages/CitoplasmaPage";
import OrganelasPage from "../pages/OrganelasPage";
import RibossomosPage from "../pages/RibosossomosPage";

const ConteudosRoutes = () => (
  <>
    <Route path="/conteudos/citoplasma" element={<CitoplasmaPage />} />
    <Route path="/conteudos/organelas" element={<OrganelasPage />} />
    <Route path="/conteudos/ribossomos" element={<RibossomosPage />} />
  </>
);

export default ConteudosRoutes;
