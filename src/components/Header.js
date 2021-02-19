import React from 'react'
import logo from '../amazon-logo.png'
import '../css/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';


function Header() {
    const [{ cart, user }, dispatch] = useStateValue()
    function signout() {
        auth.signOut();
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header_logo' src={logo}></img>
            </Link>
            <div className='header_search'>
                <input className='header_searchInput' type='text' />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className='header_nav'>
                <Link to={!user && '/login'}>
                    <div className='nav_options'>
                        <span className='nav_optionFirst'>Hello</span>
                        <span onClick={signout} className='nav_optionSecond'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className='nav_options'>
                    <span className='nav_optionFirst'>Returns</span>
                    <span className='nav_optionSecond'>& Orders</span>
                </div>
                <div className='nav_options'>
                    <span className='nav_optionFirst'>Your</span>
                    <span className='nav_optionSecond'>Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className='nav_basket'>
                        <ShoppingBasketIcon />
                        <span className='nav_optionSecond nav_basketCount'>{cart?.length}</span>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default Header
