import React from 'react';
const SocialMediaBar = (props) => {
    return (
        <div className="social-media-bar">
            <ul>
                <li>
                    <a href="https://www.fb.com/tranquoc.dinh.1" target="_blank" className="facebook"><i className="fab fa-facebook-f"/>
                    <span>Facebook</span></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/dinh-tran-68884a153/" target="_blank" className="linkedin"><i className="fab fa-linkedin"/>
                    <span>Linkedin</span></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/tranquoc.dinh.1" target="_blank" className="instagram"><i className="fab fa-instagram"/>
                    <span>Instagram</span></a>
                </li>
            </ul>
        </div>
    )
}

export default SocialMediaBar;