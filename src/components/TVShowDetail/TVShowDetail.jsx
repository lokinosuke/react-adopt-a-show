import { FiveStarRating } from "../FiveStarRating/FiveStarRating";

export function TVShowDetail({ tvShow }) {
    const rating = tvShow.vote_average / 2;
  return (
    <div>
      <div className="font-normal text-4xl">{tvShow.name}</div>
      <div className="flex">
        <FiveStarRating rating={rating} />
        <span className="text-white text-base ml-2 flex">{rating}</span>
      </div>
      <div className="font-roboto font-normal text-base h-30 overflow-y-hidden mt-2 hover:overflow-y-auto">{tvShow.overview}</div>
    </div>
  );
}