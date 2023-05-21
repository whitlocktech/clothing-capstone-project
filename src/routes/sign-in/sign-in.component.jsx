import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils.js'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx'

// import { useEffect } from 'react'
// import { getRedirectResult } from 'firebase/auth'

const SignIn = () => {
    // useEffect(() => {
    //     const handleRedirectResult = async () => {
    //         const response = await getRedirectResult(auth)
    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user)
    //         }
    //     }

    //     handleRedirectResult()
    // }, [])

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }



    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
{/*           <button onClick={signInWithGoogleRedirect}>
                Sign in with Google redirect
    </button>*/}
            <SignUpForm />
        </div>
    )
}

export default SignIn