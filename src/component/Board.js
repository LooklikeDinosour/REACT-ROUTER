import {  NavLink, Outlet } from "react-router-dom"


function Board() {


  const myStyle ={
    color :'red',
    backgroundColor :'yellow'
  }

  return(
    <div>
      <h3>Board페이지</h3>
      <ul>
        {/*     
        <li><Link to='/board/1'>1번글</Link></li>
        <li><Link to='/board/2'>2번글</Link></li>
        <li><Link to='/board/3'>3번글</Link></li>
         */}
         {/* console.log로 무슨내용인지 확인 객체있어서 구조분할할당 사용해서작성 */}
        <li><NavLink to='/board/1' style={ ({isActive}) => {return isActive ? myStyle : undefined } }>1번글</NavLink></li>
        <li><NavLink to='/board/2' style={ ({isActive}) => isActive? myStyle :  undefined }>2번글</NavLink></li>
        <li><NavLink to='/board/3' style={ ({isActive}) => isActive? myStyle :  undefined }>3번글</NavLink></li>
      </ul>

      <Outlet/>
    </div>
  )
}

export default Board;