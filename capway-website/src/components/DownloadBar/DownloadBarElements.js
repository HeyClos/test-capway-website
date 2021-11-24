import styled from 'styled-components';

export const Download = styled.nav`
    height: 270px;
    background-image: linear-gradient(
        110deg,
        #00CC71 20%,
        #00ACE2 90%
    );
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`
export const DownloadBarContainer = styled.div`
    display: flex;
    justify-content: flex-start
    height: 100%;
    width: 100%;
    max-width: 1100px;
    padding: 0 5px;
    margin: 0 20px:
    // @media screen and (max-width: 768px){
    //         flex-wrap: wrap;
    //     }
`
export const DownloadLogo = styled.img`
    width: 35%;
    object-fit: contain;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const DownloadMenu = styled.ul`
    height: 95%;
    display: flex;
    align-items: center;
    list-style: none;
    @media screen and (max-width: 768px){
        padding: 0 20px;
    }
`
export const DownloadArea = styled.li`
    height: 50%;
    width: 90%;
`
export const DownloadLinks = styled.img`
    text-decoration: none;
    padding: 1.5rem 2rem;
    height: 60%;
    cursor: pointer;
`;

export const DownloadH2 = styled.h2`
    color: #fff;
    font-size: 30px;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 28px;
    }
    @media screen and (max-width: 480px){
        font-size: 26px;
    }
`
export const LinkArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;