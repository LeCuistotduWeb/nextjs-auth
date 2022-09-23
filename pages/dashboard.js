import React, {} from 'react';
import DefaultLayout from "../components/layout/DefaultLayout";
import {AdminRoutes} from '../auth/adminRoutes'

const DashboardPage = (props) => {
  return (
    <DefaultLayout>
      <h1>Dashboard page</h1>
    </DefaultLayout>
  )
}

export default AdminRoutes(DashboardPage);