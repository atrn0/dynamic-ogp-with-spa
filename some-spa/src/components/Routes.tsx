import React from "react";
import { Switch, Route } from "react-router-dom";
import * as Page from "./pages";

export function Routes() {
  return (
    <Switch>
      {/* <Route path="/" exact>
                <Page.Home />
            </Route> */}
      <Route path="/room/:id" exact>
        <Page.RoomDetail />
      </Route>
    </Switch>
  );
}
