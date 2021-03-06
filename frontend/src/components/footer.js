import React, { Component } from 'react';
import '../css/footer.css';
import {Footer, FooterSection, FooterLinkList} from 'react-mdl';

class FooterSec extends Component {
    render() {
        return (
            <Footer size="mini">
                <FooterSection type="left" logo="TINKERBELL">
                    <FooterLinkList>
                        <a href="#">Help</a>
                        <a href="#">Privacy & Terms</a>
                        <a href="#">Copyright © 2020 Jae Hyun Moon All rights reserved</a>
                    </FooterLinkList>
                </FooterSection>
            </Footer>
        )
    }
}

export default FooterSec;