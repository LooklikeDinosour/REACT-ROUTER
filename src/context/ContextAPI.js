import { createContext, useContext } from "react";

//전역으로 사용할 컨텍스트API 선언
const ColorContext = createContext({color: 'red'}); //초기값

console.log(ColorContext);

export default ColorContext;
