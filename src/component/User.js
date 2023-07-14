import { useLocation, useSearchParams } from "react-router-dom";

function User () {

  //쿼리스트링 값을 받는 방법1
  const location = useLocation();
  console.log(location);

  //쿼리스트링 값을 받는 방법2
  // 이렇게 받을 수 있지만 아래방법으로 값을 받아온다.
  // const obj = useSearchParams();
  // console.log(obj);

  //첫번째인덱스 -set,get을 가진 객체
  //두번째인덱스-쿼리스트링을 직접 변경할 수 있는함수
  const [obj, setObj] = useSearchParams();
  let id = obj.get("id"); //request.getParameter("키");
  let name =obj.get("name");

  //스트링 강제제어 (잘사용하지 않는다.)
  const handleClick = () => {
    setObj({id:'변경',name:'변경'}); //이후에 렌더링 발생
  }


  return(
    <div>
      <h3>유저페이지</h3>

      쿼리스트링id : {id} <br/>
      쿼리스트링name: {name}
    
      <button onClick={handleClick}>쿼리스트링 제어하기</button>  
    
    </div>

  )

}

export default User