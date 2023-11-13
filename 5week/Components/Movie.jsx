
const ImgURL = "https://image.tmdb.org/t/p/w1280/"

function Movie({poster_path, title, vote_average}) {
  
  return (
    <>
        <MovieBox>
          <Img  src = {ImgURL+poster_path} alt="Img"></Img>
            
            <MovieInfo>
              <span>{title}&emsp;&emsp;{vote_average}</span>
            </MovieInfo>
        </MovieBox>
    
     </>
  );
}

export default Movie
