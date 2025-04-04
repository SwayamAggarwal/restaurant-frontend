import React from 'react'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { data } from "../restApi.json"

const Navbar = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const isFoodListPage = location.pathname === '/foodList'

    const handleMenuClick = () => {
        navigate('/foodList')
    }

    const handleHomeClick = () => {
        navigate('/')
    }

    return (
        <nav>
            <div className="logo" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>DineTime</div>
            <div className={show ? "navLinks showmenu" : "navLinks"}>
                <div className="links">
                    {!isFoodListPage && (
                        // Only show scroll links on home page
                        data[0].navbarLinks.map(element => (
                            element.title === "Book a Table" ? 
                            null : // Skip rendering here, we'll render as button below
                            <ScrollLink to={element.link} key={element.id} spy={true} smooth={true} duration={500}>
                                {element.title}
                            </ScrollLink>
                        ))
                    )}
                </div>
                {!isFoodListPage ? (
                    <>
                        {/* Book a Table button for home page */}
                        {data[0].navbarLinks.find(item => item.title === "Book a Table") && (
                            <ScrollLink 
                                to="reservation" 
                                spy={true} 
                                smooth={true} 
                                duration={500} 
                                className="menuBtn"
                                style={{ marginRight: '15px' }}
                            >
                                BOOK A TABLE
                            </ScrollLink>
                        )}
                        <button className="menuBtn" onClick={handleMenuClick}>OUR MENU</button>
                    </>
                ) : (
                    <button className="menuBtn" onClick={handleHomeClick}>RETURN HOME</button>
                )}
            </div>
            <div className="hamburger" onClick={() => setShow(!show)}>
                <GiHamburgerMenu />
            </div>
        </nav>
    )
}

export default Navbar