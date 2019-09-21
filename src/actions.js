import C from "./constants";
import { createApolloFetch } from "apollo-fetch";

export const fetchQL = createApolloFetch({
  uri: "http://localhost:3000/graphql"
});

export const addError = message => ({
  type: C.ADD_ERROR,
  payload: message
});

export const clearError = index => ({
  type: C.CLEAR_ERROR,
  payload: index
});

export const startingRequest = index => ({
  type: C.BEGIN_FETCH_NOTES,
  payload: index
});

export const successRequest = payload => ({
  type: C.FETCH_NOTES_SUCCESS,
  payload: payload
});

export const failedRequest = index => ({
  type: C.FETCH_NOTES_FAILURE,
  payload: index
});

export const gettasks = () => {
  return dispatch => {
    return fetchQL({
      query: `
      query {
        tasks {
          _id
          title
          description
          date_created
          status
        }
      }`
    })
      .then(response => {
        dispatch(successRequest(response.data.tasks));
      })
      .catch(error => {
        dispatch(failedRequest(error));
        dispatch(addError(error));
      });
  };
};

export const addNote = payload => {
  return dispatch => {
    // dispatch(startingRequest());
    return fetchQL({
      query: `
        mutation {
            addTask(inputTask:{ title:"${payload.title}",  description:"${payload.description}", date_created:"${payload.date_created}", status:${payload.status === "true" ? true : false}}) {
                _id
                title
                description
                date_created
                status
            }
        }`
    })
      .then(response => {
        dispatch(gettasks());
      })
      .catch(error => {
        dispatch(addError(error));
      });
  };
};

export const removeNote = payload => {
  return dispatch => {
    dispatch(startingRequest());
    return fetchQL({
      query: `
          mutation {
                removeTask(id: "${payload}")
          }`
    })
      .then(response => {
        dispatch(gettasks());
      })
      .catch(error => {
        dispatch(addError(error));
      });
  };
};

export const markNote = payload => {
  return dispatch => {
    return fetchQL({
      query: `
          mutation {
            markNote(id:"${payload.id}", done: ${payload.status}) {
                _id
                title
                description
                date_created
                status
            }
          }`
    })
      .then(response => {
        dispatch(gettasks());
      })
      .catch(error => {
        dispatch(addError(error));
      });
  };
};
export const editNote = payload => {
  return dispatch => {
    return fetchQL({
      query: `
        mutation {
          editTask(id:"${payload.id}" , inputTask:{ title:"${
        payload.inputTask.title
      }",  description:"${payload.inputTask.description}", date_created:"${
        payload.inputTask.date_created
      }", status:${payload.inputTask.status === "true" ? true : false}}) {
            _id
            title
            description
            date_created
            status
        }
        }`
    })
      .then(response => {
        dispatch(gettasks());
        // dispatch(successRequest(response.data.tasks));
      })
      .catch(error => {
        dispatch(addError(error));
      });
  };
};
