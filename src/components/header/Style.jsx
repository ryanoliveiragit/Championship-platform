import styled from "styled-components";

const Style = styled.header`

    padding: 0;
    margin: 2% 0%;
    list-style: none;
    width: 100%;
    align-items: center;
    justify-content:space-around;
    display: flex;
    color: white;

    ul {
        padding: 0;
        list-style: none;
        align-items: center;
        display: flex;
      }

      li,a{
        cursor: pointer;
        margin-left: 2rem;
        color: white;
        font-size: 12px;
        text-decoration: none;
      }

      li>a:hover {
        transition: 0.5s;
        color: var(--primary);
      }
`
export default Style