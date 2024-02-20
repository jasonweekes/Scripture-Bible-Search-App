import './App.css';
import useAxios from './hooks/useAxios';
import React, { useState } from 'react';

function App() {
  const [scriptureInput, setscriptureInput] = useState("")
  const [setUrl, setUrl2, data, loading, setLoading, error] = useAxios()
  
  function handleOnSubmit(e){
    // prevent from refreshing the page
    e.preventDefault()
     
    console.log(scriptureInput)
    setUrl(`https://bible-api.com/${scriptureInput}?translation=kjv`)
 
  
   setLoading(true)
  }
  //. total chain of events
  // 1. A user types into the search bar(tracked by a state varialbe)
  // 2. user submits the text
  // 3. onSubmit, the text gets placed in a URL, and sent to useAxios. setLoading(true)
  // to trigger the userEffect on the useAxios side
  // 4. useAsios performs a GET request to the submitted URL. It return with `data`, `loading`, and `error` based on success/failure
  // 5. Back on the component side, the the `data` is rendered (!loading && data)
  
  return (
    <div className="App">
      <div className='header'>
      <h1>Bible Scripture Search App!</h1>
      
      </div>
      <form onSubmit={handleOnSubmit}>
      
        <input
        type="text" placeholder='John 3:16-17,22'
        onChange={(e) => setscriptureInput(e.target.value)}
        />
        <button
        type="submit"
       >
        submit
        </button>
      </form>
      
      {/* {!loading && data && data.drinks.map((drink) => (
        <div>
          <h1> name: {drink.strDrink}</h1>
          </div>
      ))
      } */}
      {!loading && data &&
      <div>
        
    <h1>Book Name: {data.verses[0].book_name},  {data.verses[0].book_id} <br></br>
     Chapter: {data.verses[0].chapter}  <br></br>
     Total Verses: {data.verses.length}
    <br></br>
    Translation:  {data.translation_id.toUppercase()}
    </h1>
        <ul>
          {/* after using .map() method use() and not {} to return. It is iplicity return and the bracker() say to return this
          ; */}
        {
            data && data.verses.map((verse) => {
                return(
                    <li key={verse.text}  ><br></br>
                    Verse: {verse.verse} {verse.text} 
                 </li>
                )
            })
      
        }
        </ul>
      
       
      </div> 
      }
    </div>
  );
}

export default App;
