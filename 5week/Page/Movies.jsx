import Movie from "../components/Movie"
import { movies } from "../movieDummy";
import { AppContainer } from "../components/Movie.style";

function Movies(){
  
    return(
    <div className="App">
      <AppContainer>
        {
          movies.results.map(item => {
            return (
              <Movie
                key={item.id}
                title = {item.title}
                poster_path = {item.poster_path} 
                vote_average = {item.vote_average}
                overview = {item.overview}
              />
            )
          })
        }
      </AppContainer>
    </div>
    );
}

export default Movies
