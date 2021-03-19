import { createStore } from 'redux';

const initialState = {
    searchedJobs: [{
      company: 'Random',
      company_logo: "",
      company_url: "",
      created_at: "",
      description: "",
      how_to_apply: "",
      id: "",
      location,
      title: "",
      type: "",
      url: ""
    }],
    savedJobs: [{
        _id: '',
        title: '',
        company: '',
        description: '',
        location: '',
        created_at: '',
        date_applied: '',
        status: '',
        notes: ''
    }]
  }
  
// Use the initialState as a default value
function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
      case 'ADD_SEARCHED_JOB': {
          return {
              ...state, searchedJobs: [...state.searchedJobs, ...action.payload]
          }
      }
      case 'ADD_SAVED_JOB': {
          return {
              ...state, savedJobs: [...state.savedJobs, action.payload]
          }
      }
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }

  const store = createStore(appReducer);
  export default store;
