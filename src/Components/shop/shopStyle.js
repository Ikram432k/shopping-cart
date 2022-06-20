import styled from "styled-components";
import IMG from "../assets/bg.png" 
export const Main = styled.main`
    margin:0;
    padding:3rem;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap:4rem; 
    background-image: url(${IMG});
    background-size: cover;

    img{
        height:20rem;
        width:100%;
        padding:3rem;
        margin: 0px auto;    }
        @media only screen and (max-width:768px){
            grid-template-columns: repeat(1,1fr);
        }   
`;
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    width:20rem;
    border: 1px solid rgb(229, 229, 229);
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    padding:10px;
     .details{
        display:flex;
        flex-direction:column;
        justify-content: space-between;
        padding:1.5rem;
        border-top:1px solid rgb(229, 229, 229);
        gap:1rem;
        heigth:100%;
     }
    button{
        cursor: pointer;
        text-transform: uppercase;
        border:0;
        color:white;
        margin-top:15px;
        background-color:black;
        text-decoration: none;
        padding: 6px 8px 6px 14px;
        font-size:25px;
        letter-spacing: 5px;
        transition: 0.5s;
        
        &:hover{
            background-color:white;
            color:black;
            border: 1px solid black;
        }
    }
    @media only screen and (max-width:768px){
        width:15rem;
        button{
            font-size:10px;
            letter-spacing: 0px;
        }
        img{
            height:15rem;
            padding:1rem;
        }
    }
    `;
