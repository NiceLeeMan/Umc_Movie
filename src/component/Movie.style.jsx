import styled from "styled-components";

export const Body = styled.body`
    height: 100%;
    background-color: rgb(17,43,115);
`
export const EHTML = styled.html`
    height: 100%;
    background-color: rgb(17,43,115);
`

export const Img = styled.img`
    width: 100%;
    height: 80%;
`

export const App_container = styled.div`
    display: grid ;
    grid-template-columns: repeat(10,1fr);
    grid-template-rows: repeat(2,1fr);
    height: 100vh;
    margin-left: 20px;
    margin-right: 20px;
`

export const MovieBox = styled.div`
    position: relative;
    border: 3px solid red;
    top :12.5px;
    background-color: rgb(107, 100, 190);
    border: 1px solid black;
    width: 100%;
    margin-top: 15px;
    height: 50vh;
`


export const MovieInfo = styled.div`
    position: relative;
    top :30px;
    font-size : 12.5px;
    text-align: center;
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
