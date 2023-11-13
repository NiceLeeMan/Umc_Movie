import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginControl from "./LogInControl";

const HeaderDesign = styled.div`
    display:flex;
    width :100%;
    height : 40px;
    align-items : center;
    background-color: rgb(17,43,115);
    // border: 1px solid black;
    paddingbottom : 10px;
`
const ListDesign = styled.div`
    width :250px;
    display:flex;
    justify-content :space-around;
    color:white;
    // border: 2px solid black;
    height:20px;
`

const LinkDesign = styled(Link)`
    color: white;
    text-decoration: none;
    
`
 function Header(){

    return(
       <HeaderDesign>
            <Link to="/">
                <img
                    style={{ width: "154px", height: "20px",  marginLeft:"200px"}}
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                    alt="로고"
                />
            </Link>
         
            <ListDesign>
                <LinkDesign to="/Movies">영화</LinkDesign>
                <LinkDesign to="/Tv">Tv프로그램</LinkDesign>
                <LinkDesign to="/Celebrity">인물</LinkDesign>
            </ListDesign>
            <LoginControl/>
        </HeaderDesign>
    );

}
export default Header;
