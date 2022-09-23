import React, {} from 'react';
import {ProtectedRoute} from "../auth/protectedRoutes";
import DefaultLayout from "../components/layout/DefaultLayout";
import useAuth from "../auth/context";
import UserProfile from "../components/user/UserProfile";

const ProfilePage = (props) => {
  const {user, loading} = useAuth()
  return (
    <DefaultLayout>
      <h1>Profile page</h1>
      <div className="row">
        <div className="col-4">
          {(!loading && user) && (
            <UserProfile user={user}/>
          )}
        </div>
      </div>
    </DefaultLayout>
  )
}

export default ProtectedRoute(ProfilePage)