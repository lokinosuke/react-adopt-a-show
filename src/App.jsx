import { useEffect } from "react";
import { useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import logo from "./assets/images/logo.png";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { Search } from "react-bootstrap-icons";
import { SearchBar } from "./components/SearchBar/SearchBar";

export function App() {
    const [currentTVShow, setCurrentTVShow] = useState();
    const [recommendationList, setRecommendationList] = useState([]);
  
    async function fetchPopulars() {
      const populars = await TVShowAPI.fetchPopulars();
      if (populars.length > 0) {
        setCurrentTVShow(populars[0]);
      }
    }
    async function fetchRecommendations(tvShowId) {
      const recommendations = await TVShowAPI.fetchRecommendations(
        tvShowId
      );
      if (recommendations.length > 0) {
        setRecommendationList(recommendations.slice(0, 10));
      }
    }
    useEffect(() => {
      fetchPopulars();
    }, []);
    useEffect(() => {
      if (currentTVShow) {
        fetchRecommendations(currentTVShow.id);
      }
    }, [currentTVShow]);

    async function searchTVShow(tvShowName) {
      const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    }

    return (
        <div className="flex flex-col h-screen p-6 bg-slate-900" 
        style={{
            background: currentTVShow
              ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
              : "black",
          }}        >
            <div className="flex justify-between flex-grow h-1/4 w-auto">
                <div className="">
                    <Logo image={logo} title="AdoptAShow" subtitle="Find a show you may like"/>
                </div>
                <div className="w-auto">
                    <SearchBar onSubmit={searchTVShow} />
                </div>
            </div>
            <div className="flex flex-grow h-1/2">
            {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
            </div>
            <div className="flex flex-grow h-1/4">
            {recommendationList && recommendationList.length > 0 && (
          <TVShowList
            onClickItem={setCurrentTVShow}
            tvShowList={recommendationList}
          />
        )}           
        </div>
        </div>
    );
}