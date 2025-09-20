import React from "react";
import { Route } from "react-router-dom";
import CitoplasmaPage from "../pages/CitoplasmaPage";
import OrganelasPage from "../pages/OrganelasPage";
import RibossomosPage from "../pages/RibosossomosPage";
import LisossomosPage from "../pages/LisossomosPage";
import PeroxissomosPage from "../pages/PeroxissomosPage";
import VacuolosPage from "../pages/VacuolosPage";
import ReticulosEndoplasmaticosPage from "../pages/reticulosEndoplasmaticosPage";

const ConteudosRoutes = () => (
  <>
    <Route path="/conteudos/citoplasma" element={<CitoplasmaPage />} />
    <Route path="/conteudos/organelas" element={<OrganelasPage />} />
    <Route path="/conteudos/ribossomos" element={<RibossomosPage />} />
    <Route path="/conteudos/lisossomos" element={<LisossomosPage />} />
    <Route path="/conteudos/peroxissomos" element={<PeroxissomosPage />} />
    <Route path="/conteudos/vacuolos" element={<VacuolosPage />} />
    <Route path="/conteudos/reticulos-endoplasmaticos" element={<ReticulosEndoplasmaticosPage />} />
  </>
);

export default ConteudosRoutes;
