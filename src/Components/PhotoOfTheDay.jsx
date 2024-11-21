/* eslint-disable no-undef */
import { useEffect, useState } from "react"



const API_KEY = process.env.REACT_APP_NASA_API_KEY;

function PhotoOfTheDay() {
  
  const [photoOfTheDay, setPhotoOfTheDay] = useState({});

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setPhotoOfTheDay(data))
  }, [])

  console.log(photoOfTheDay)

  const img = photoOfTheDay.hdurl;
  const explanation = photoOfTheDay.explanation;
  const title = photoOfTheDay.title;
  const date = photoOfTheDay.date;
  const author = photoOfTheDay.copyright


  return (
    <div>

      <div className="picture">

      <h1>Astronomy Picture of the Day</h1>
      <h3>{title}</h3>
      <img src={img} alt="Imagen del día" className="foto"/>
      <h5>{author === '' ? '' : author}</h5>
      <p className="date">{date}</p>
      <p className="text">{explanation}</p>
      </div>

    </div>
  )
}

export default PhotoOfTheDay