import './App.css'
import { useState } from 'react';
import './index.css';

function App() {
  const [nekoUrl, setNekoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [showImage, setShowImage] = useState(false)

  async function getNeko() {
    setLoading(true);
    setShowImage(false);
    try{
      const response = await fetch('https://nekos.best/api/v2/neko')
      const json = await response.json()
      const imageUrl = json.results[0].url;
      console.log(json.results[0].url)
      console.log(imageUrl);
      setNekoUrl(imageUrl);

      setTimeout(() => {
        setShowImage(true);
        setLoading(false);
      }, 2000);
    } 


    catch(error){
      console.log('Failed to grab Neko', error)
    }
   
}




//API fetched from: https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png


  return (
    <>
      <div className='container'>
       
        <header className='header'>
        <h1>
          Random Neko Image Generator
        </h1>
        </header>
       <div className='content-block'>
        
        <div className='button-wrapper'>
        <button 
          onClick={getNeko}
          className='search-btn'
          >Generate Neko</button>
       
        {loading && 
        <div className='loading-container'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          
          </div>}
          </div>
        
        
        {nekoUrl && !loading &&(
        
          
          <img
          className='neko-img'
          src={nekoUrl}
          alt="Neko Image"
          ></img>
        
          )}
        </div>
      </div>
    </>
  )
}

export default App
