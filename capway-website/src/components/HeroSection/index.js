import React, { useState } from 'react';
import { Button } from '../ButtonElement';
// import Video from '../../videos/video.mp4';
import Phone from '../../images/phone-card.png';
import { 
    HeroContainer, 
    // HeroBg, 
    // VideoBg, 
    HeroContentLeft,  
    HeroH1, 
    HeroP,
    HeroP2, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight,
    HeroPhone,
    HeroInput, 
    HeroContentRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home" >
            {/* <HeroBg>
                <VideoBg autoPlay loop muted src={Video} typed='video/mp4' />
            </HeroBg> */}
            <HeroContentLeft>
                <HeroH1>Creating Financial Access & Opportunities</HeroH1>
                <HeroP>
                No overdraft or minimum balance fees Send and receive money Get paid early Achieve Money Goals Learn money ...and more.
                </HeroP>
                <HeroBtnWrapper>
                    <HeroInput />
                    <Button 
                        to='signup'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Sign Me Up {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
                <HeroP2>
                    Download for iOS   ·   Download for Android   ·   Why You Should Choose CapWay
                </HeroP2>
            </HeroContentLeft>
            <HeroContentRight>
                <HeroPhone src={Phone} />
            </HeroContentRight>
        </HeroContainer >
    )
}

export default HeroSection
