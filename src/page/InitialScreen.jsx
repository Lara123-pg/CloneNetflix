import React from 'react';
import { useState } from 'react';

import logo from '../assets/netflixlogo.png';
import TVImage from '../assets/tv.png';

import '../scss/main.scss';

export function InitialScreen() {
    const [changeLabel, setChangeLabel] = useState(false);

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
                            <input 
                                type="email" 
                                name="input-email" 
                                id="email" 
                                autoComplete="email"
                                onClick={() => setChangeLabel(!changeLabel)} 
                            />

                            <label 
                                className={changeLabel ? 'clicked' : ''}  
                                htmlFor="email"
                            >
                                Email
                            </label>

                            <button>Vamos lá</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}