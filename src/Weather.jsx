import React, { useEffect, useState } from 'react'

const Weather = () => {
  const [val, updated] = useState('karachi');
  const [data, newData] = useState();

  useEffect(() => {

    const getItems = async() => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&units=metric&uk&APPID=6f5b0612a038ebff52b80da419ce0ca7`)
      const convert = await res.json();
      newData(convert.main);
    }

    getItems();
  }, [val])

  return (
    <div>
      <div className="main">
        <div className="weather">
            <input type="search" value={val} onChange={((e) => {updated(e.target.value)})} />
            {data ? 
            <div>
            <h1><span id='spane'><i className="fa-solid fa-street-view"></i></span>{val}</h1>
            <h3>{data.temp}°Cel</h3>
            <p>Min : {data.temp_min}°Cel | Max : {data.temp_max}°Cel</p>
            <div className="cycle1"></div>
            <div className="cycle2"></div>
            <div className="cycle3"></div>
            </div> : <p style={{marginTop:'30px', fontSize:'1rem'}}>No data found</p>
            }
        </div>
      </div>
    </div>
  )
}

export default Weather
