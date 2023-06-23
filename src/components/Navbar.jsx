import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const navigation = [
    {id:1, name: "Trending"},
    {id:2, name: "Upcoming"},
]
const Netflix = (props)=>{

    // url = 
    const [search,setSearchMovies] = useState('');
    const navgiate =   useNavigate('/search-movies/');
    
    const submitDataForm = (e)=>{
        e.preventDefault();
        navgiate('/search-movies/'+search);
    }
    return (
        <>
         <nav className='nav'>
               <div className='nav-left'>
                     <div className='nav-logo'>
                          <Link to = "/">Chillflix</Link>
                     </div>
                     <div className="nav-main">
                          {
                              navigation.map((items)=>(
                                    <ul key={items.id}>
                                        <li>
                                            <Link to = {items.name}>
                                              {items.name}
                                            </Link>
                                        </li>
                                    </ul>
                              ))
                          }
                     </div>
               </div>
               <form onSubmit={submitDataForm} className='nav-right'>
                     <input onChange={(e)=> setSearchMovies(e.target.value)} type="text" placeholder="Search millions of movies...."/> 
                     <button type="submit"><i class="uil uil-search"></i></button>
               </form>

        
               
         </nav>
         <div className="py-4 px-4">
            {props.children}
        </div>
        </>
    )
}

export default Netflix;