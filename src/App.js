import './App.css';
import React from "react";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import Clock from "./components/Clock";
import { nanoid } from 'nanoid';


function App() {
  const [form, SetForm] = useState({
    name: '',
    timezone: '',
  }); 

  const [currentTime, setCurrentTime] = useState([{
    name: '',
    destinationzoneOffSet: '',
    hours: '',
    minutes: '',
    seconds: '',
    key: ''
  }])

  let tick;

  useEffect(() => {
    // tick = setInterval(getDestinationZoneTime, 1000);
    // return () => {
    //   clearInterval(tick);     
    // }

    if (currentTime.length > 1) {
      tick = setInterval(getDestinationZoneTime(currentTime), 1000)
      return () => {
        clearInterval(tick);
      }
    }
  }, [currentTime]);

  const getDestinationZoneTime = (currentTime) => {
    let now = new Date();
    let nowoffset = now.getTimezoneOffset();
    let offset;
    let destinationTime;
    setCurrentTime((prevCurrentTime) => {
      let newtime = prevCurrentTime.map((obj) => {
        offset = (nowoffset + (obj.destinationzoneOffSet * 60)) * 60 * 1000;
        destinationTime = now.setTime(now.getTime() + offset);
        return {
          ...obj,
          hours: new Date(destinationTime).getHours(),
          minutes: new Date(destinationTime).getMinutes(),
          seconds: new Date(destinationTime).getSeconds(),
          key: obj.key
        }
      })
      return newtime
    })
  }
  // let offset = (nowoffset + (obj.destinationzoneOffSet * 60)) * 60 * 1000;
  // let destinationTime = now.setTime(now.getTime() + offset);
  // setCurrentTime((prevCurrentTime) => {

  //   // setTime(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  // }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    return SetForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    return updateStates()
  }

  const updateStates = () => {
    setCurrentTime((prevCurrentTime) => {
      return (
        [...prevCurrentTime, {
          name: form.name,
          destinationzoneOffSet: form.timezone,
          hours: '',
          minutes: '',
          seconds: '',
          key: nanoid()
        }])
    });
    SetForm((prevForm) => {
      return (
        {
          name: '',
          timezone: '',
          show: true,                   
        })
    });
  }

  function handleDelete(e, keyobj) {
    e.preventDefault();
    setCurrentTime((prevCurrentTime) => {
      return (prevCurrentTime.filter((obj) => obj.key !== keyobj)
      )
    })
  }
let k;
  return (
    //   <>
    //   {/* <Clock hours={currentTime.hours} minutes={currentTime.minutes} seconds={currentTime.seconds} /> */}
    //   </>
    // )
    <>
      <Form form={form} onChange={handleChange} onSubmit={handleSubmit} />
      <div className="clocks"> 
      {currentTime.map((obj) => {
        if (obj.key !== '') {
          k = obj.key;
          return (                       
              <Clock k={k} name={obj.name} hours={obj.hours} minutes={obj.minutes} seconds={obj.seconds} handleDelete={handleDelete}/>        
          )
        }
      })
      }
       </div>
    </>

  );

}

export default App;
