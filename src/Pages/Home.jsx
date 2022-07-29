import React from 'react'
import GlobalStyle from '../pages/theme/GlobalStyle';
import Header from  '../components/header/Header'
import Section from '../components/styles/Section';
import Button from '../components/styles/Button';
import { Link } from 'react-router-dom';
import Fivem from '../Assets/fivem5.png'
import Valorant from '../Assets/valorant.png'
import CSGO from '../Assets/csgo.png'
import '../components/styles/Background.css'

const Home = () => 
<div>
    <GlobalStyle />
    <Header />
        <Section>
            <div>
                <h1>SUA PLATAFORMA</h1>
                <h1>LIDER EM JOGOS COMPETITIVOS</h1>
                <p>Jogue com mais de <span>5 mil</span> jogadores em ligas, torneiros</p>
                <p>e campeonatos <span>.</span></p>
            </div>
            <div className="jogarAgora">
                <Button>JOGAR AGORA</Button>
                <Link to="/">ENTRE EM NOSSO DISCORD</Link>
            </div>

            <div className="jogos backgroundJogos">

                <div className="jogosImg">
                    <div className="titlecontainer"></div>
                    <img src={Fivem} alt="FivemImage"/>
                </div>

                <div className="jogosImg">
                    <div className="titlecontainer"></div>
                    <img src={Valorant} alt="FivemImage"/>
                </div>

                <div className="jogosImg">
                    <div className="titlecontainer"></div>
                    <img src={CSGO} alt="FivemImage"/>
                </div>

                <div className="background"></div>

            </div>
        </Section>
</div>

export default Home