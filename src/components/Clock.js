import React, { useEffect } from "react";


export default function Clock(props) {
    const { hours, minutes, seconds, getDestinationZoneTime } = props;
    
    useEffect(() => {
        let tick = setInterval(getDestinationZoneTime, 1000);
        tick(); 
        return () => {
            clearInterval(tick);
        }
    });    
    
    

    return (
        <div>
            {hours}:{minutes}:{seconds}
        </div>
    )
}