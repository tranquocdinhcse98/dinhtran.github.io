import React from 'react';
import logo from '../../assets/images/logo-dark.png';

class Footer extends React.PureComponent {
    render() {
        return(
            <footer>
                <div className="footer-container">
                    <div>
                        <a href="#">
                            <img src={logo} alt="logo" className="logo"/>
                        </a>
                    </div>

                    <div className="footer-menu">
                        <h3>Menu</h3>
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </div>

                    <div className="footer-social-media">
                        <h3>Follow me</h3>
                        <ul className="social-media">
                            <li><a href="https://www.fb.com/tranquoc.dinh.1"><i className="fab fa-facebook-square"></i></a></li>
                            <li><a href="https://www.instagram.com/tranquoc.dinh.1"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/dinh-tran-68884a153/"><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                    </div>

                    <div>
                        <h5>Copyright ©2019 All rights reserved | This template is made with <i className="far fa-heart"></i> by DinhTran</h5>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;