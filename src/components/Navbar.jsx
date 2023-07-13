import React,{Fragment, useState} from "react";
import{HiSearch} from 'react-icons/hi';
import { Routes,Route,NavLink} from "react-router-dom";
import Movies from './Movies';
import TvShows from './TvShows';
import Trends from './Trends';
import Pricing from './Pricing';
import '../Styles/NavBarstyle.css';


export const Container = React.createContext()


export default function Navbar(){

    const [toggle,setToggle] = useState(true)
    const [inputValue, setInputValue] = useState('')
    console.log(toggle)
    return(
        <Container.Provider value={{toggle, inputValue}}>
        <Fragment>
            <nav className={toggle ? '' : 'navBarColor'}>
                <div className="nav-options">
                    <h1 id={toggle ? '' : 'heading'}>MOVIE HUB</h1>
                    <NavLink to='' style={({isActive}) => {return {color:isActive ? '#fff' : '#d1d1d1'}}}>
                    <span id={toggle ? 'Movies' : 'MoviesLight'}>Movies</span>
                    </NavLink>
                    <NavLink to='/TvShows'  style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
                    <span id={toggle ? 'Movies' : 'MoviesLight'}>Tv Shows</span>
                    </NavLink>
                    <NavLink to='/Trending'  style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
                    <span id={toggle ? 'Movies' : 'MoviesLight'} >Trending</span>
                    </NavLink>
                    <NavLink to='/Pricing'  style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
                    <span id={toggle ? 'Movies' : 'MoviesLight'}>Pricing</span>
                    </NavLink>
                </div>
                <div className="input-group">
                <input type="text" placeholder="Search Movie Title" onChange={(e)=>setInputValue(e.target.value)} />
                <HiSearch fontSize={21} color="gold" id="search"/>
                <div id="Color-switcher" onClick={()=>setToggle(!toggle)}>
                    <div id={toggle ? 'Color-switcher-mover' : "Color-switcher-moved"}></div>
                </div>
                </div>
            </nav>
            <Routes>
                <Route path="" element={<Movies />} />
                <Route path="/TvShows" element={<TvShows />} />
                <Route path="/Trending" element={<Trends />} />
                <Route path="/Pricing" element={<Pricing />} />
            </Routes>
        </Fragment>
        </Container.Provider>


    
       
    );
}
