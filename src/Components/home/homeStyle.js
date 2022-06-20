import styled from "styled-components";
import background from '../assets/bg.png';
export const HomeStyles = styled.div`
    flex: 1 1 0%;
    display: flex;
    justify-content: center;
    background-color: rgb(195, 195, 195);

`;
export const Div = styled.div`
    flex: 1 1 0%;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    background-image: url(${background});
    background-size: cover;
    color:white;
    text-transform: uppercase;

    h2{
        background-color:black;
        padding: 6px 8px 6px 14px;
        font-size: 55px;
        letter-spacing: 10px;
    }
    p{
        background-color:rgba(0,0,0,0.8);
        font-size:14px;
        font-weight:300px;
        text-align:center;
        letter-spacing: 5px;
        line-height:1.5em;
        max-width:100vh;
        margin-top:15px;
    }
    button{
        cursor: pointer;
        text-transform: uppercase;
        border:0;
        color:white;
        margin-top:25px;
        background-color:black;
        text-decoration: none;
        padding: 6px 8px 6px 14px;
        font-size:25px;
        letter-spacing: 5px;
        transition: 0.5s;

        &:hover{
            background-color:white;
            color:black;
        }
    }
`;
