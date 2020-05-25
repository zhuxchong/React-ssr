import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../store";
//import "./style.css";

const Header = props => {
  const { isLogin, handleLogin } = props;
  //console.log(isLogin);
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/content">Content</Link>
      </div>

      {isLogin ? (
        <React.Fragment>
          {" "}
          <div
            onClick={() => {
              handleLogin("logout");
            }}
          >
            Logout
          </div>
          <div>
            <Link to="/translation">translation</Link>
          </div>
        </React.Fragment>
      ) : (
        <div
          onClick={() => {
            handleLogin("login");
          }}
        >
          Login
        </div>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  //console.log(state);
  return { isLogin: state.componentReducer.isLogin };
};
const mapDispatch = dispatch => {
  return {
    handleLogin(login) {
      dispatch(actions.login(login));
    }
  };
};
export default connect(mapStateToProps, mapDispatch)(Header);
