import axios from "axios";
// import { useJwt } from 'react-jwt';
// import {useNavigate} from 'react-router-dom'

export const signup = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "SIGNUP_REQUEST",
    });

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_KEY}/user/signup`,
      { email, password },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    localStorage.setItem("token", data?.token);
    dispatch({
      type: "SIGNUP_SUCCESS",
      payload: data.newUser,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: "SIGNUP_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_KEY}/user/login`,
      { email, password },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    localStorage.setItem("token", data?.token);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: "SIGNUP_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOAD_USER_REQUEST",
    });
    const token = localStorage.getItem("token");
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_KEY}/user/me`,
      { token: token },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    dispatch({
      type: "LOAD_USER_SUCCESS",
      payload: data.user,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: "LOAD_USER_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT_REQUEST",
    });
    localStorage.setItem("token", null);
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: "LOGOUT_FAILURE",
      payload: "Please Login first",
    });
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({
      type: "FORGOT_REQUEST",
    });

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_KEY}/user/forgot`,
      { email },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    dispatch({
      type: "FORGOT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: "FORGOT_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const resetPassword = (resetToken, newPassword) => async (dispatch) => {
  try {
    dispatch({
      type: "RESET_REQUEST",
    });

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_KEY}/user/reset`,
      { resetToken, password: newPassword },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    dispatch({
        type:"RESET_SUCCESS",
        action:data.message
    })
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: "RESET_FAILURE",
      payload: error.response.data.message,
    });
  }
};
