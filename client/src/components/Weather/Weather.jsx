import React, { useEffect, useState } from 'react'


const Weather = () => {
    let [apidata, setApidata] = useState(null);
    let [weathericon,setWeathericon] = useState(null)
    useEffect(() => {
        
        let handleweather = async () => {

                let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Peshawar&units=metric&appid=4700f62bda2ec04e8167b103602a7b9a');
                let data = await response.json();
                setApidata(data.main);
                setWeathericon(data.weather[0]);
                console.log(data.main.temp)
            
        }
        handleweather();
    }, []);
    return (
        <div >
            {
                !apidata ? "Data not found"
                    : 
                        (
                            <>
                                {apidata.temp}
                                <img src={`http://openweathermap.org/img/w/${weathericon.icon}.png `} alt="" className='img-fluid' srcSet="" />
                            </>

                        )
            }
            {/* {apidata} */}
        </div>
    )
}

export default Weather