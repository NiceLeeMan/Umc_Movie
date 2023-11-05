import { useRef } from "react";
import { Body, EHTML, Img, MoreInfo, MovieBox, MovieInfo, MovieInfoComp } from "./Movie.style";


const ImgURL = "https://image.tmdb.org/t/p/w1280/"

function Movie( {poster_path ,title , vote_average , overview}) {

  const Co = useRef(null);
  const onmouse = () =>{
   Co.current.style.display = "block";
  }
  const outmouse = () =>{
    Co.current.style.display = 'none';
  }

  return (
    <EHTML>
      <Body>
        <MovieBox>
          <Img onMouseOver={onmouse}  onMouseLeave={outmouse} src = {ImgURL+poster_path} alt="Img" id ="poster"></Img>
            
            <MovieInfo>
              <span>{title}&emsp;&emsp;{vote_average}</span>
            </MovieInfo>

            <MoreInfo ref={Co}>
              <span>{title}</span>
              <p>{overview}</p>
            </MoreInfo>
        </MovieBox>
      </Body>
    </EHTML>
  );
}



export default Movie
