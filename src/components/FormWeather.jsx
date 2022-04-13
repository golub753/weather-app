import { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const FormWeather = ({getCity}) => {
    const [city, setCity] = useState('');
    const submit = e => {
        e.preventDefault();
        getCity(city);
        setCity('');
    }
    return ( 
        <form onSubmit={submit} className="form-weather">
            <MyInput 
                value={city}
                placeholder="Search for a city"
                onChange={(e) => setCity(e.target.value)}
            />
            <MyButton>submit</MyButton>
        </form>
     );
}
 
export default FormWeather;