import styled from "styled-components";
import background from '../assets/about.jpg'


export const Div = styled.div`
display: flex;
justify-content: center;
background-image: url(${background});
background-size: cover;
flex: 1 1 0%;

.icon{
    margin-top:10px;
    padding: 20px 40px;
    display: flex;
    flex-direction:column;
    justify-content: center;  
    align-items: center;

}
i{
    font-size: 10rem;
    cursor: pointer;
    background-color:none;
    color:white;
    transition: 0.5s;
    &:hover{
        color: black;
    }
}
p{
    color:white;
    text-transform: uppercase;
    padding:8px 10px;
    font-size:2rem;
    letter-spacing: 1.5px;
}
`; 