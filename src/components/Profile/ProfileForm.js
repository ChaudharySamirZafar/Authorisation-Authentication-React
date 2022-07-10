import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/auth-context";
import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const latestPasswordValue = useRef();

  return (
    <React.Fragment>
      <h1>Your access token</h1>
      <p>{authCtx.token}</p>
    </React.Fragment>
  );
};

export default ProfileForm;
