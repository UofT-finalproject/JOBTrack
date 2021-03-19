import React, { createContext, useReducer, useContext } from "react";
import {
    SAVE_SEARCH,
    CLEAR_SEARCH,
    ADD_JOB,
    UPDATE_JOB,
    UPDATE_JOBS,
    REMOVE_JOB,
    LOADING,
  } from "./actions";

// Create Global State Redux Store to keep states to be used by components
const StoreContext = createContext();
const { Provider } = StoreContext;
// Define reducer action cases
const reducer = (state, action) => {
  console.log(state, action);
    switch (action.type) {
      case SAVE_SEARCH:
        return { ...state,
          searchedJobs: action.searchedJobs,
          loading: false
        };
  
      case CLEAR_SEARCH :
        return { ...state,
          searchedJobs: [],
          loading: false
        };
  
      case UPDATE_JOBS :
        return {
          ...state, 
          savedJobs: action.savedJobs,
          loading: false
        };
  
      case ADD_JOB :
        return { 
          ...state, 
          savedJobs: [action.jobToSave, ...state.savedJobs],
          loading: false
        };

      case REMOVE_JOB :
        return { 
          ...state, 
          savedJobs: state.savedJobs.filter(job => job._id !== action.id),
          loading: false
        };
  
      case LOADING :
        return { ...state, loading: true};
      
    default:
      return state;
    }
  };
  
  // Define Store Provider properties
  const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        search: '',
        jobToSave: '',
        searchedJobs: [],
        savedJobs: [],
        loading: false
    });
  
    return <Provider value={[state, dispatch]} {...props}/>;
  };
  
  const useStoreContext = () => useContext(StoreContext);
  
  export { StoreProvider, useStoreContext };
  