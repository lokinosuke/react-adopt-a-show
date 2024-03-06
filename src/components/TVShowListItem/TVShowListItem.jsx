import { SMALL_POSTER_BASE_URL } from "../../config";

export function TVShowListItem({ tvShow, onClick }) {
  return (
    <div className="cursor-pointer w-72 relative" onClick={() => onClick(tvShow)}>
      <img
        className="w-full h-auto rounded-md"
        alt={tvShow.name}
        src={SMALL_POSTER_BASE_URL+tvShow.backdrop_path}
      />
      <div className="absolute text-center py-2 -mt-10 h-10 text-ellipsis w-72 bg-black bg-opacity-80 rounded-b-md">{tvShow.name}</div>
    </div>
  );
}