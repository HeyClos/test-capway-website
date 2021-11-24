import React from 'react';
import { FaBars } from 'react-icons/fa'
import Logo from '../../images/logo.svg'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' src={Logo} />
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='benefits'>Benefits</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='learn-money'>Learn Money</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='partner'>Partner</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='why-capway'>Why CapWay + More</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}
export default Navbar;