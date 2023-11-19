import React from "react";
import styled from "styled-components";
import { useState } from "react"
import { Link } from "react-router-dom";


const Button = styled.button`
    width : 80px;
    heught: 20px;
    background-color : white;
    border-radius : 12px;
    color : black;
    
`
function LoginButton(){
  
    const [Login , setLogin] = useState(true);

    const HanddleLogIn = () =>{ //버튼 클릭시 로그인 되면서 화면 이동
      setLogin(!Login);
    }

    return(
        <Link to={Login ? "/LoginPage": "/"}>
            <Button onClick={HanddleLogIn}>{Login ? '로그인':'로그아웃'}</Button>
        </Link>
    )

}

 export default LoginButton;
