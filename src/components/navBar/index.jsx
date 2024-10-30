import { React, useState } from 'react'; 
import { FaBars, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import './styles.scss';

const data = [
    { label: "HOME", to: '/' },
    { label: "ABOUT", to: '/about' },
    { label: "RESUME", to: '/resume' },
    { label: "SKILLS", to: '/skills' },
    { label: "PORTFOLIO", to: '/portfolio' },
    { label: "CONTACT", to: '/contact' }
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    // Function to close the menu on link click
    const closeMenu = () => {
        setToggleIcon(false);
    };

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar__container'>
                    <Link to={'/'} className='navbar__container__logo'>
                        <FaHome size={30} />
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
                    {data.map((item, key) => (
                        <li key={key} className='navbar__container__menu__list'>
                            <Link 
                                className='navbar__container__menu__list__links' 
                                to={item.to} 
                                onClick={closeMenu} // Close menu on click
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className='nav-icon' onClick={handleToggleIcon}>
                    {toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
