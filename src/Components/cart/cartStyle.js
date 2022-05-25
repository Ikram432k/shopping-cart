import styled from "styled-components";
export const Div = styled.div`
    flex: 1 1 0%;
    display: flex;
    justify-content: center;
    .wholeCart{
        flex: 1 1 0%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(165,164,164);
        padding: 20px 40px;    }
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
     .cart{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 20px 40px;
        min-height: 40vh;
        background-color: white;
     }
    .cartItem {
        display: flex;
        padding: 10px 0px;
        border-bottom: 1px solid rgb(195, 195, 195);
    }
    img{
        width:10rem;
        heigth:auto;
        object-fit:contain;
    }
    .cartItemDetails{
        display: flex;
        flex-direction:column;
        justify-content: space-between;
        align-items:flex-start;
        width:400px;
        padding:0px 20px 0px 40px;
    }
    .del{
        &:hover{
            background-color:red;
            color:white;
        }
    }
    .proceed{
        &:hover{
            background-color:green;
            color:white;
        }
    }
    .bottomCart{
        margin-top:15px;
        display: flex;
        flex-direction:column;
        align-items: center;
  
    }
`;