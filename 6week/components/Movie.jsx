import { Img,MovieBox, MovieInfo} from "./Movie.style";
import { useNavigate } from "react-router-dom";

const ImgURL = "https://image.tmdb.org/t/p/w1280/"


function Movie(props) {

  const navigate = useNavigate();

  const onClickImg = ()=>{
    navigate(`/movie/${props.title}`,{state:props});
  };


  return (
    <>
        <MovieBox>
          <Img  src = {ImgURL+props.poster_path} alt="Img" onClick={onClickImg}></Img>
            
            <MovieInfo>
              <span>{props.title}&emsp;&emsp;{props.vote_average}</span>
            </MovieInfo>
        </MovieBox>
    
     </>
  );
}

export default Movie
