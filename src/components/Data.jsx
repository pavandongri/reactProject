import React from "react";
import Set from "./Set"
;
const Data = (props) => {
    return <>
        {props.rides.map((ride,index ) => {
          return (
            <>
            
            <Set
              key ={index}
              rideid={ride.id}
              origin_station={ride.origin_station_code}
              station_path={ride.station_path}
              date={ride.date}
              distance={ride.distance}
              imageurl = {ride.map_url}
              name = {ride.city}

            /> 
            </>
            
          );
        })}
    </>
}

export default Data