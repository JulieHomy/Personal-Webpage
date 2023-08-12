import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h2 className='footer__title'>LET'S WORK TOGETHER</h2>
            <ul className='footer__work-list work-list'>
                <li className='work-list__item'>
                    <a className='work-list__link' href='https://www.linkedin.com/in/julie-ho-3955a1192/'>LinkedIn</a>
                </li>
                <li className='work-list__item'>
                    <a className='work-list__link' href='https://github.com/JulieHomy'>Github</a>
                </li>
            </ul>

            <ul className='footer__social-list social-list'>
                <li className='social-list__item'>
                    <a className='social-list__link' href='https://www.instagram.com/meimeiho_/'>
                        <i className="gg-instagram"></i>
                    </a>
                </li>

                <li className='social-list__item'>
                    <a className='social-list__link' href='https://www.facebook.com/profile.php?id=100089034188378'>
                        <i className="gg-facebook"></i>
                    </a>
                </li>
                <li className='social-list__item'>
                    <a className='social-list__link' href='https://twitter.com/JulieHo20'>
                        <i className="gg-twitter"></i>
                    </a>
                </li>
                <li className='social-list__item'>
                    <a className='social-list__link' href='https://www.youtube.com/channel/UCNFuL-GOlrGgc3K8LEpf3Bg'>
                        <i className="gg-youtube"></i>
                    </a>
                </li>
            </ul>

            <p className='footer__privacy-term'>Julie Ho © 2023</p>

        </footer>
    );
}

export default Footer;