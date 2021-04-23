import React from "react";
import { Switch, Route } from "react-router-dom";

import ProfilePage from "../../pages/ProfilePage";

const AdminLayout = () => {
  return (
    <Switch>
      <Route exact path="/admin/profile" component={ProfilePage} />
    </Switch>
  );
};

export default AdminLayout;
