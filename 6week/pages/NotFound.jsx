import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
    display :flex;
    justify-content : center;
    margin-top :30px;

`

function NotFound() {

    return(
        <Div>
            <div>
                <h1>해당 페이지를 찾지 못했습니다</h1>
                <h2>주소가 잘못되었거나 더 이상 제공되지 않는 페이지 입니다</h2>
                <Link to="/"><h2 style={{color:"red"}}>메인 페이지로 이동</h2> </Link>
            </div>
        </Div>
    )

}

export default NotFound;
