import WeatherItem from "./WeatherItem";

const WeatherList = ({data}) => {
    return ( 
        <div className="weather-list">
            {data.map(item => {
                return <WeatherItem 
                                    key={item.id}
                                    item={item}
                                    />
            })}
        </div>
     );
}
 
export default WeatherList;