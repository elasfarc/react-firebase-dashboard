// import { auth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

async function signup({ email, password, firstName, lastName }) {
  const resp = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  const user = resp.user;
  await user.updateProfile({ displayName: `${firstName} ${lastName}` });
  return user;
}

function signout() {
  return firebase.auth().signOut();
}

function signin({ email, password }) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => user);
}

export { signup, signout, signin };
