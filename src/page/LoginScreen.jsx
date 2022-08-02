import React from 'react';

import { useNavigate } from 'react-router-dom';

import { LanguageOptions } from '../components/LanguageOptions';

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

            <footer>
                <div className="footerContainer">
                    <p className="contact">Dúvidas? Ligue 0800 591 8942</p>

                    <ul>
                        <li><a href="#">Perguntas frequentes</a></li>
                        <li><a href="#">Central de Ajuda</a></li>
                        <li><a href="#">Termos de Uso</a></li>
                        <li><a href="#">Privacidade</a></li>
                        <li><a href="#">Preferências de cookies</a></li>
                        <li><a href="#">Informações corporativas</a></li>
                    </ul>

                    <div className="selectLanguage">
                        <LanguageOptions />
                    </div>
                </div>
            </footer>
        </div>
    );
}