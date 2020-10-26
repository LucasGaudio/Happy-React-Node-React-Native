import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import OrphanagesMap from "./pages/OrphanagesMap";
import Orphanage from "./pages/Orphanage";
import CreateOrphanage from "./pages/CreateOrphanage";

function Routes() {
   return (
      <BrowserRouter>
         <Route exact path="/" component={LandingPage} />
         <Route exact path="/map" component={OrphanagesMap} />
         <Route exact path="/orphanages/create" component={CreateOrphanage} />
         <Route exact path="/orphanages/:id" component={Orphanage} />
      </BrowserRouter>
   );
}
export default Routes;
