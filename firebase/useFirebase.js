import React, { useEffect } from 'react';
import initializeFirebaseApp from './firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, getIdToken } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/stateSlice/stateSlice';


initializeFirebaseApp()
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const dispatch = useDispatch();




    // google-sign-in-method

    const googleSign = (location, navigate) => {
        // dispatch(setIsLoading(true));

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                //   dispatch(setIsLoading(false));
                dispatch(setUser(user));
                //   saveUser(user?.email, user?.displayName,'PUT')
                //   const destination = location?.state?.from || '/';
                //   navigate(destination);
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                //   dispatch(setGoogleSignErrorMsg(errorMessage));
            });
    }


    // google - signOut - method

    const googleSingOut = () => {
        signOut(auth).then(() => {
            dispatch(setUser(null));
            // dispatch(setAdmin(false));
        }).catch((error) => {
            const errorMessage = error.message;
            // dispatch(setErrorMsg(errorMessage));
        });
    }



// sign-in-with-email-and-password

const signWithEmailPass = (email, password, location, navigate) =>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    // saveUser(user?.email, user?.displayName, 'PUT')
    // dispatch(setUser(user));

    // const destination = location?.state?.from || '/';
    // navigate(destination);
  })
  .catch((error) => {
    const errorMessage = error.message;
    // dispatch(setGoogleSignErrorMsg(errorMessage));
  });

  }




  // register-user-with-email-password

  const registerWithEmailPass = (email, password, name) => {
    // dispatch(setIsLoading(true));
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // dispatch(setErrorMsg(''));
            const newUser = { email, displayName: name };
            dispatch(setUser(newUser))
            // saveUser(email, name, 'POST');

            // swal({
            //   title: "Sign up success!",
            //   icon: "success"
            // });
           

            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            // navigate('/');

        })
        .catch((error) => {
        //   const errorMessage = error.message;
        //   dispatch(setErrorMsg(errorMessage));
        })
        .finally(() => {
            //  dispatch(setIsLoading(false))
            });
}



    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            dispatch(setUser(user))
            if (user) {
                dispatch(setUser(user));
                // getIdToken(user)
                //     .then(idToken => {
                //         dispatch(setIdToken(idToken));
                //     })
            } else {
                dispatch(setUser(user));
            }

            // dispatch(setIsLoading(false));
        });
        return () => unsubscribed;
    }, [dispatch, auth])


    return {
        googleSign,
        googleSingOut,
        signWithEmailPass,
        registerWithEmailPass
    }
};

export default useFirebase;