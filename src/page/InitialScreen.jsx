import React, { useEffect, useState } from 'react';

import { Question } from '../components/Question';
import { InputEmail } from '../components/InputEmail';
import { LanguageOptions } from '../components/LanguageOptions';

import logo from '../assets/netflixlogo.png';
import TVImage from '../assets/tv.png';
import phone from '../assets/phone.jpg';
import boxshot from '../assets/boxshot.png';
import devicePile from '../assets/device-pile.png';
import info from '../assets/info.png';

import '../scss/initialPart/main.scss';

export function InitialScreen() {
    const [questionsData, setQuestionsData] = useState([]);

    const getData = () => {
        fetch('../../public/dataQuestions.json', {
            headers: {
                Accept: "application/json"
            }
        })
            .then(response => response.json())
            .then(response => setQuestionsData(response));
    }

    useEffect(() => {
        getData()
    }, [])

    const showQuestions = questionsData && questionsData.questions?.map((questionData) => {
        return (
            <div key={questionData.id}>
                <Question 
                    question = {questionData.question}
                    response = {questionData.response}
                />
            </div>
        );
    });

    return(
        <div className="container">
            <div className="initialPart">
                <div className="header">
                    <img src={logo} alt="Netflix Logo" />

                    <div className="buttons">
                        <LanguageOptions />

                        <button className="loginButton">Entrar</button>
                    </div>
                </div>

                <div className="content">
                    <div className="inputTitle">
                        <h1>Filmes, séries e muito mais. Sem limites.</h1>

                        <h2>Assista onde quiser. Cancele quando quiser.</h2>

                        <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>

                        <InputEmail />
                    </div>
                </div>
            </div>

            <div className="infosSection">
                <section className="videosImages">
                    <div className="infos1">
                        <div className="textsInfo1">
                            <h1>Aproveite na TV.</h1>

                            <p>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
                        </div>

                        <div className="videoImage">
                            <img className="tvImage" src={TVImage} alt="TV image." />

                            <video className="tvVideo" muted autoPlay loop playsInline>
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" />
                            </video>
                        </div>
                    </div>
                </section>

                <section className="videosImages">
                    <div className="infos2">
                        <div className="animationCard">
                            <img src={phone} alt="Phone image." />

                            <div className="infoCard">
                                <div className="imageCard">
                                    <img src={boxshot} alt="Serie Image." />
                                </div>

                                <div className="textsCard">
                                    <div className="text1">Stranger Things</div>
                                    <div className="text2">Download em andamento...</div>
                                </div>

                                <div className="download"></div>
                            </div>
                        </div>

                        <div className="textsInfo2">
                            <h1>Baixe séries para assistir offline.</h1>

                            <p>Salve seus títulos favoritos e sempre tenha algo para assistir.</p>
                        </div>
                    </div>
                </section>

                <section className="videosImages">
                    <div className="infos3">
                        <div className="textsInfo3">
                            <h1>Assista quando quiser.</h1>

                            <p>Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.</p>
                        </div>

                        <div className="imageVideo">
                            <img className="tvImage2" src={devicePile} alt="Image of a TV, phone and tablet." />

                            <video className="tvVideo2" autoPlay playsInline muted>
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"/>
                            </video>
                        </div>
                    </div>
                </section>

                <section className="videosImages">
                    <div className="infos4">
                        <div className="imageInfo">
                            <img src={info} alt="Image of a two childrens and a rabit." />
                        </div>

                        <div className="textsInfo4">
                            <h1>Crie perfis para crianças.</h1>

                            <p>Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="faqInfos">
                <h1>Perguntas frequentes</h1>

                <div className="faq">
                    {showQuestions}
                </div>

                <div className="inputInfos">
                    <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>

                    <InputEmail />
                </div>
            </div>
            
            <footer>
                <div className="footerInfos">
                    <p>Dúvidas? Ligue 0800 591 8942</p>

                    <nav className="links">
                        <ul>
                            <li><a href="#">Perguntas frequentes</a></li>
                            <li><a href="#">Relações com investidores</a></li>
                            <li><a href="#">Formas de assistir</a></li>
                            <li><a href="#">Informações corporativas</a></li>
                            <li><a href="#">Só na Netflix</a></li>
                        </ul>

                        <ul>
                            <li><a href="#">Centro de ajuda</a></li>
                            <li><a href="#">Carreiras</a></li>
                            <li><a href="#">Termos de uso</a></li>
                            <li><a href="#">Entre em contato</a></li>
                        </ul>

                        <ul>
                            <li><a href="#">Conta</a></li>
                            <li><a href="#">Resgatar cartão pré-pago</a></li>
                            <li><a href="#">Privacidade</a></li>
                            <li><a href="#">Teste de velocidade</a></li>
                        </ul>

                        <ul>
                            <li><a href="#">Media Center</a></li>
                            <li><a href="#">Comprar cartão pré-pago</a></li>
                            <li><a href="#">Preferências de cookies</a></li>
                            <li><a href="#">Avisos legais</a></li>
                        </ul>
                    </nav>

                    <div className="language">
                        <LanguageOptions />
                        
                        <p>Netflix Brasil</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}