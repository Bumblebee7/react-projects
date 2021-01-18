import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [displayInfo, setDisplayInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          type="button"
          className="btn"
          onClick={() =>
            setDisplayInfo((displayInfo) => {
              return !displayInfo;
            })
          }
        >
          {displayInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {displayInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
