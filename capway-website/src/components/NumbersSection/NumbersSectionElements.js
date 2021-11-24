import styled from "styled-components";

export const NumbersSectionContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 45px 30px 30px 30px;
    height: 600px;
    @media screen and (max-width: 768px){
        display: flex;
        flex-wrap: wrap;
    }
`
export const NumbersLeft = styled.div`
    height: 90%
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px){
        padding: 10px 10px;
    }
`
export const LeftH2 = styled.h2`
    height: 50%
    font-size: 20px;
    font-weight: 520;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const LeftP = styled.p`
    height: 50%
    font-size: 2.5rem;
    font-weight: 400;
    padding: 15px 0;
`
export const NumbersRight = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 768px){
        width: 95%;
    }
`
export const LeftCol = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`
export const RightCol = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
export const Stat = styled.img`
    height: 200px;
`