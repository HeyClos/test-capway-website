import React from 'react';
import Card from '../../images/flipped-card.png'
import GoogleBtn from '../../images/google-play.svg'
import AppleBtn from '../../images/app-store.svg'
import { 
    Download, 
    DownloadBarContainer, 
    DownloadLogo, 
    DownloadMenu, 
    DownloadArea, 
    DownloadLinks,
    DownloadH2,
    LinkArea
} from './DownloadBarElements';

const DownloadBar = ({toggle}) => {
    return (
        <>
            <Download>
                <DownloadBarContainer>
                    <DownloadMenu>
                        <DownloadLogo src={Card} />
                        {/* <DownloadLinks src={GoogleBtn} />
                        <DownloadLinks src={AppleBtn} /> */}
                        <DownloadArea>
                            <DownloadH2>
                                Download CapWay and Start Your Money Account.
                            </DownloadH2>
                            <LinkArea>
                                <DownloadLinks src={GoogleBtn} />
                                <DownloadLinks src={AppleBtn} />
                            </LinkArea>
                        </DownloadArea>
                    </DownloadMenu>
                </DownloadBarContainer>
            </Download>
        </>
    )
}
export default DownloadBar;