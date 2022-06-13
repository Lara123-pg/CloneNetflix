import React from 'react';

import logo from '../assets/netflixlogo.png';

import '../scss/main.scss';

export function InitialScreen() {
    return(
        <div className="container">
            <div className="initialPart">
                <header>
                    <img src={logo} alt="Netflix Logo" />

                    <div className="buttons">
                        <select name="language" id="language">
                            <option value="Português">Português</option>
                            <option value="English">English</option>
                        </select>

                        <button className="loginButton">Entrar</button>
                    </div>
                </header>

                <main>
                    <div className="inputTitle">
                        <h1>Filmes, séries e muito mais. Sem limites.</h1>

                        <h2>Assista onde quiser. Cancele quando quiser.</h2>

                        <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>

                        <div className="inputButton">
                            <input type="text" placeholder="Email" />

                            <button>Vamos lá</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}