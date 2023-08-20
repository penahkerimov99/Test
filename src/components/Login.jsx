import React from 'react'

//icons
import { AiOutlineClose } from "react-icons/ai"

// context
import { useMainContext } from '../untils/MainContext'

export const Login = () => {
    const values = useMainContext()

    const closeLogin = ()=>{
        values.setOpenSingin('none');
        values.setOpenForm('-200%');
    }
    return (
        <>
            <div onClick={closeLogin} style={{"display": values.openSingin}} className="bg-login"></div>

            <div style={{"top": values.openForm}} className="login-cart">
                <div className="login-inner">
                    <div onClick={closeLogin} className="close">
                        <AiOutlineClose />
                    </div>

                    <h1>Sign in</h1>

                    <p>Do you have an toog account?</p>

                    <form className='log-form' action="">
                        <div className="form-1">
                            <label htmlFor="">Email</label>
                            <input type="email" />
                        </div>

                        <div className="form-1">
                            <label htmlFor="">Password</label>
                            <input type="password" />
                        </div>

                        <div className="forgot">Forgot password?</div>

                        <div className="btns-form">
                            <button className='signup'>Sign up</button>

                            <button className='signin'>Sign in</button>
                        </div>

                    </form>

                    <a className='ending' href="">
                        This site is protected by reCAPTCHA and the Google
                        Privacy Policy and Terms of Service apply.
                    </a>
                </div>
            </div>
        </>
    )
}
