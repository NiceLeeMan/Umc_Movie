
import { App_container } from "./components/Movie.style";
import { movies } from "./movieDummy";
import Movie from "./components/Movie";





function App() {

  
  return (
    
    
      <App_container>
      {
        movies.results.map(item => {
          return (
            <Movie
            poster_path = {item.poster_path} 
            title = {item.title}
            vote_average = {item.vote_average}
            overview = {item.overview}/>
          )
        })
      }
      </App_container>
  
   
  );
}

export default App;
