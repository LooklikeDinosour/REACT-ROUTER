import { useEffect, useState } from "react";

function App() {


  // const [data, setData] = useState({});

  /* useState초기값으로인해 에러 발생
  편한 방법을 쓰면되는데 2번째 방법 경우는 알고 있기
  1.
  해결방법괄호안에 {} 빈 객체 넣어주기
  
  2. 아래방법(숙지)
  */
  const [data, setData] = useState();


  const handleClick= () => {

    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      setData(data);
    })
  }

  const [raw, setRaw] = useState();

  // fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
  // .then( response => response.json() )
  // .then( data => {
    //   setRaw(data);
    // })
    // console.log(1); //와우 미춌다.
    
    //화면 로드시 데이터 불러오기
  useEffect(() => {

      fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
      .then( response => response.json() )
      .then( data => {
      setRaw(data);
    })

  }, []);

  console.log(1);

  return (
    <div>
      <h3>fetch로 데이터 가져오기</h3>

      <p>버튼클릭시 데이터가져오기</p>
      <button onClick={handleClick}>데이터로드</button>

      {
        data !== undefined ?
      <p>
        {data.userId}<br/>
        {data.userPw}<br/>
        {data.userName}
      </p>
      :
      null

      }

      <p>데이터 로드시 가져오기</p>
      {
        raw !== undefined ?
        <p>  
        {raw.userId}<br/>
        {raw.userPw}<br/>
        {raw.userName}
        </p>
        :
        null
      }
    </div>
  )
}

export default App;