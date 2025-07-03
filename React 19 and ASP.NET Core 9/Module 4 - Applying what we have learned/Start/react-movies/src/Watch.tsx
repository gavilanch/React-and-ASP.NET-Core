import { useState, useEffect } from "react";

function Watch() {
  
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, [])

  return (
    <>
      <h3>React example</h3>
      <input />
      <div className="my-class">{currentDate.toString()}</div>
    </>
  )
}

export default Watch
