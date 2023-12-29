import React from 'react';
import {SiDatabricks} from 'react-icons/si';
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import {FiMail, FiInstagram, FiFacebook, FiLinkedin, FiGithub} from 'react-icons/fi';
import './FooterStyles.css';

import {Link} from 'react-scroll';

const Footer = () => {
    return  (
        <div className='footer'>

            <div className="container">

                <div className="top">

                    <div className="logo-footer">
                        <SiDatabricks className='icon' />
                        <h2>Gods of Aumin</h2>
                    </div>
                    <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                    <BsFillArrowUpCircleFill className='icon' />
                    </Link>
                </div>

                <div className="col-container">

                    <div className="col">
                        <h3>Buy Now</h3>
                        <p>Amazon</p>
                        <p>Link</p>
                        <p>Link</p>
                        <p>Link</p>
                    </div>

                    <div className="col">
                        <h3>Resources</h3>
                        <p>Link</p>
                        <p>Link</p>
                        <p>Link</p>
                        <p>Link</p>
                    </div>

                    <div className="col">
                        <h3>Menu</h3>
                        <p>Link</p>
                        <p>Link</p>
                        <p>Link</p>
                        <p>Link</p>
                    </div>

                    <div className="col">
                        <h3>Company</h3>
                        <p>About Us</p>
                        <p>Why Us?</p>
                        <p>Link</p>
                        <p>Contact</p>
                    </div>

                    <form>
                        <h3>Contact Us Today</h3>
                        <input type="email" placeholder='Enter Your Email' />
                        <FiMail className='mail-icon' />

                        <div className="social-group">
                            <FiInstagram className='social-icon' />
                            <FiFacebook className='social-icon' />
                            <FiLinkedin className='social-icon' />
                            <FiGithub className='social-icon' />
                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default Footer;