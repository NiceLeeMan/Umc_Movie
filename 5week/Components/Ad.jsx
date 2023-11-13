import styled from "styled-components";
import UMC from '../UMC.svg';

const Img = styled.div`
    background :url(${UMC});
    width :100%;
    height: 300px;
    background-repeat: no-repeat;
    margin:0px;
`

function Ad({Show}){

    return Show ? <Img/> : null
    
}

export default Ad;
