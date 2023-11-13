import styled  from "styled-components";

export const Img = styled.img`
    width: 100%;
    height: 85%;
`

export const AppContainer = styled.div`//AppContainer and MovieBox손볼것
    border : 4px  solid black;
    display: grid;
    grid-template-columns: repeat(10,1fr);
    grid-template-rows: repeat(2,1fr);
    height: 100vh;
    column-gap :20px;
    padding-left : 30px;
    padding-right : 30px;
    
`

export const MovieBox = styled.div`
    position: relative;
    border: 2px solid red;
    top :12.5px;
    background-color: rgb(107, 100, 190);
    width: 100%;
    margin-top: 15px;
    height: 45vh;
`


export const MovieInfo = styled.div`
    position: relative;
    top :20px;
    font-size : 13px;
    text-align: start;
    color: white;
`

export const MoreInfo = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  background-color: black;
  opacity: 0.8;
  color: white;

`
