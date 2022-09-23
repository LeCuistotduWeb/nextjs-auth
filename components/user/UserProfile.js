import React, {} from 'react';

const UserProfile = ({user}) => {
  return (
    <div className="card">
      <div className="card-body">
        <div>
          <strong>Username: </strong>{user.username}
        </div>
        <div>
          <strong>Roles: </strong>{user.role}
        </div>
      </div>
    </div>
  )
}

export default UserProfile