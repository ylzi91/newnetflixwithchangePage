import FilmList from "./FilmList";

export default function TvShow() {
  return (
    <div className="container-fluid w-100 flex-nowrap overflow-scroll mx-2 mb-4">
      <div className="row g-2 overflow-scroll flex-nowrap">
        <FilmList filmTitle="Tv show" />
      </div>
    </div>
  );
}
