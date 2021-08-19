import React from 'react';

export default function Header() {
    return (
        <div>
            <div>
                <header>
                    <a href="/">
                        <div className="logo">
                            <img src="./img/logo-transparent.svg" alt="logo" />
                        </div>
                    </a>

                    <div className="social">
                        <a href="https://www.facebook.com/lehuynhqui99/" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCZ567EjYfE8odO2zymKDDwA/" target="_blank" rel="noreferrer">
                            <i className="fab fa-youtube" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
                            <i className="fab fa-dribbble" />
                        </a>
                    </div>
                </header>
                <hr className="m-0" />
            </div>
        </div>
    )
}
