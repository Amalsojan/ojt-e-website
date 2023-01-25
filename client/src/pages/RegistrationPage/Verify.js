import React from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';


const Verify = () => {
    const handleSubmit = () => {
        alert("Verify Successfully..!!")
    }

    return (
        <div style={{ justifyItems: 'center', display: 'flex' }}>
            <div class="col-lg-6" style={{ marginLeft: '15vw', width: '70vw' }}>
                <div class="card2 card border-0 px-4 py-5">

                    <form action="">
                        <div class="row px-3" style={{ display: 'flex', justifyContent: 'center' }}>
                            <label class="mb-1"><h6 class="mb-0 text-sm">OTP has been sent to your email and phone number</h6></label>
                            <div style={{ height: '20px' }}></div>
                            <input class="mb-4" type="text" name="name" style={{ width: '500px' }} />
                        </div>
                        <br />
                        <div class="row px-3 mb-4">
                            <Link to="/send" class="ml-auto mb-0 text-sm">Resend OTP</Link>
                        </div>
                        <div class="row mb-3 px-3" style={{ justifyContent: 'center' }}>
                            <button type="submit" id="verifyButton" class="btn btn-blue text-center" onClick={handleSubmit}><Link to='/login'>Verify</Link></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Verify;