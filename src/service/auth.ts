import { auth } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
export const registerUser = async (
  email: string,
  pass: string,
  name: string
) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    pass
  );
  const user = userCredential.user;

  await updateProfile(user, {
    displayName: name,
  });
};

export const loginUser = async (email: string, pass: string) => {
  await signInWithEmailAndPassword(auth, email, pass);
};
