import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSession } from "../firbase/userProvider";

export default function PrivateRoute({ component: Component, ...rest }) {
  const params = useParams();
  const { user } = useSession();
  const navigate = useNavigate();

  const sameUser = user?.uid === params.id;

  React.useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [navigate, user]);
  return user && sameUser ? (
    <Component {...rest} />
  ) : (
    <div>
      <h1>You are not authorized to view this page</h1>
      <button onClick={() => navigate(`/profile/${user.uid}`)}>
        back to Profile
      </button>
    </div>
  );
}
