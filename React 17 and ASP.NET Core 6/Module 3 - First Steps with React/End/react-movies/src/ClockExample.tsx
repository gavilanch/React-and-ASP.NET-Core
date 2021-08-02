import { useState, useEffect } from "react";

export default function ClockExample(){
    const [myDate, myDateUpdate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      myDateUpdate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <h3>Example React</h3>
      <input />
      <div>{myDate.toString()}</div>
    </div>
  );
}