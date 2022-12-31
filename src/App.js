import { useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //one time data fetching
    // const fetchData = async () => {
    //   let list = []
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "notes"));
    //     querySnapshot.forEach((doc) => {
    //       // console.log(doc.id, " => ", doc.data());
    //       list.push({id: doc.id, ...doc.data()})
    //     });
    //     setData(list)
    //   } catch (error) {
    //     console.log(error);
    //   }

    // };
    // fetchData()

    //listening to realtime data
    //listening to collection
    const unsub = onSnapshot(
      collection(db, "notes"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  // console.log(data);

  return (
    <div className="App">
      <Form />
      <div className="cards-container mt-5 container p-2 mx-auto flex flex-col gap-3">
        {data
          .sort((a, b) => b.timestamp - a.timestamp)
          .map((item) => (
            <Card
              key={item.id}
              title={item.title}
              content={item.content}
              id={item.id}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
