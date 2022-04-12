import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const FormWeather = (props) => {
    return ( 
        <form className="form-weather">
            <MyInput placeholder="Search for a city"/>
            <MyButton>submit</MyButton>
        </form>
     );
}
 
export default FormWeather;