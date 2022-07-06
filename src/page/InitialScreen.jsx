import React from 'react';
import { useState } from 'react';

import logo from '../assets/netflixlogo.png';
import TVImage from '../assets/tv.png';
import phone from '../assets/phone.jpg';
import boxshot from '../assets/boxshot.png';
import devicePile from '../assets/device-pile.png';
import info from '../assets/info.png';

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
                        <img src={devicePile} alt="Image of a TV, phone and tablet." />

                        <video autoPlay playsInline muted>
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
    );
}