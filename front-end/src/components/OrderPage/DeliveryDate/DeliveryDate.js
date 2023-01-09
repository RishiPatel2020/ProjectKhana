import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
const DeliveryDate = ({ delivDate, setDelivDate }) => {
  const isSaturday = () => {
    return new Date().getDay() === 6;
  };

  const isSunday = () => {
    return new Date().getDay() === 0;
  };
  const [mins, setmins] = useState();
  useEffect(() => {
    // Have timer IF today == saturday
    if (isSaturday()) {
      const interval = setInterval(() => {
        setmins(new Date().getSeconds());
        console.log("In Deliv Date Component");
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  // 4 upcoming sundays
  const sundays = () => {
    const today = new Date();
    const ar = [];
    let dayToday = today.getDay();
    let diff = (7 - dayToday) % 7;
    // today = first sunday
    today.setDate(today.getDate() + diff);

    // saturday & after 11:59AM
    const saturdayCondition =
      isSaturday() &&
      new Date().toLocaleTimeString("en-US").split(" ")[1] === "PM";

    let numSundays;
    // if sunday OR (saturday AND time after 11:59 AM EST)
    if (isSunday() || saturdayCondition) {
      numSundays = 4;
      today.setDate(today.getDate() + 7);
    } else {
      numSundays = 3;
      ar.push("Sunday: " + today.toLocaleDateString());
      today.setDate(today.getDate() + 7);
    }

    for (let i = 0; i < numSundays; i++) {
      ar.push("Sunday: " + today.toLocaleDateString());
      today.setDate(today.getDate() + 7);
    }
    return ar;
  };


  
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          variant="dark"
          id="dropdown-basic"
          style={{ height: "50px", width: "161px" }}
        >
          <span className="text-primary">{delivDate}</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {sundays().map((item) => {
            return (
              <Dropdown.Item key = {item} onClick={() => setDelivDate(item)}>
                <span>{item}</span>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DeliveryDate;
