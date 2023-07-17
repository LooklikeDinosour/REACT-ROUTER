import axios from "axios";
import { useEffect, useState } from "react";
import NewsArticle from "./NewsArticle";
import { useParams } from "react-router-dom";

import styled from "./NewsList.module.css";


function NewsList () {
  //2. 로딩처리
  const [loading, setLoading] = useState(false);

  //3. 쿼리파라미터 값 처리

  const {category} = useParams();
  console.log(category);

  const query = category === undefined ? '' : '&category=' + category; //url 에 삽입하기
  





  //1. 데이터처리
  const [data,setData] = useState([]);

  useEffect(/*  async 여기서는 정상적으로 실행안됨.  */() => {
    let url  = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=43ef142143294c849e08c2caac701754`;

    (async () => {
      let { data: {articles}} = await axios.get(url);
      setData(articles);

      setLoading(true); /* 데이터가 도착하면 true 실제로많이 쓰는 문법 */

    })();

  },[query]) //마운트 이후에 실행되고, query변수가 바뀔때마다 실행 이거 없으면 링크 눌러도 안변함.

  if(!loading) {
    return <div>데이터를 불러오는 중입니다.</div>;
  }

  return(
    <div>
      <ul className={styled.wrap}>
{/*       <li>
        <a href="#">
          <img src="#" alt="" />
          <article>
            <p>기자</p>
            <p>일자</p>
            <p>제목</p>
            <p>설명</p>
          </article>
        </a>
      </li> */}
      {/* props로 데이터넘겨주기 하위에서 키 값이 필요없고, 적용이 안됌. 그래서 여기서 처리함 */}
      {data.map( (item, index) => <NewsArticle item={item} key={index}/>  )}
    </ul>
    </div>
  ) 

}

export default NewsList;
