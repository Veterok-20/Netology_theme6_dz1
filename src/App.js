import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import Clock from "./components/Clock";

function App() {
  const [form, SetForm] = useState({
    name: '',
    timezone: '',
  });
  const [time, SetTime] = useState({
    hours: '',
    minutes: '',
    seconds: ''
  })

  const getDestinationZoneTime = (destinationOffset) => {
    const now = new Date();
    var localOffset = -(now.getTimezoneOffset() / 60);
    // let Offset = destinationOffset - localOffset;
    let Offset = form.timezone - localOffset;
    // let Offset = -4 - localOffset;
    let destinationTime = new Date(new Date().getTime() + Offset * 3600 * 1000);
    SetTime({
      hours: destinationTime.getHours(),
      minutes: destinationTime.getMinutes(),
      seconds: destinationTime.getSeconds()
    });
    // return destinationTime;
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    return SetForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    let destinationOffset = form.timezone;
    // let destinationTime = getDestinationZoneTime(destinationOffset);
    // SetTime({
    //   hours: destinationTime.getHours(),
    //   minutes: destinationTime.getMinutes(),
    //   seconds: destinationTime.getSeconds()
    // });
  }
 
if (time.hours !== "" && time.minutes !== "" && time.seconds !== "") {
  return (
    <>
      <Form onChange={handleChange} onSubmit={handleSubmit} />
      <Clock getDestinationZoneTime={getDestinationZoneTime} hours={time.hours} minutes={time.minutes} seconds={time.seconds} />
    </>
  );
}
else {
  return <Form onChange={handleChange} onSubmit={handleSubmit}/>
}
}

export default App;
