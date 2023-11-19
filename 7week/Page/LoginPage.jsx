import { useState } from "react"
import styled from "styled-components"

const InputContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    width : 500px;
    height :175px;
    font-size : 15px;
    font-weight :bold;
   
`
const FormContainer = styled.div`
    display : flex;
    width : 700px;
    height : 500px;
    justify-content : center;
    align-items : center;
  
`

const Input = styled.input`
    border-radius : 5px;
    border : 1px solid gray; 
    height :15%;

`
const Submit = styled.input`
    border-radius : 15px;
    border : 1px solid gray; 
    height :20%;
    margin-bottom :5px;
    color : white;

`

function LoginPage(){

    const [email , setEmail] = useState("");
    const [emailValid , setEmailValid] = useState("");
    const [password , setPassword] = useState("");
    const [passwordValid , setPasswordValid] = useState("");
    const [btn ,setBtn] = useState(true);

    const EmailValidation = (email) =>{
        const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
        setEmail(email.target.value);
        console.log(email.target.value)

        if(!emailRegEx.test(email.target.value) && email.target.value != ""){
            setEmailValid("올바른 이메일을 입력해주세요");
            setBtn(false);
        }
        else{
            setEmailValid('');
            
        }

    }

    const PassWordValidation = (password) =>{
        const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
        setPassword(password.target.value);
        if(!passwordRegEx.test(password.target.value) && password.target.value!=""){
            setPasswordValid('NotValid');
            setBtn(true);
        }
        else{
          if(passwordValid==='')setBtn(false);
        }

    }
    
    return(
        <FormContainer>
            <form>
                <h2>이메일과 비밀번호를<br/> 입력해주세요</h2>
                <InputContainer>
                    <label>이메일 주소</label>
                    <Input  type="email" value={email} onChange={EmailValidation}/>
                    <span className="ErrorMsg" style={{color:"red"}}>{emailValid}</span>
               
                    <label>비밀번호</label>
                    <Input type="password" value={password} placeholder="영문,숫자,특수문자 포함 8자 이상" onChange={PassWordValidation}/>
                    <Submit type="submit" value="확인" disabled={btn} style={btn ? {backgroundColor:"rgb(29, 38, 119)"}: {backgroundColor:"gray"}}/>
                </InputContainer>

            </form>
        </FormContainer>
    )

}
export default LoginPage
