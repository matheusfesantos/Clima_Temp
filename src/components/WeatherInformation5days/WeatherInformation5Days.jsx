import '../../components/WeatherInformation5days/WeatherInformation5Days.css'

function weatherInformation5Days({ weather5days }){

    let dailyForecast = {}

    for(let forecast of weather5days.list){

        const date = new Date(forecast.dt * 1000)
            .toLocaleDateString();

        if (!dailyForecast[date]){
            dailyForecast[date] = forecast
        }
    }
    const nextFiveDays = Object.values(dailyForecast).slice(1,6)

    function convertDate(date){
        const newDate = new Date(date.dt * 1000)
            .toLocaleDateString('pt-br',
                {weekday: 'long', day: 'numeric'});

        return newDate;
    }

    return(
        <div className='weather-container'>
            <h3>Previsão dos Próximos 5 dias</h3>

            <div className='weather-list'>

                {nextFiveDays.map(forecast => (
                    <div key={forecast.dt} className='weather-iten'>
                        <p className='forecast'>{convertDate(forecast)}</p>
                        <img src=
                                 {`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}/>

                        <p>{forecast.weather[0].description}</p>

                        <p>{Math.round(forecast.main.temp_min)}min /
                            {Math.round(forecast.main.temp_max)}max</p>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default weatherInformation5Days