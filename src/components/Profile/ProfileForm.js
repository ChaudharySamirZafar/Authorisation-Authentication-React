import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/auth-context";
import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const latestPasswordValue = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const latestPassword = latestPasswordValue.current.value;

    // Add Validation

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDxuL4qJij-ciV837-YZUmgSPd_ghRwnaY",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: latestPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      if (response.ok) {
        history.replace("/");
      } else {
        return response.json();
      }
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          ref={latestPasswordValue}
          minLength={7}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
