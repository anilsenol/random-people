import React from "react";

const SingleUser = ({ user }) => {
  return (
    <div className="singleuser">
      <img src={user.picture.large} alt="" />
      <div className="userinfo">
        <h3>
          {user.name.first} {user.name.last}
        </h3>
        <p>Mail Address:{user.email}</p>
        <p>Country:{user.location.country}</p>
      </div>
    </div>
  );
};

export default SingleUser;
