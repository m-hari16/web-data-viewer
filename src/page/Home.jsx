import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import SearchBar from "../components/SearchBar/SearchBar";
import Card from "../components/Card/Card";
import getData from "../data/getData";
import searchData from "../data/searchData";
import './index.css'

const Home = () => {
    const mediaUrl = process.env.REACT_APP_MEDIAURL

    const [indexMovie, setIndexMovie] = useState([])

    useEffect(()=>{
        getData("/trending/movie/week").then((result)=>{
            setIndexMovie(result)
        })

    }, [])

    const handleSearch = async (q)=> {
        if(q.length > 3){
            const search = await searchData("/search/movie", q)
            setIndexMovie(search)
        }
    }

    return(
        <Layout>
            <div className="search">
                <SearchBar onSearch={handleSearch}/>
            </div>
            <div className="content-wrapper">
                {indexMovie.map((movie, i) => (
                    <Card
                        key={i}
                        title={movie.title}
                        link={movie.poster_path ? `${mediaUrl}/w500${movie.poster_path}` : '/default.png'}
                        release={movie.release_date}
                    />
                ))}
            </div>
        </Layout>
    )
}

export default Home