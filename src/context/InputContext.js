import { createContext, useReducer } from "react";

export const InputContext = createContext();

export const InputContextProvider = ({ children }) => {
  const INITIAL_STATE = {
    title: "",
    content: "",
    id: "",
    btnChange: false,
  };

  const InputReducer = (state, action) => {
    switch (action.type) {
      case "TITLE":
        return {
          ...state,
          title: action.payload,
        };
      case "CONTENT":
        return {
          ...state,
          content: action.payload,
        };
      case "UPDATE":
        return {
          title: action.payload.title,
          content: action.payload.content,
          id: action.payload.id,
          btnChange: true,
        };
      case "DONE":
        return {
          title: "",
          content: "",
          id: "",
          btnChange: false,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(InputReducer, INITIAL_STATE);

  return (
    <InputContext.Provider value={{ data: state, dispatch }}>
      {children}
    </InputContext.Provider>
  );
};
