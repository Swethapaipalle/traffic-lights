import React, { useState, useEffect } from "react";

// USE ME TO FETCH DATA
const FETCH_URL = "./data.json";

export default function App() {
  const [data, setData] = useState({});
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const fetchData = fetch(FETCH_URL).then((response) => response.json());

    const result = Promise.all([fetchData]).then((res) => {
      console.log("res", res);
      setData(res[0]);
    });
  }, []);
  useEffect(() => {
    const timerOut = setTimeout(() => {
      setTimer((timer + 1) % 3);
    }, data?.colors?.intervals?.na);
    return () => {
      clearTimeout(timerOut);
    };
  });
const color=(color)=>{
if(color==="red"){
  return "red"
}else if(color==="green"){
  return "green"
}else return "yellow"

}
  return (
    <div className="App">
      <h1> {data.appTitle}</h1>

      <div style={{  width: "150px",height: "500px", display: "flex", flexDirection: "column",
      justifyContent: "space-around",alignItems: "center",margin: '30px',backgroundColor: data?.colors?.container?.na }}>
        {data?.colors?.bulbs?.na.map((item, index) => {
          console.log("index", index);
          return (
            <div style={{borderRadius:"50%", width:"105px", height:"130px",margin: "10px", 
            backgroundColor:color(item), opacity: timer === index ? 1 : 0.4 }}>
              {/* {item} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
