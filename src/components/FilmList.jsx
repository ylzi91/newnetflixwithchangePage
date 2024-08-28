import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function FilmList (props) {
  const key = "baf3ccdf";

  const [listFilm, setListFilm] = useState ([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    getFilmFrom()
  }, [])

  const navigate = useNavigate()


  const getFilmFrom = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${key}&s=${props.filmTitle}`
      );
      const lista = await response.json();
      const arrayTemp = [];
      arrayTemp.push(lista.Search);
      console.log("ArrayTemp", arrayTemp);
      setListFilm(lista.Search)
      setIsLoading(false)
    } catch {console.log('Errore')}
  };


    if (isLoading){
        return  <Spinner className=" m-2" animation="border" variant="info" />
    }
       return listFilm.map((film) => {
      return (
        <>
        
        <div className="col-xxl-2 col-xl-4 col-md-6 col-sm-6 col-12 position-relative">
           <img className="img-fluid zoomImg" style={{cursor: 'pointer'}} src={film.Poster} alt="" onClick={()=> {navigate('movie-details/' + film.imdbID )}} />
        </div>
        </>
      );
    });

}
