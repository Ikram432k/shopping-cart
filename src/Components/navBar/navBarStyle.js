import styled from "styled-components";
export const Navs = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: rgb(45, 91, 189);
color:  white;
padding: 20px;
text-transform: uppercase;

    h1{
        font-size: 2rem;

    }
    .nav-links{
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style-type: none;
        width: 40vh;
    
    }
    .cartIcon{
        display: flex;
    }
    li{
        cursor: pointer;
        text-transform: uppercase;
        border:0;
        color:white;
        margin-top:5px;
        background-color:rgb(45, 91, 189);
        padding:8px 10px;
        font-size:15px;
        transition: 0.5s;
        &:hover{
            background-color:white;
            color:black;
        }
    }
    @media only screen and (max-width:768px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        li{
            padding:4px 7px;
        }
    }
`;

// li{
//     text-decoration: none;
//     color:"white"
    
// }
