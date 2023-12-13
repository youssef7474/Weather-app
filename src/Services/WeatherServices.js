//import { DateTime } from "luxon"

const API_KEY="b383e32a5b4711d8cb356ff3056ce110"
const BASE_URL="https://api.openweathermap.org/data/2.5"

const getWeatherData=(infoType,searchParams)=>{
    const url =new URL(BASE_URL + "/" + infoType)
    url.search =new URLSearchParams({...searchParams, appid:API_KEY})

    return fetch(url).then((res)=>res.json())
}

const formatCurrentWeather=(data)=>{

    const {
        coord:{lat,lon},
        main:{humidity,feels_like,temp,temp_max,temp_min},
        name,
        dt,
        sys:{country,sunrise,sunset},
        weather,
        wind:{speed},
        timezone,
    }=data
    const {main:details,icon} =weather[0]
    return{lat,lon,humidity,feels_like,temp,temp_max,temp_min,name,dt,country,sunrise,sunset,speed,details,icon,timezone}

}

const getFormattedWeatherData= async(searchParams)=>{

    const formattedCurrentWeather= await getWeatherData("weather",searchParams).then(formatCurrentWeather)

    
    

    return formattedCurrentWeather
}



//const fotmatToLocalTime=(secs,zone,format="cccc,dd LLL yyyy, | Local time:'hh:mm a ")=>DateTime.fromSeconds(secs).setzone(zone).toFormat(format)

export default getFormattedWeatherData