import React from "react";
import { useSession } from "../firbase/userProvider";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user } = useSession();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [navigate, user]);
  return user ? <div>hello {user.displayName}</div> : null;
}

export default Profile;
