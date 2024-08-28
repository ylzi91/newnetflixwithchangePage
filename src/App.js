import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import netflixLogo from "./assets/media/netflix_logo.png";
import MyNav from "./components/nav";
import MyHeader from "./components/MyHeader";
import MyMain from "./components/MyMain";
import MyFooter from "./components/MyFooter";
import Account from "./components/Account";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShow from "./components/TvShow";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <MyHeader />
      <Routes>
        <Route path = "/" element = {<MyMain />} />
        <Route path = "/tvshow" element = {<TvShow />} />
        <Route path = "*" element = {<MyMain />} />
        <Route path = "/account" element = {<Account />} />
        <Route path = '/movie-details/:movieId' element = {<MovieDetails />}/>
        <Route path = '/tvshow/movie-details/:movieId' element = {<MovieDetails />}/>

      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
