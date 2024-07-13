import {getAuth, onAuthStateChanged, User} from "firebase/auth";
import {useEffect, useState} from "react";

export default function useUser() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      }
    });
  }, [user]);
  return {user};
}
