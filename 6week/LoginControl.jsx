import React from "react";
import styled from "styled-components";


const Button = styled.button`
    width : 80px;
    heught: 20px;
    background-color : white;
    border-radius : 12px;
    color : black;
    
`

const Div = styled.div`
    width : 250px;
    display :flex;
    // border : 1px solid yellow;
    justify-content :space-around;
    color: white;S
    
`


class LoginControl extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            Enter : false,
            LogInText : "로그인",
            Text : "로그인 해주세요"
        }
    }

  

    handlingLoginClick = () =>{
        this.setState({Enter : !this.state.Enter});
        this.setState({LogInText :"로그아웃"});
        // // this.setState(this.Text = "환엽합니다!");
        // console.log(this.LogInText)
        console.log(this.state.Enter)
        
    }

    handlingLogoutClick = () =>{
        this.setState({Enter : !this.state.Enter});
        this.setState({LogInText: "로그인"});
        // this.setState(this.Text = "로그인 해주세요!");
        console.log(this.state.Enter)
    }


    render(){


        return(
            <>
            {this.state.Enter ?(
                <Div>  
                    <Button onClick={this.handlingLoginClick}>로그아웃</Button>
                    <span>환영합니다!</span>
                </Div>
                        ):(
                <Div>
                    <Button onClick={this.handlingLogoutClick}>로그인</Button>
                    <span>로그인 해주세요</span>
                </Div>
                )
            }

            </>
        )
    }
}

export default LoginControl;

