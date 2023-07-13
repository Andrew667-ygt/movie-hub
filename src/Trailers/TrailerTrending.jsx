import React, { Fragment, useEffect } from 'react';
import {useState} from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import '../Styles/TrailerMovie.css';


export default function Trending({TrendTitle,toggle}) {
 


    const [video,setVideo] = useState('');
    const [videoURL,setVideoURL] = useState('');

    function handleSearch(){
        setVideo(TrendTitle)
        movieTrailer(video).then((res)=>{
            setVideoURL(res)

        });
    }
    useEffect(()=>{
        handleSearch()
    },[videoURL])



    return (
     <Fragment>
        <div className='container'>
        </div>
        <div className='player'>
            <h3 id={toggle ? 'TrailerMovie-name-dark' : 'TrailerMovie-name-light'}>{TrendTitle}</h3>
        <ReactPlayer url={videoURL} controls={true}  width={'900px'} height={'500px'} muted={false} />
        </div>
     </Fragment>
    )
  
}
