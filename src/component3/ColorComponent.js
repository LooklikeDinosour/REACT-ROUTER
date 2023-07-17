import ColorContext from "../context/ContextAPI";


function ColorComponent() {

  const colorHandler= (value) => {
    return <div>컬러컴포넌트 value: {value.color}</div>;
  }

  return(
    /* Consumer에서는 컨텍스트API의 사용, 값을 전달받은 함수를 하나 선언하고, 첫번째 매개변수로 받는다. 객체리턴 () 사용 */
    <ColorContext.Consumer>
    {/* {
      (value) => (<div>컬러컴포넌트 value: {value.color}</div>)
    } */}
    {/* 이렇게 2줄을 위에 한줄로 줄인것 */}
    {colorHandler}
    </ColorContext.Consumer>
  )
}

 export default ColorComponent;