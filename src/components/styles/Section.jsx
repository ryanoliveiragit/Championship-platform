import styled from "styled-components";

const Section = styled.section`
    margin: 0;
    align-items: center;
    text-align: center;
    width: 100%;
    margin-top: 5%;
    color: #ffffff;

    div{
        width: 100%;
    }

    div>h1 {
        font-family: 'Yantramanav', sans-serif;
        font-size: 4rem;
    }

    div>p {
        color: var(--text);
        font-size: 1.2rem;
    }

    div>p>span {
        color: var(--primary)
    }

    a{  
    margin-left: 1%;
    cursor: pointer;
    color: white;
    font-size: 0.9rem;
    text-decoration: none;
  }
  .jogarAgora {
    margin-top: 1%;
  }
  .jogos {
    margin: 0 auto;
    display: flex;
    width: 50%;
    justify-content: center;
  }
  .backgroundJogos {
    align-items: center;
    text-align: center;
    margin-top: 5%;
  }
  .jogosImg>img:hover {
    filter: drop-shadow(9px 15px 25px #5e31ff50);
    transition: all 0.5s;
    padding: 2%;
    border: 7px solid var(--primary)
  }
  .jogosImg>img {
    transition: all 0.5s;
    filter: brightness(60%);
    border: 5px solid rgba(0, 0, 0, 0.034);
    margin-left: 2%;
    width: 90%;
  }
  .background {
    z-index: -1;
    width: 100%;
    height: 120%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: radial-gradient( transparent 0%, #000 100% );
    background-position: top center;
    box-shadow: 0px -40px 120px 0px #000 inset;
  }
`;
export default Section