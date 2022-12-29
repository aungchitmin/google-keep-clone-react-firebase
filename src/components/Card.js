import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { InputContext } from "../context/InputContext";

const Card = () => {
  const [show, setShow] = useState(false);
  const { dispatch } = useContext(InputContext);
  let title = "Outsanding Title"
  let content = "A little longer text for testing yeahhhh"


  const updateText = () => {
    console.log("update");
    dispatch({ type: "UPDATE", payload: {title, content} });
  };

  const deleteText = () => {
    console.log("delete");
  };

  return (
    <div
      className="card border container bg-slate-400 p-2 relative"
      onClick={() => setShow(!show)}
    >
      <div className="card-title p-1 font-bold text-lg">{`${title}`}</div>
      <div className="card-content p-1 font-normal text-base">
        {`${content}`}
      </div>
      {show && (
        <div className="buttons-group absolute top-1 right-1 z-40">
          <button
            className="p-2 bg-green-400 rounded-xl mr-2"
            onClick={updateText}
          >
            U
          </button>
          <button className="p-2 rounded-lg bg-red-400" onClick={deleteText}>
            D
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
