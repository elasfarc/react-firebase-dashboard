import React from "react";
import { useSession } from "../firbase/userProvider";
import { useNavigate } from "react-router-dom";

export default function ProfileRedirect({ component: Component, ...rest }) {
  const { user } = useSession();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate("/profile/" + user.uid);
    }
  }, [navigate, user]);

  return user ? null : <Component {...rest} />;
}
