import { useState, useEffect } from "react";
import SocialCard from "./SocialCard";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [timer, setTimer] = useState(0);

  // useEffect 자체에 async 옵션을 걸 수 없다. 때문에 async로 함수를 선언하고 이후에 실행하는 식으로 코드를 작성해왔는데 이렇게 즉시실행함수로
  // 작성하면 코드가 훨씬 깔끔해진다.
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        // response.json() 데이터가 오고 나서 그 이후에 results 값을 가져와야 하는 것이기 때문에 response.json() 부분을 소괄호로 묶어준다.
        const json = (await response.json()).results;
        console.log(json);
        setUsers(json);
        setAllUsers(json);
      } catch (errors) {
        console.log(errors);
        setUsers([]);
      }
    })();
  }, []);

  const filterCards = (e) => {
    if (timer) {
      console.log("clear timer");
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      const value = e.target.value.toLowerCase();
      const filteredUsers = allUsers.filter((user) =>
        `${user.name.first} ${user.name.last}`.toLowerCase().includes(value)
      );
      setUsers(filteredUsers);
    }, 800);

    setTimer(newTimer);
  };

  return (
    <div className="App">
      <h1>Social Cards</h1>
      <input
        type="text"
        className="search-box"
        placeholder="Search..."
        onInput={filterCards}
      />
      <div className="cards-container">
        {users.map((user, idx) => (
          <SocialCard userData={user} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default App;
