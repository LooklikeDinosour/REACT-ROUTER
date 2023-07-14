import { useParams } from "react-router-dom";

function BoardContent() {


  const {num} = useParams();
  // 구조분할.. {} 까묵지말자
  



  return (
    <div>
      <h3>boardContent페이지</h3>
      {num}입니다,~~

    </div>
  )
}

export default BoardContent;