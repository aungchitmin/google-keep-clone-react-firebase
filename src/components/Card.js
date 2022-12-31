import React from "react";
import { useState, useContext } from "react";

import { InputContext } from "../context/InputContext";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Card = ({ title, content, id }) => {
  const [show, setShow] = useState(false);
  const { dispatch } = useContext(InputContext);

  const updateText = () => {
    // console.log("update");
    dispatch({ type: "UPDATE", payload: { title, content, id } });
  };

  const deleteText = async () => {
    await deleteDoc(doc(db, "notes", id));
    // console.log("delete");
  };

  return (
    <div
      className="card  container bg-slate-400 p-2 relative rounded-md"
      onClick={() => setShow(!show)}
    >
      <div className="card-title p-1 font-bold text-lg text-gray-900">{`${title}`}</div>
      <div className="card-content p-1 font-normal text-base text-gray-800">
        {`${content}`}
      </div>
      {show && (
        <div className="buttons-group absolute top-1 right-1 z-40">
          <button
            className="p-2 bg-white rounded-xl mr-2"
            onClick={updateText}
          >
            <FontAwesomeIcon icon={faEdit}/>
          </button>
          <button className="p-2 rounded-lg bg-red-300" onClick={deleteText}>
            
            <FontAwesomeIcon icon={faTrashCan}/>
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
