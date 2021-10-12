import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    
    const time = setInterval(() => {
      setTime(new Date());
    }, 1000);    

    return function cleanup(){
      clearInterval(time)
    }
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
