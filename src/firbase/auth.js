// import { auth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

async function signup({ email, password, firstName, lastName }) {
  const resp = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  await resp.user.updateProfile({ displayName: `${firstName} ${lastName}` });
}

export default signup;
