import React from "react";
import { Switch, Route } from "react-router";

import ProfilePage from "../../pages/ProfilePage";

const AdminLayout = () => {
  return (
    <div>
      <h1>Admin Layout</h1>
      <Switch>
        <Route exact path="/admin/profile" component={ProfilePage} />
      </Switch>
    </div>
  );
};

export default AdminLayout;
