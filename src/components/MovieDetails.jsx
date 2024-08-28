import { useState, useEffect } from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";


export default function MovieDetails() {
  const params = useParams();
  const key = "baf3ccdf";
  const [myFilm, setMyFilm] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getFilm();
  }, [params.movieId]);

  const getFilm = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${key}&i=${params.movieId}`
      );
      const tempFilm = await response.json();
      setMyFilm(tempFilm);
      setIsLoading(false)
    } catch {
      console.log("Errore");
    }
  };

  if (isLoading){
    return  <Spinner className=" m-2" animation="border" variant="info" />
  }
  return (
    <>
    <div className="container">
      <div className="Row">
        <div className="col-12 d-flex justify-content-center">
          <img className="img-fluid" src={myFilm.Poster} alt="" />
          <ListGroup className="ms-5 mt-5">
            <ListGroup.Item variant="dark"><h4>{myFilm.Title}</h4></ListGroup.Item>
            <ListGroup.Item variant="dark">{myFilm.Year}</ListGroup.Item>
            <ListGroup.Item variant="dark">{myFilm.Genre}</ListGroup.Item>
            <ListGroup.Item variant="dark">{myFilm.Director}</ListGroup.Item>
        </ListGroup>
        </div>
      </div>
    </div>
    </>
  );
}
