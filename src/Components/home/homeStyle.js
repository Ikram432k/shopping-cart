import styled from "styled-components";
import background from '../assets/shop-img.jpg'
export const HomeStyles = styled.div`
.home{}
    // padding:50px;
    display: flex;
    align-items:center;
    justify-content:center;
    background-image: url(${background});
    // heigth:'100vh';
    background-size: cover;


    {
        flex: 1 1 0%;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        background-color: rgb(195, 195, 195);
    }
`;