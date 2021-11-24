import styled from "styled-components";
import { Link } from 'react-router-dom';

export const BenefitsContainer = styled.div`
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606

    @media screen and (max-width: 768px) {
        height: 1100px
    }

    @media screen and (max-width: 480px) {
        height: 1300px
    }
`;

export const BenefitsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const BenefitsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 14px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer
    }
`;

export const BenefitsIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const BenefitsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff:
    margin-bottom: 64px;
    padding-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const BenefitsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const BenefitsP = styled.p`
    font-size: 1rem;
    text-align: center;
`
export const BenefitsBtn = styled(Link)`
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