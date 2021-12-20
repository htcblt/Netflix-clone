import axios from "./../../api/localaxios";
import userrequests from "../../api/request";
import React, { useEffect, useState } from "react";
import "./Banner.css"


const  Banner = ()=>{

    const[movie,setMovie]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(userrequests.fetchTrending)
            setMovie(request.data.results[Math.floor(Math.random()* request.data.results.length-1)])
        }

        fetchData();
       
    },[])
    return(
        <div className="banner" style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,backgroundPosition:'center',backfroundSize:'cover'}}>
            <div className="banner_content">
                <h1 className="banner_title">
                    {movie?.title||movie?.origital_name||movie?.name}
                </h1>
                <div className="banner_buttons">
                    <button>Play</button>
                    <button>My list</button>
                </div>
                <div className="banner_description">
                    <p> {movie?.overview}</p>
                </div>

            </div>
            <div className="banner_fade"></div>
        </div>
    )
}

export default Banner;