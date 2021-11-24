import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
    background-image: linear-gradient(
        230deg,
        #00CC71 20%,
        #00ACE2 80%
    );
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 80px 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.6) 100%,
        ),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%)
        z-index: 2;
    }

    @media screen and (max-width: 768px){
        flex-wrap: wrap;
    }
`
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`
export const HeroPhone = styled.img`
    width: 90%;
    height: 100%;
    object-fit: contain;
`
export const HeroContentLeft = styled.div`
    z-index: 3;
    max-width: 600px;
    //position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: left;
`
export const HeroContentRight = styled.div`
    z-index: 3;
    max-width: 800px;
    padding: 8px 24px;
    display: flex;
    align-items: left;
`
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 36px;
    text-align: left;
    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 18px;
    text-align: left;
    max-width: 600px;
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`
export const HeroP2 = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
    text-align: left;
    max-width: 600px;
    @media screen and (max-width: 768px){
        font-size: 16px;
    }
    @media screen and (max-width: 480px){
        font-size: 12px;
    }
`
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: row;
`
export const HeroInput = styled.input`
	background: #ffffff;
    max-width: 400px;
    height: 44px;
    padding: 16px 0;
	border: none;
	border-radius: 10px 0 0px 10px;
    color: #fff;
    font-size: 20px;
    cursor: pointer
`;
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

// export const HeroForm = styled.form`
//     background: #010101;
//     max-width: 400px;
//     height: auto;
//     width: 100%;
//     z-index: 1;
//     display: grid;
//     margin: 0 auto;
// 	padding: 80px 32px;
// 	border-radius: 4px;
// 	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

//     @media screen and (max-width: 400px) {
//         padding: 32px 32px;
//     }
// `;