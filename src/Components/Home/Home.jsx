import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios'
const apikey = "e204bc52a03c4f7b200fccdd15dbd4fc"
const url ="https://api.themoviedb.org/3"
const imgurl="https://image.tmdb.org/t/p/original"
const upcoming="upcoming"
const toprated="top_rated"
const popular="popular"
const nowplaying="now_playing"
const coverimg="https://miro.medium.com/v2/resize:fit:3840/1*1aDpEvq3NLpLkxu3kLtX_Q.jpeg"
const Card =({img})=>(
  <img className='card' src={img} alt="cover"/>
)

const Row =({title, arr=[{
  img: "https://media.comicbook.com/2018/03/avengers-infinity-war-poster-1093756.jpeg"
}] })=>(

  <div className='row'>
    
    <h2>{title}</h2>
    <div>
    {
        arr.map((item, index)=>(
          <Card key={index} img={`${imgurl}/${item.poster_path}`}/>
        ))
    }
    </div>
    </div>
  )
    const Home = () => {
      const [upcomingMovies,setUpcomingMovies]= useState([])
      const [nowplayingMovies,setNowPlayingMovies]= useState([])
      const [topratedMovies,setTopRatedMovies]= useState([])
      const [popularMovies,setPopularMovies]= useState([])
      useEffect(()=>{
        const fetchUpcoming=async()=>{
            const{data:{results}}=await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`)
            setUpcomingMovies(results)
          };
          const fetchNowPlaying=async()=>{
            const{data:{results}}=await axios.get(`${url}/movie/${nowplaying}?api_key=${apikey}`)
            setNowPlayingMovies(results)
          };
          const fetchPopular=async()=>{
            const{data:{results}}=await axios.get(`${url}/movie/${popular}?api_key=${apikey}`)
            setPopularMovies(results)
          };
          const fetchTopRated=async()=>{
            const{data:{results}}=await axios.get(`${url}/movie/${toprated}?api_key=${apikey}`)
            setTopRatedMovies(results)
          };
        fetchUpcoming()
        fetchNowPlaying()
        fetchPopular()
        fetchTopRated()

      },[])
  return (
    <section className='home'>
      <div className="banner" style={{backgroundImage: `url(${coverimg})`}}>
        
        <h1>DeadPool</h1>
        <p>
        Wade Wilson (Ryan Reynolds) is a former Special Forces operative who now works as a mercenary. His world comes crashing down when evil scientist Ajax (Ed Skrein) tortures, disfigures and transforms him into Deadpool. The rogue experiment leaves Deadpool with accelerated healing powers and a twisted sense of humor. With help from mutant allies Colossus and Negasonic Teenage Warhead (Brianna Hildebrand), Deadpool uses his new skills to hunt down the man who nearly destroyed his life.
        </p>
        
      </div>
      <Row title={"Upcoming"} arr={upcomingMovies}/>
      <Row title={"Trending"} arr={nowplayingMovies}/>
      <Row title={"Popular"} arr={popularMovies}/>
      <Row title={"Top Rated"} arr={topratedMovies}/>
      
    </section>
  )
}

export default Home