import { useState } from "react";

function ToggleCard() {
  const [name, setName] = useState("Deji");

  const toggleName = () => {
    setName((prevName) => (prevName === "Deji" ? "Catherine" : "Deji"));

    // const toggleName = () => {
    //     setName((prevName) => {
    //       if (prevName === "Deji") {
    //         return "Catherine";
    //       } else {
    //         return "Deji";
    //       }
    //     });
    //   };
      
  };

  return (
    <div>
      <h2>Name: {name}</h2>
      <button onClick={toggleName}>Toggle Name</button>
    </div>
  );
}

export default ToggleCard;
