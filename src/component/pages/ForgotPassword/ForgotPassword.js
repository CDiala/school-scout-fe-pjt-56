import './ForgotPassword.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const ForgotPassword = () => {

    const [email, setEmail] = useState("");

    function handleClick() {
        let soln = document.getElementById("myEmail").value;
        console.log('hello worldll', soln);
    }


    async function sendResetLink() {
        setTimeout(() => {
            alert('reset link sent sucessfully');
        }, 3000);
        // let soln = document.getElementById("myEmail").value;
        // setEmail(soln);
        // let user = { email };
        // console.log( user, email );

        // let result = await fetch('https://schoolscout.herokuapp.com/auth/accounts/password/reset/', {
        //     method: 'POST',
        //     body: email,
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     }
        // })

        // let feedback = await result.json();
        // let requestStatus = result.status;

        // if (requestStatus === 200) {
        //     alert('link sent successful');
        //     console.log('result.status', result.status, 'result.statusText', result.statusText);
        //     console.log('feedbacktoday:', Object.keys(feedback).toString(), Object.values(feedback).toString())
        //     // localStorage.setItem('session id', JSON.stringify(feedback))
        //     localStorage.setItem('link', Object.values(feedback).toString())
        //     if (localStorage.getItem('pre-page')) {
        //         document.getElementById('cap-rslt').click()
        //     }
        // } else {
        //     alert(result.status + ': ' + result.statusText);
        // }
    }

    return (
        <section className="fgt-pwd-section">
            <div className="app-fgt-pwd-container">
                <div className="app-fgt-pwd-img" >
                </div>
                <div className="app-fgt-pwd-form">
                    <h1 className="app-fgt-pwd-heading">Forgot Password?</h1>
                    <div className="app-fgt-pwd-form-field" action="">
                        <input id="myEmail" value={ email } onChange={ (e) => setEmail(e.target.value) } className="app-fgt-pwd-input" type="text" placeholder="Enter email address" name="" />
                        <button onClick={ () => sendResetLink() } className="app-fgt-pwd-btn">Continue</button>
                    </div>
                </div>
            </div>
            <Link style={{display: 'hidden'}} id="cap-rslt" to={process.env.PUBLIC_URL + '/career-advisory/cap-rslt'}></Link>
        </section>
    )
}
