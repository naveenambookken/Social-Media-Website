import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { auth } from "../firebase/config";
import firebase from "firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [profileImage, setProfileImage] = useState(null);

  function signup(email, password, name) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: name,
          photoURL:"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" });
        
      }).then(() => {
       console.log("successfully signed up")
        
      });
      
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
    
  }
  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }
  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }
  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }
  function addUser(name, email) {
    return auth.onAuthStateChanged((user) => {
      firebase.firestore.collection("users").doc(user.uid).add({
        id: user.uid,
        name: name,
        email: email,
        
      });
      
    });
  }
  
  function addProfilePic(image) {
    return auth.onAuthStateChanged((user) => {
    firebase
      .storage()
      .ref(`/profile_pic/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          console.log(url);
           currentUser.updateProfile({ photoURL: url})
          
         
        });
      });
    })
  }
 
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    addUser,
    addProfilePic,
    
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
