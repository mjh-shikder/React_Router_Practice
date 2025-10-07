import React, { use } from "react";

const Users2 = ({ usersPromise }) => {
  const users2 = use(usersPromise);
  console.log("user2 suspense data load", users2);

  return (
    <div>
      <h2>users 22222222222222</h2>
    </div>
  );
};

export default Users2;
