import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <footer>
            <div className="footer-logo">
                <img src="/images/Footer_logo.svg" alt="Kasa" />
            </div>
            <div className="footer-rights">
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;