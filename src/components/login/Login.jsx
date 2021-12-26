import React from 'react'
import './Login.css'
import Button from '@material-ui/core/Button';
import { auth, provider } from '../../firebase/firebase';
import { useStateValue } from '../../dataProvider/StateProvider';
import { actionTypes } from '../../dataProvider/Reducer';
function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch(error => {
                alert(error.message);
        })
    }

    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://thumbs.bfldr.com/at/pl546j-7le8zk-btwjnu/v/2925183?expiry=1640979529&fit=bounds&height=800&sig=MDA2MGY4YjVhYTBjNmFhMjA1MmExZDk2MzgyYjc4ZDlkYTU3NWI0Yw%3D%3D&width=1100" alt="" />

                <h2>Sign In to Slack Clone</h2>
                <Button onClick={signIn}>Sign In with Google</Button>

            </div>
        </div>
    )
}

export default Login
