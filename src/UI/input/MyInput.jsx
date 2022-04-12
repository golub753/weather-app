import cl from './MyInput.module.css';

const MyInput = ({placeholder}) => {
    return ( 
        <input placeholder={placeholder} className={cl.myInput}/>
     );
}
 
export default MyInput;