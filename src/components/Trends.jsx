import axios from 'axios';
import React,{Fragment, useEffect, useState} from 'react';
import{AiFillPlayCircle} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
import '../Styles/Videos.css';
import {Container} from './Navbar';
import Nole from './Nole.jpg'
import { useContext } from 'react';
import TrailerTrending from '../Trailers/TrailerTrending';


export default function Trends(){
    const {toggle, inputValue} = useContext(Container)
    const input = inputValue
    const [trendArray,setTrendArray] = useState([])
    const [trailer, setTrailer] = useState(true)
    const [trendTitle, setTrendTitle] = useState('')
    const TrendsShown = '/trending/all/week'
    const Api = 'https://api.themoviedb.org/3'
    const Images = 'https://image.tmdb.org/t/p/w500/'
    
    const Trends = async () => {
        const data = await axios.get(`${Api}${TrendsShown}`,{
            params : {
                api_key:'484234c25a6ba5fa01683358086f94d8',
                query: input
            }
        })
        const results = (data.data.results)
        setTrendArray(results)

    }
    useEffect(()=>{
        setTimeout(() => {
            Trends()
        }, 100);
    }, [input])
    console.log(trendArray)
    const TrendTitle = (trend) =>{
        setTrendTitle(trend.title)
        setTrailer(!trailer)
        
    }
    return(
        <Fragment>
            <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'}>
            <div className='movies-container'>
            {trendArray.map((trend) => {
                return(
                <Fragment>
                    <div id={trailer ? 'container' : 'NoContainer'}>
                    <AiFillPlayCircle color='blue' fontSize={40} id={trailer ? 'playIcon' : 'hide'} onClick={()=> TrendTitle(trend)}/>
                    <img src={trend.poster_path ? `${Images}${trend.poster_path}` : Nole} alt='' onClick={() => TrendTitle(trend)} />
                    <h3 id='smaller-Text' className={toggle ? 'mainColor' : 'secondaryColor'}>{trend.title}</h3>
                    </div>
                </Fragment>
                )
            })}
             {trailer ? console.log : <TrailerTrending TrendTitle={trendTitle} toggle={toggle}/>}
             < AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} color='#fff' cursor={'pointer'} onClick={()=> setTrailer(true)} />
            </div>
            </div>
        </Fragment>


    )
}




