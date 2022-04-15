import React from "react";
import { signout } from "./firbase/auth";
import { useSession } from "./firbase/userProvider";
import { useNavigate } from "react-router-dom";

function Header() {
  const { user } = useSession();
  const navigate = useNavigate();

  async function handleSignOut() {
    await signout();
    navigate("/signup");
  }
  return (
    <header>
      <h2>The Grid</h2>
      {user ? (
        <button
          style={{ float: "right" }}
          className="ui button secondary logout"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      ) : null}
    </header>
  );
}

export default Header;
