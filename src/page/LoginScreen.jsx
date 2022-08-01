import React from 'react';

import { useNavigate } from 'react-router-dom';

import logo from '../assets/netflixlogo.png';

import '../scss/login/main.scss';

export function LoginScreen() {
    const navigate = useNavigate();

    const backPage = () => {
        navigate('/');
    }
    
    return(
        <div className="login">
            <header>
                <img src={logo} alt="Netflix logo." onClick={backPage} />
            </header>

            <main>
                <div className="loginContainer">
                    <h1>Entrar</h1>

                    <form>
                        <div className="inputs">
                            <div className="emailsNumebers">
                                <input type="text" name="input-email" id="emailNumber" />
                                <label htmlFor="emailNumber" id="emailNumber">Email ou número de telefone</label>
                            </div>

                            <div className="passwords">
                                <input type="password" name="input-password" id="password"/>
                                <label htmlFor="password" id="passwordLabel">Senha</label>
                            </div>
                        </div>

                        <button type="button">Entrar</button>

                        <div className="links">
                            <div className="checkboxRemember">
                                <input type="checkbox" name="input-checkbox" id="checkbox"/>
                                <label htmlFor="checkbox">Lembre-se de mim</label>
                            </div>

                            <a href="#">Precisa de ajuda?</a>
                        </div>
                    </form>

                    <div className="infos">
                        <span>Novo por aqui? <a href="#">Assine agora.</a></span>

                        <p>
                            Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <button type="button">Saiba mais</button>.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}