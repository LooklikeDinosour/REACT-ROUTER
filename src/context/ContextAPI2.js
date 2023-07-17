import { createContext, useState } from "react";


const UserContext = createContext({
  state : {id : '초기값', name : '초기값'},
  action : {
    setUser : () => {}
  }
});

//2.Provider 함수 선언
//매개값은 반드시 children
const UserProvider = ({children}) => {

  const [user, setUser] = useState({id: 'aaa', name: '홍길동'});

  const value = {
    state : user,
    action : {setUser }
  }

 
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

//3. Consumer함수 반환
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer}; // 여러개 가능

export default UserContext; //기본은 반드시 하나