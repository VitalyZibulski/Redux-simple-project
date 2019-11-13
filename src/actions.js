import { createCourse } from "./api";
export const ADD_COURSE_BEGIN = "ADD_COURSE_BEGIN";
export const ADD_COURSE_SUCESS = "ADD_COURSE_SUCESS";
export const ADD_COURSE_ERROR = "ADD_COURSE_ERROR";

export const addCourse = name => {
  return dispatch => {
    dispatch({ type: ADD_COURSE_BEGIN });
    createCourse(name)
      .then(course => {
        dispatch({ type: ADD_COURSE_SUCESS, payload: course });
      })
      .catch(error => {
        dispatch({ type: ADD_COURSE_ERROR, payload: error });
      });
  };
};
