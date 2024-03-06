import { TVShowListItem } from "../TVShowListItem/TVShowListItem";

export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <div>
      <div className="font-roboto font-semibold text-xl">You may also like:</div>
      <div className="flex overflow-x-hidden w-screen hover:overflow-x-auto -ml-6 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        {tvShowList.map((tvShow) => {
          return (
            <span key={tvShow.id} className="mr-1.5">
               <TVShowListItem onClick={onClickItem} tvShow={tvShow} />
            </span>
          );
        })}
      </div>
    </div>
  );
}