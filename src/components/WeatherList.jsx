import WeatherItem from "./WeatherItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const WeatherList = ({data}) => {
    return ( 
        <TransitionGroup className="weather-list">
            {data.map(item => 
                    <CSSTransition
                        key={item.id}
                        timeout={500}
                        classNames='post'
                    >
                        <WeatherItem 
                                        item={item}
                                        />
                    </CSSTransition>)
            }
        </TransitionGroup>
     );
}
 
export default WeatherList;