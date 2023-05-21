import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword

} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAKfPchzwBKkEQS8ZHyT6sPp90kuR7M4RU",
  authDomain: "clothing-ecommerce-capstone.firebaseapp.com",
  projectId: "clothing-ecommerce-capstone",
  storageBucket: "clothing-ecommerce-capstone.appspot.com",
  messagingSenderId: "766470940524",
  appId: "1:766470940524:web:20dff28c12438fb813b549",
  measurementId: "G-196438HXHH"
}

const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: "select_account"
})



export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth,
    additionalInformation) => {
    if (!userAuth) return
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email, photoURL } = userAuth
        const createdAt = new Date()

        try {
            setDoc(userDocRef, {
                displayName,
                email,
                photoURL,
                createdAt,
                ...additionalInformation
            })
        } catch (err) {
            console.error('Error creating user ', err)
        }
    }
    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};