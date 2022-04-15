import React from "react";
import { useSession } from "../firbase/userProvider";

function Profile() {
  const { user } = useSession();
  return user ? <div>hello {user.displayName}</div> : null;
}

export default Profile;
