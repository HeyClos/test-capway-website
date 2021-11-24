import React from 'react';
import Stat1 from '../../images/card-1.png'
import Stat2 from '../../images/card-2.png'
import Stat3 from '../../images/card-3.png'
import Stat4 from '../../images/card-4.png'
import { 
    LeftCol, 
    LeftH2, 
    LeftP, 
    NumbersLeft, 
    NumbersRight, 
    NumbersSectionContainer, 
    RightCol, 
    Stat } from './NumbersSectionElements'

const NumbersSection = () => {
    return (
        <>
        <NumbersSectionContainer>
            <NumbersLeft>
                <LeftH2>
                    Numbers Don't Lie
                </LeftH2>
                <LeftP>
                    CapWay was created to provide fair financial access and opportunities to everyone, especially those misunderstood, overlooked, and underserved by the traditional banking system.
                </LeftP>
                <LeftP>
                    Cashless, contactless, banking deserts - the way we bank and handle our finances is changing. Whether you are looking for your first debit card and Money Account or looking for a financial option with a mission to guide and assist you in your economic growth, CapWay is here.
                </LeftP>
            </NumbersLeft>
            <NumbersRight>
                <LeftCol>
                    <Stat src={Stat1} />
                    <Stat src={Stat2} />
                </LeftCol>
                <RightCol>
                    <Stat src={Stat3} />
                    <Stat src={Stat4} />
                </RightCol>
            </NumbersRight>
        </NumbersSectionContainer>     
        </>
    )
}

export default NumbersSection
