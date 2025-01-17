import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    height: 80px;
    background-image: linear-gradient(
        350deg,
        #00CC71 30%,
        #00ACE2 82%
    );
    //margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    //position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`
export const NavLogo = styled.img`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: left;
    width: 150px;
`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px; /* optional just for centering in case signup button messes with this */

    @media screen and (max-width: 768px){
        display: none; /* i dont want this is display so display none */
    }
`
export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        /* highlights bottom border on nav as you scroll down */
        border-bottom: 3px solid #01bf71;
    }

`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px){
        display: none; /* i dont want this is display so display none */
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 5px;
    background: #f8d88b;
    white-space: nowrap;
    padding: 14px 40px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;