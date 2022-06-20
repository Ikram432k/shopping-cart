import styled from "styled-components";
import IMG from "../assets/bg.png" 

export const Div = styled.div`
    display: flex;
    justify-content: center;
    padding:3rem;
    background-image: url(${IMG});
    background-size: cover;
    background-color: rgb(165, 164, 164);
    flex-grow:1;
    .product{
        display: flex;
        justify-content: center;
        flex-grow:0;
        background-color: white;
        height:100%;
        padding:20px 40px;
        border-radius: 10px;
    }
    img{
        width:15rem;
        heigth:auto;
        object-fit:contain;
        padding-right: 10px;
        border-right: 1px solid black;
    }
    .btn{
        display: flex;
        align-items:center;
        justify-content: space-between;
        gap:10px;
    }
    button{
        cursor: pointer;
        text-transform: uppercase;
        border:0;
        color:white;
        margin-top:5px;
        background-color:black;
        padding:8px 10px;
        font-size:12px;
        letter-spacing: 1.5px;
        transition: 0.5s;
        border:0.5px solid black;
        &:hover{
            background-color:white;
            color:black;
        }
    }
    .productDetails{
        display: flex;
        flex-direction:column;
        justify-content: space-between;
        align-items:flex-start;
        width:20rem;
        padding:0px 20px 0px 40px;
    }
    .btns{
        display: flex;
        gap:10px;
    }
    @media only screen and (max-width:768px){
    .product{
        align-items:center;    
        flex-direction: column;
        padding:20px 20px;
        width:20rem;

        }
        .productDetails{
            width:10rem;
            padding:5px;
            gap:10px;
        }
        .btns{
            border-top: 1px solid black;
        }
        img{
            width:10rem;
            padding-right: 0;
            border-right: 0;
            border-bottom: 1px solid black;
            padding: 8px;
        }
    }
    `;