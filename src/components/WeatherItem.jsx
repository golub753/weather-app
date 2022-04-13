const WeatherItem = ({item}) => {
    return ( 
        <div className="post">
            <div className="post-wrapper">
                <div className="post-name">
                    {item.city}
                    <div className="post-name-after">{item.country}</div>
                </div>
                <div className="post-number">
                    {item.degree}
                    <div className="post-cels">℃</div>
                </div>
                <img src={`/images/${item.icon}.svg`} alt=""/>
                <div className="post-description">{item.weather}</div>
            </div>
        </div>
     );
}
 
export default WeatherItem;