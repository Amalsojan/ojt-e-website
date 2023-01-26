import "./CheckOutPage.css";
import { formatPrice } from '../../utils/helpers';
import { getAllCarts } from '../../store/cartSlice';
import { useSelector } from 'react-redux';
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar1 from "../../components/Navbar/Navbar1";


export default function CheckOutPage() {
    const [cardDetails, setCardDetails] = useState(false);
    const [upi, setUpiDetails] = useState(false);
    const [net, setNetDetails] = useState(false);
    const [message, setMessage] = useState();
    const [error, setError] = useState(false);
    const [isDisabled, setDisabled] = useState(false);

    const clickHandleSubmit = () => {
        alert("Completed Successfully..!!")
    }
    const handleDisable = () => {
        console.log('Your button was clicked and is now disabled');
        setDisabled(true);
    }
    const carts = useSelector(getAllCarts);
    const { itemsCount, totalAmount } = useSelector((state) => state.cart);

    return (
        <>
        <Navbar1/>
            <div className="checkoutt">

                <form>
                    <h2 class="text-center">Select a delivery address</h2>
                    <div className="data-side">

                        <div className="details">

                            <div className="form-groups">
                                <label htmlFor="firstname" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">First Name</h6></label>
                                <input id="firstname" className="mb-4" type="text" name="firstname" placeholder="Enter First name" required></input>
                            </div>
                            <div className="form-groups">
                                <label htmlFor="lastname" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Last Name</h6></label>
                                <input id="lastname" className="mb-4" type="text" name="lastname" placeholder="Enter Second name" required></input>
                            </div>
                            <div className="form-groups">
                                <label htmlFor="phn" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Mobile Number</h6></label>
                                <input id="phn" className="mb-4" type="number" name="phn" required></input>
                            </div>
                            <div className="address">
                                <label htmlFor="address" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Address</h6></label>
                                <input id="fulladdress" className="fulladdress" type="text" name="fulladdress" placeholder="enter your full address..." required></input>
                            </div>
                            <div className="side-data">
                                <div className="pincode">
                                    <label htmlFor="pin" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">PIN CODE</h6></label>
                                    <input id="pin" className="mb-4" type="number" name="pin" required></input>
                                </div>
                                <div className="state">
                                    <label htmlFor="state" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">State</h6></label>
                                    <select id="state" className="mb-4" type="text" name="state" required>
                                        <option>select </option>
                                        <option>Kerala </option>
                                        <option>Tamil Nadu</option>
                                        <option>Karnataka</option>
                                        <option>Goa</option>

                                    </select>
                                </div>
                            </div>

                            <Link to="/payment">
                                <button className="btn btn-default bttn-proceed" onSubmit={clickHandleSubmit}>proceed to pay</button>
                            </Link>

                        </div>
                        <div className="box-shaddow">
                            {
                                carts.map((cart, idx) => {
                                    return (
                                        <div className='cart-ctr py-4' key={cart?.id}>
                                            <div className='cart-one'>
                                                <span className='cart-ctxt'>{cart?.title}</span>
                                            </div>

                                            <div className='cart-one'>
                                                <span className='cart-ctxt text-orange fw-5'>{formatPrice(cart?.totalPrice)}</span>
                                            </div>


                                        </div>
                                    )
                                }
                                )
                            }

                            <div className='cart-cbody bg-white checkout-body'>
                                <div className='total-txt flex align-center justify-end'>
                                    <div className='font-manrope fw-5'>Total ({itemsCount}) items: </div>
                                    <span className='text-orange fs-22 mx-2 fw-6'>{formatPrice(totalAmount)}</span>
                                </div>
                            </div>
                        </div>


                    </div>


                </form>

            </div>
        </>

    )

}