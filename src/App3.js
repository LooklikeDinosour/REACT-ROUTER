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

    const [loadData, setLoadData]= useState([])

    useEffect( () => {
     
      axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
      .then( response => setLoadData(response.data))

    }, []);

    const arr = loadData.map( item => <option key={item.key} value={item.value}>{item.value}</option> )


    //async & await
    //1. async 안에서 await을 사용할 수있다.
    //2. function에 async를 붙이면 리턴이 프로미스가 됩니다.
    //3. 리턴이 promise라면 await을 사용할 수 있고, then을 생략할 수 있음.

    const handleClick2 = async () => {

    /*    
   axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
      .then(data => {
        console.log(1)

        axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
        .then(data => {
          console.log(3)

          axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
          .then(data => {
            console.log(5)

          })
        })
      })

      console.log(2);
      console.log(4);
      console.log(6);
       */

      const result = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json');
      console.log(result);//1

      const result2 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json');
      console.log(result2);//2

      const result3 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json');
      console.log(result3);//3


    }




  return (
    <div>

      <h3>엑시오스 사용하기</h3>

      <button onClick={handleClick}>데이터가져오기</button>
      <button onClick={handleClick2}>어싱크확인하기</button>

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