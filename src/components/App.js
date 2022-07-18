import { useEffect, useSelector } from "react";
import { useDispatch } from "react-redux/es/exports";
import GetWeather from '../API/GetWeather';
import { changePositionAction } from '../store/positionReducer';
import { Main } from '../containers/Main';
import Info from './Info/Info';
import Search from "./Search/Search";

const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((pos) => {
  //     const lat = pos.coords.latitude;
  //     const lng = pos.coords.longitude;

  //     const getWeather = (lat, lng) => {
  //       const response = GetWeather.getAll(lat, lng);
  //       response.then((data) => dispatch(changePositionAction(data.data)))
  //     }

  //     getWeather(lat, lng);
  //   })
  // }, []);

  return (
    <Main>
        <Info/>
        <Search/>
    </Main>
  );
}

export default App;
