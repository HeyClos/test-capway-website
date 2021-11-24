import React, { useState }from 'react';
//import Icon1 from '../../images/capway_card.svg'
import { 
    BenefitsContainer, 
    BenefitsH1, 
    BenefitsWrapper,
    BenefitsCard,  
    //BenefitsIcon, 
    BenefitsH2, 
    //BenefitsP
    BenefitsBtn
} from './BenefitsElements';
//import { Button } from '../ButtonElement';

const Benefits = () => {
    // const [hover, setHover] = useState(false);

    // const onHover = () => {
    //     setHover(!hover)
    // }

    return (
        <BenefitsContainer id="benefits" >
            <BenefitsH1> oney Account with CapWay </BenefitsH1>
            <BenefitsWrapper> 
                <BenefitsCard>
                    {/* //<BenefitsIcon> </BenefitsIcon> */}
                    <BenefitsH2> Debit card to access the cashless economy. </BenefitsH2>
                </BenefitsCard>
                <BenefitsCard>
                    <BenefitsH2> Withdraw money at ATMs, plus multiple options to deposit funds. </BenefitsH2>
                </BenefitsCard>
                <BenefitsCard>
                    <BenefitsH2> Create and save money towards your Money Goals. </BenefitsH2>
                </BenefitsCard>
            </BenefitsWrapper>
            <BenefitsBtn>
                        See all account benefits
            </BenefitsBtn>
        </BenefitsContainer >
    )
}

export default Benefits