import { useLocation, useParams } from 'react-router-dom'
import styled from 'styled-components';

const Box = styled.div`
    display : flex;
    align-items: start;
    font-size :30px;

`
const ImgURL = "https://image.tmdb.org/t/p/w1280/"

function MovieDetail(){
    const { title } = useParams(); 
		
    //네비게이트 훅을 통해 페이지 이동 시에 넘겨 받은 정보
    //이미지, 별점 등의 모든 정보들
    const { state } = useLocation();
    console.log(title);
    console.log(state);

    return (
    <Box>
        <img src={ImgURL+state.poster_path} style={{width:"300px" , height : "500px"}} alt='img'></img>
        <p>{title}</p>
    </Box>
    );
}

export default MovieDetail;
