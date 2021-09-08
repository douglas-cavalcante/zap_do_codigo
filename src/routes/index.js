
import React from "react";
import { Route, Switch } from "react-router-dom";
import BookDetails from "../pages/BookDetails";

import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Catalog />
      </Route>

      <Route path="/cart">
        <Cart />
      </Route>

      <Route path="/details/:id">
        <BookDetails />
      </Route>

      <Route>404 Not Found</Route>
    </Switch>

  );
};

export default Routes;