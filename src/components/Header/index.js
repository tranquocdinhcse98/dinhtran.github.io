import React from 'react';
import logo from '../../assets/images/logo-dark.png';
import {Link} from 'react-router-dom';

class Navigation extends React.PureComponent {
    componentDidMount() {
        var menu = document.getElementById('menu');
        var nav = document.getElementById('nav');
        var exit = document.getElementById('exit');
        var list = document.querySelectorAll('nav ul li a');

        menu.addEventListener('click', function(e) {
            nav.classList.toggle('hide-mobile');

            list.forEach((link, idx) => {
                if (link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = `navLinksFade 0.5s ease forwards ${idx*0.4 + 0.4}s`;
                }
            })
            e.preventDefault();
        });

        exit.addEventListener('click', function(e) {
            nav.classList.add('hide-mobile');
            list.forEach((link, idx) => {
                if (link.style.animation) {
                    link.style.animation = '';
                }
            })
            e.preventDefault();
        });

        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById('topBtn').style.display = 'block';
        }
        else {
            document.getElementById('topBtn').style.display = 'none';
        }
    }

    topFunction() {
        let element = document.getElementsByClassName('main');
        element.scrollTop = 0;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render() {
        return (
            <div className="header-container">
                <button onClick={() => this.topFunction()} className="btn warning" id="topBtn"><i className="fas fa-chevron-up"></i></button>
                <a href="#" className="logo-box">
                    <img src={logo} alt="Phook" className="logo"/>
                </a>
                
                <nav>
                    <a href="#" className="hide-desktop">
                        <i className="menu fas fa-align-justify" id="menu"></i>
                    </a>
                    <ul className="show-desktop hide-mobile" id="nav">
                        <li id="exit" className="exit-btn hide-desktop"><i className="fas fa-times"></i></li>
                        <li><Link to="/home" className="nav-link">Home</Link></li>
                        <li><Link to="/about" className="nav-link">About</Link></li>
                        {/* <li><Link to="/contact" className="nav-link">Contact</Link></li> */}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation;