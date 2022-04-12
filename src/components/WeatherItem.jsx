const WeatherItem = ({item}) => {
    return ( 
        <div className="weather-item">
            <div className="weather-item-wrapper">
                <div className="weather-item-name">
                    {item.city}
                    <div className="weather-item-name-after">{item.country}</div>
                </div>
                <div className="weather-item-number">
                    {item.degree}
                    <div className="weather-item-cels">℃</div>
                </div>
                <img src={`/images/${item.icon}.svg`} alt=""/>
                <div className="weather-item-description">{item.weather}</div>
            </div>
        </div>
     );
}
 
export default WeatherItem;