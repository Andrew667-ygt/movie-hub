import axios from 'axios';
import React,{Fragment, useEffect, useState} from 'react';
import{AiFillPlayCircle} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
import '../Styles/Videos.css';
import {Container} from './Navbar';
import Nole from './Nole.jpg'
import { useContext } from 'react';
import TrailerMovies from '../Trailers/TrailerMovies';


export default function Movies(){
    const {toggle, inputValue} = useContext(Container)
    const input = inputValue
    const [moviesData,setMoviesData] = useState([])
    const [trailer, setTrailer] = useState(true)
    const [movieTitle, setMovieTitle] = useState('')
    const Shown = input ? 'search'  : 'discover'
    const Api = `https://api.themoviedb.org/3/${Shown}/movie`
    const Images = 'http://image.tmdb.org/t/p/w500'
    
    const MovieCall = async () => {
        const data = await axios.get(Api,{
            params : {
                api_key:'484234c25a6ba5fa01683358086f94d8',
                query: input
            }
        })
        const results =(data.data.results)
        setMoviesData(results)

    }
    useEffect(()=>{
        setTimeout(() => {
            MovieCall()
        }, 100)
    }, [input])
    console.log(moviesData)
    const MoviesTitle = (movie) => {
        setMovieTitle(movie.title)
        setTrailer(!trailer)
    }
    return(
        <Fragment>
            <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'}>
            <div className='movies-container'>
            {moviesData.map((movie) => {
                return(
                <Fragment>
                    <div id={trailer ? 'container' : 'NoContainer'}>
                    <AiFillPlayCircle color='blue' fontSize={40} id={trailer ? 'playIcon' : 'hide'}onClick={()=> MoviesTitle(movie)} />
                    <img src={movie.poster_path ? `${Images}${movie.poster_path}` : Nole} alt='' onClick={()=> MoviesTitle(movie)} />
                    <h3 id={movie.titlelength > 28 ? 'smaller-Text' : ''} className={toggle ? 'mainColor' : 'secondaryColor'}>{movie.title}</h3>
                    </div>
                </Fragment>
                )
            })}
            {trailer ? console.log : <TrailerMovies MoviesTitle={movieTitle} toggle={toggle}/>}
             < AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} color='#fff' cursor={'pointer'} onClick={()=> setTrailer(true)} />
            </div>
            </div>
        </Fragment>


    )
}




