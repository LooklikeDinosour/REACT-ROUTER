import axios from "axios";
import { useEffect, useState } from "react";

function App () {

  /*
  npm install axios 설치

  */


  const [data, setData] = useState({});

  const handleClick = () => {
    //fetch의 반환 promise
    //axios의 반환 promise
    //결론 문법 같음
    const result = axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then( response => setData(response.data) )
    }


    //실습
    //화면에 로드될때 axios로 select태그의 옵션으로 처리하기
    //https://raw.githubusercontent.com/yopy0817/data_example/master/by.json

    const [loadData, setLoadData]= useState([{}])

    useEffect( () => {
     
      axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
      .then( response => setLoadData(response.data))

    }, []);

    const arr = loadData.map( item => <option key={item.key}>{item.value}</option> )


  return (
    <div>

      <h3>엑시오스사용하기</h3>

      <button onClick={handleClick}>데이터가져오기</button>

      <p>
        {data.userId}<br/>
        {data.userPw}<br/>
        {data.userName}
      </p>

      <h3>로드하자마자 셀렉트처리하기</h3>
      <select>
      {arr}
      </select>

    </div>
  )
}

export default App;