
// import { useState } from 'react';
import { useState,useEffect} from 'react';
import './App.css';
// import Link from 'next/link'
// import { BrowserRouter,Routes,Route } from 'react-router-dom';



const Key = 'ac60d123'

export default function App() {


  const tempmovie=[
    {

      id:"19",
      name:"Theri",
      year:"2016",
      src:"theri.png"
    },
    {
      id:"10",
      name:"Mersal",
      year:"2017",
      src:"mersal.png"


    },
    {
      id:"16",
      name:"Bigil",
      year:"2019",
      src:"bigil.png"
    },
    {
      id:"17",
      name:"Master",
      year:"2021",
      src:"master.png"
    },
    {
      id:"15",
      name:"Leo",
      year:"2023",
      src:"leo.png"
    },
    {
      id:"12",
      name:"Thuppakki",
      year:"2012",
      src:"thuppaki.png"
    },
    {
      id:"13",
      name:"Kaththi",
      year:"2014",
      src:"kaththi.png"
    },
    {
      id:"24",
      name:"Beast",
      year:"2022",
      src:"beast.png"
    },
    {
      id:"35",
      name:"Sarkar",
      year:"2018",
      src:"sarkar.png"
    },
    
    

    
  ]



  const [movie,setmovie] = useState(tempmovie)


  const [query,setquery] = useState(false)

  
  useEffect(function(){
    async function fetchMovies(){
      try{
        const res= await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${Key}&s=${query}`);
        const data = await res.json();

        if (data.Response === "False") throw new Error ("Not Found")
        setmovie(data.Search)
      }catch (err) {
        console.log(err.message)
      }
      finally{
        console.log("not found")
      }
    }

    
    if(query.length===0){
      
      setquery(false)
      setSelectedId(false)
      setmovie([])
      
      
    }

    setkey(false)


    
    
    

    fetchMovies();


  },[query])

  


  

  const [SelectedId,setSelectedId] = useState(false)

  const [key,setkey] = useState(false)
  

  function getdetails(id) {

    setkey(true)

    setSelectedId((Selected)=>( id === Selected ? null : id))

    
  }

  


  // const MovieGot = (movie) => movie.find((movie)=> movie.id === SelectedId);


  const MovieGot2= query.length>1 ? movie.find((movie)=> movie.imdbID === SelectedId) : null

  const MovieGot1= tempmovie.find((movie)=> movie.id === SelectedId) 
  


  function controlInput(event){
    const input = event.target.value;
    
    setquery(input);


    
    
  
  }

  

  return (
    



    <div >
      
      
      {/* <BrowserRouter>
      <Routes>
      <Route path='google.com'/>
      </Routes>
      </BrowserRouter> */}



      <Navbar controlInput={controlInput}/>
      <div className='app'>
      {
      query ? <Movielist2 movie={movie}  getdetails={getdetails}/> :
      <Movielist1 tempmovie={tempmovie} movie={movie} query={query} getdetails={getdetails}/> 
       
      }
      {
        SelectedId ? 
          MovieGot1 ? 
              query=== false ? <Watchlist1 moviegot1={MovieGot1} />
              : <Blank/> 
          :key ? 
          
              <Watchlist2 query={query} moviegot2={MovieGot2}/>
              :<Blank/>
        
           
        :<Blank/>
        
      }   
      </div>
      
    </div>
  );
}


function Navbar ({controlInput}){



  return(
    <div className='navbar'>
      <span className='logo'>🎬</span>
      
      <input type="text" name="input" onChange={controlInput} placeholder='Search your movies here...'></input>
      <p className='title'>MovieBuzz</p>

    </div>
  )
}



function Blank(){
  return(
    <div className='watch-list-blank'>

      <div className='welcome'>Welcome to Movie Buzz</div>

    </div>
  )
}




function Watchlist1({moviegot1}){



    const {name,year,src}  = moviegot1;
    


     return(
        
        
        <div className='watch-list'>
          
          <img src={src} alt='poster' className='image2'/>
    
          <div className="watch-details">
      
      

      

          <div className='name'>
           

            <p>Name :  {name}</p>


            <p>year :  {year} </p>

          </div>


          <div className='button'>
          <button>
            <a href={`https://www.youtube.com/results?search_query=${name}+trailer`} target="_blank" rel='noopener noreferrer'>🎦 Click here to watch trailer</a>
          </button>
          </div>
          

          {/* <link to="google.com">click me</link> */}
              
          {/* <link to="youtube">click to watch traielr</link> */}

          </div>
          
        </div>

        
    
      )
    
}


function Watchlist2({moviegot2,query}){


   return(
      
      
      query.length>0 && <div className='watch-list'>
        
        <img src={moviegot2.Poster} alt='poster' className='image2'/>
  
        <div className="watch-details">
    
    

    

        <div className='name'>
          

          <p>Name :  {moviegot2.Title}</p>


          <p>Year : {moviegot2.Year}</p>
        </div>


        <div className='button'>
        <button>
          <a href={`https://www.youtube.com/results?search_query=${moviegot2.Title}+trailer`} target="_blank" rel='noopener noreferrer'>🎦 Click here to watch trailer</a>
        </button>
        </div>
        

        {/* <link to="google.com">click me</link> */}
            
        {/* <link to="youtube">click to watch traielr</link> */}

        </div>
        
      </div>

      
  
    )
  
}

  


function Movielist1({tempmovie,getdetails}){


  return(
    
 
      
      <div className='movie-list'  >
      {

        
        
        tempmovie.map((tempmovie)=>{
          return(
          <div role="button" onClick={() => getdetails(tempmovie.id)} className='movie-box'>
            <img className="image1" src={tempmovie.src} alt="poster"/>
            
            <div className='movie-details'>
              <p >Movie : {tempmovie.name}</p>
              <p >Diretor : {tempmovie.year}</p>
            </div>
          </div>
          )

        })
      }
      </div>


 
  )
}



function Movielist2({movie,getdetails,query}){

  // const { 
  //   Title:title,
  //   Year:year,
  //   Poster:poster} = movie;


  return(


      
      <div className='movie-list'  >
      {

        
        
         movie.map((movie)=>{
          return(
          <div role="button" onClick={() => getdetails(movie.imdbID)} className='movie-box'>          
          

            <img className="image1" src={movie.Poster} alt="poster"/>
            
            <div className='movie-details'>
              <p >Movie : {movie.Title}</p>
              <p >Year : {movie.Year}</p>
            </div>
          </div>
          )

        })
      }
      </div>


 
  )
}




