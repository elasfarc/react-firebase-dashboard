import React from "react";
import firebase from "firebase/compat/app";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [session, setSession] = React.useState({ user: null, loading: true });

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setSession({ user, loading: false });
    });
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={session}>
      {!session.loading && children}
    </UserContext.Provider>
  );
}

function useSession() {
  const context = React.useContext(UserContext);
  if (!context)
    throw new Error("useSession must be used within the UserProvider");
  return context;
}

export { UserProvider, useSession };
