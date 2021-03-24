import React, { createContext, useReducer, useContext } from "react";
import {
    SAVE_SEARCH,
    CLEAR_SEARCH,
    ADD_JOB,
    UPDATE_JOB,
    UPDATE_JOBS,
    FILTER_JOBS,
    REMOVE_JOB,
    LOADING,
    OPEN_MODAL,
    SET_CURRENT_JOB,
    LOADING_DONE,
    USER_AUTHENTICATED
  } from "./actions";

// Create Global State Redux Store to keep states to be used by components
const StoreContext = createContext();
const { Provider } = StoreContext;
// Define reducer action cases
const reducer = (state, action) => {
    // console.log(state, action)
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
  
      case FILTER_JOBS :
        return {
          ...state, 
          sortedFilteredJobs: action.sortedFilteredJobs,
          loading: false
        };
  
      case ADD_JOB :
        return { 
          ...state, 
          savedJobs: [action.jobToSave, ...state.savedJobs],
          loading: false
        };

      case UPDATE_JOB :
        return { 
          ...state, 
          savedJobs: [action.updatedJob, ...state.savedJobs.filter(job => job._id !== action.updatedJob._id)],
          sortedFilteredJobs: [action.updatedJob, ...state.sortedFilteredJobs.filter(job => job._id !== action.updatedJob._id)],
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

      case LOADING_DONE :
        return { ...state, loading: false};

      case OPEN_MODAL :
        return { ...state, modal: action.modal, jobId: action.jobId};

      case SET_CURRENT_JOB :
        return { ...state, currentJob: action.currentJob };

      case USER_AUTHENTICATED :
        return { ...state, 
          isAuthenticated: true,
          user: action.user,
          loading: false
        };
      
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
        loading: false,
        modal: false,
        currentJob: {},
        sortedFilteredJobs: [],
        isAuthenticated: '',
        user: {}
    });
  
    return <Provider value={[state, dispatch]} {...props}/>;
  };
  
  const useStoreContext = () => useContext(StoreContext);
  
  export { StoreProvider, useStoreContext };
  