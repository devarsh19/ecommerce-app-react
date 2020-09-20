import React from 'react';
import { Header } from '../Header/Header';
import { Subtotal } from '../Subtotal/Subtotal';
import { CartItem } from '../CartItem/CartItem';
import { useStateValue } from '../../store/StateProvider';
import { Link } from 'react-router-dom';
import './Checkout.css';

export const Checkout = ({ }) => {
    const [{ cart, subtotal, user }, dispatch] = useStateValue();
    console.log(user)

    const renderCartItems = cart.map((item, i) => (
            <CartItem id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
            />        
        )
    );

    const emptyCartRender = (
        <Link to='/' ><button className="checkout__home_button">Start Shoping</button></Link>
    )

    return (
        <>
            <Header />
            <div className="checkout">
                <div className="checkout__left">
                    <img className="checkout__ad"
                        src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpeg"
                        alt="advertise_image"
                    />
                    <div className="checkout__title">
                        <h3>Hello {user ? user?.email : 'Guest'}</h3>
                        <h2>Your shopping cart has {cart.length} items</h2>                                        
                    </div>
                    <div className="checkout_items">
                        {/* display items selected in cart */}
                        { cart.length > 0 ? renderCartItems : emptyCartRender}
                    </div>
                </div>
                <div className="checkout__right">
                    <Subtotal subtotal={subtotal} numberOfItems={cart.length}/>                
                </div>
            </div>    
        </>
    );
}
