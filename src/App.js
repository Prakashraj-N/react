
// import { useState } from 'react';
import { useState } from 'react';
import './App.css';






// const Key = ''

export default function App() {



  const movie=[
    {

      id:19,
      name:"Theri",
      director:"Atlee",
      src:"theri.png"
    },
    {
      id:"10",
      name:"Mersal",
      director:"Atlee",
      src:"mersal.png"


    },
    {
      id:"16",
      name:"Bigil",
      director:"Atlee",
      src:"bigil.png"
    },
    {
      id:"17",
      name:"Master",
      director:"Loki",
      src:"master.png"
    },
    {
      id:"15",
      name:"Leo",
      director:"Loki",
      src:"leo.png"
    },
    {
      id:"12",
      name:"Doctor",
      director:"Nelson",
      src:"doctor.png"
    },
    {
      id:"13",
      name:"Jailer",
      director:"Nelson",
      src:"jailer.png"
    },
    {
      id:"24",
      name:"Beast",
      director:"Nelson",
      src:"beast.png"
    },
    {
      id:"35",
      name:"Vikram",
      director:"Loki",
      src:"vikram.png"
    },
    {
      id:"47",
      name:"Nanban",
      director:"Shankar",
      src:"nanban.png"
    },
    {
      id:"46",
      name:"Enthiran",
      director:"Shankar",
      src:"enthiran.png"
    },

    
  ]



  // useEffect(function(){
  //   fetch("https://dog.ceo/api/breeds/image/random")

  // },[])


  const [SelectedId,setSelectedId] = useState(false)
  const [Data,setData] = useState(false)



  function getdetails(id) {

    setSelectedId((Selected)=>( id === Selected ? null : id))

    

    
    
  }

  
  const MovieGot = movie.find((movie)=> movie.id === SelectedId)

  function controlInput(event){
    const input = event.target.value;
    setData(input)
    
  
    
    
  }

  console.log(Data)

  const finalMovie = movie.filter((movie) => movie.name === Data)

  console.log(finalMovie)

  

  



  


 




  



  return (
    



    <div >
      <Navbar controlInput={controlInput}/>
      <div className='app'>
      {
      Data ? <Movielist1 movie={movie} finalmovie={finalMovie} getdetails={getdetails}/> : 
      <Movielist2 movie={movie} finalmovie={finalMovie} getdetails={getdetails}/>
      }
      {
        SelectedId ? <Watchlist moviegot={MovieGot}/>  :   <Blank/>
      }   
      </div>
      
    </div>
  );
}


function Navbar ({controlInput}){












  return(
    <div className='navbar'>
      <span className='logo'>🎬</span>
      
      <input type="text" name="input"  onChange={controlInput} placeholder='Search your movies here...'></input>
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






function Watchlist({moviegot}){



    const {id,name,director,src}  = moviegot;



     return(
        
        
        <div className='watch-list'>
          
          <img src={src} alt='poster' className='image2'/>
    
          <div className="watch-details">
      
      

      

          <p> Id :  {id}</p>

          <p>Name :  {name}</p>


          <p>Director : {director}</p>
      
          </div>
          
        </div>

        
    
      )
    
}

  





function Movielist1({movie,finalmovie,getdetails}){


  return(
    

      
      
      
      
      <div className='movie-list'  >
      {

        
        
        finalmovie.map((finalmovie)=>{
          return(
          <div role="button" onClick={() => getdetails(finalmovie.id)} className='movie-box'>
            <img className="image1" src={finalmovie.src} alt="poster"/>
            
            <div className='movie-details'>
              <p >Movie : {finalmovie.name}</p>
              <p >Director : {finalmovie.director}</p>
            </div>
          </div>
          )

        })
      }
      </div>


 
  )
}






function Movielist2({movie,finalmovie,getdetails}){


  return(
    

      
      
      
      
      <div className='movie-list'  >
      {

        
        
        movie.map((movie)=>{
          return(
          <div role="button" onClick={() => getdetails(movie.id)} className='movie-box'>
            <img className="image1" src={movie.src} alt="poster"/>
            
            <div className='movie-details'>
              <p >Movie : {movie.name}</p>
              <p >Director : {movie.director}</p>
            </div>
          </div>
          )

        })
      }
      </div>


 
  )
}








