import React from "react";
import "./Home.css"
import Navigation from "../Navigation/Navigation";
import Banner from "../Banner/Banner";
import userrequests from "../../api/request";
import Category from "../Category/Category";
const Home = ()=>{
    return(
        <div className="home">
           <Navigation/>
            <Banner/>
            <Category title="Netflix Originals" isLargeRow fetchURL={userrequests.fetchNetflixOriginals}/> 
            <Category title="Trending Now" fetchURL={userrequests.fetchTrending}/>
            <Category title="Top Rated"fetchURL={userrequests.fetchTopRated}/>
            <Category title="Action Movies"fetchURL={userrequests.fetchActionMovies}/>
            <Category title="Comedy Movies"fetchURL={userrequests.fetchComedyMovies}/>
            <Category title="Horror Movies"fetchURL={userrequests.fetchHorrorMovies}/>
            <Category title="Romantic Movies"fetchURL={userrequests.fetchRomanceMovies}/>
            <Category title="Documentaries "fetchURL={userrequests.fetchDocumentaries}/>
        </div>
    )
}

export default Home;