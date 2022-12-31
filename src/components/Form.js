import React from "react";
import firebaseLogo from "../imgs/firebase-logo.png";
import googleKeepLogo from "../imgs/keep-logo.png";
import {
  serverTimestamp,
  addDoc,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useRef } from "react";
import { db } from "../firebase";
import { useContext } from "react";
import { InputContext } from "../context/InputContext";
import { useEffect } from "react";

const Form = () => {
  const { data, dispatch } = useContext(InputContext);
  const titleRef = useRef(null);
  const textAreaRef = useRef(null);
  const scrollRef = useRef()

  const handleTitleChange = (e) => {
    dispatch({ type: "TITLE", payload: e.target.value });
  };

  const handleContentChange = (e) => {
    dispatch({ type: "CONTENT", payload: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const titleValue = titleRef.current.value;
    const textValue = textAreaRef.current.value;

    try {
      //if btn is Add
      if (!data.btnChange) {
        await addDoc(collection(db, "notes"), {
          title: titleValue,
          content: textValue,
          timestamp: serverTimestamp(),
        });
      } else {
        //if btn is update
        const noteRef = doc(db, "notes", data.id);

        await updateDoc(noteRef, {
          title: titleValue,
          content: textValue,
          timestamp: serverTimestamp(),
        });
      }
      dispatch({ type: "DONE" });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => (
    scrollRef.current?.scrollIntoView({behavior: "smooth"})
  ),[data])

  return (
    <div className="form-container container mx-auto "  ref={scrollRef}>
      <div className="logos flex items-center justify-evenly border mx-5 mt-5 bg-slate-300">
        <div className="logo-1 w-8 p-1 m-1">
          <img src={firebaseLogo} alt="" className="object-cover" />
        </div>
        <div className="plus-sign text-xl">
          <span>+</span>
        </div>
        <div className="logo-2 w-10 p-1 m-1">
          <img src={googleKeepLogo} alt="" className="object-cover" />
        </div>
      </div>

      <div className="note-container container mt-8 mx-auto w-4/5 bg-slate-500 relative rounded-lg">
        <form className="form mx-0 flex flex-col items-center justify-center">
          <div className="m-1 mt-2 w-11/12">
            <input
              type="text"
              placeholder="Title"
              className="p-2 my-1 outline-none font-bold text-lg w-full rounded-md"
              ref={titleRef}
              value={data.title}
              onChange={(e) => handleTitleChange(e)}
            />
          </div>
          <div className="w-11/12">
            <textarea
              placeholder="Take a note..."
              className="p-2 my-1 outline-none h-24 font-normal text-base w-full rounded-md"
              ref={textAreaRef}
              value={data.content}
              onChange={(e) => handleContentChange(e)}
            ></textarea>
            <span
              className="absolute bg-green-300 rounded-lg p-2 -bottom-4 right-2 cursor-pointer font-normal"
              onClick={(e) => handleSubmit(e)}
            >
              {data.btnChange ? "Update" : "Add"}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
