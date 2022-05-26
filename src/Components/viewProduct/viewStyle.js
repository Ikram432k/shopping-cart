import styled from "styled-components";
export const Div = styled.div`
    display: flex;
    justify-content: center;
    padding:3rem;
    background-color: rgb(165, 164, 164);
    flex-grow:1;
    .product{
        display: flex;
        justify-content: center;
        flex-grow:0;
        background-color: white;
        height:100%;
        padding:20px 40px;
    }
    img{
        width:15rem;
        heigth:auto;
        object-fit:contain;
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
        width:400px;
        padding:0px 20px 0px 40px;
    }
    .btns{
        display: flex;
        gap:10px;
    }
    @media only screen and (max-width:768px){
        .product{
        padding:20px 20px;
        }
        .productDetails{
            width:200px;
        }
    }
    `;