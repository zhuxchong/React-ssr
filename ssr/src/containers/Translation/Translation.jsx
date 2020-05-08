import React from "react";
import { connect } from "react-redux";
import { getTranslation } from "../store/action";
import { withRouter, Redirect } from "react-router-dom";
class Translation extends React.Component {
  constructor(props) {
    super(props);
    const { isLogin } = props;
    if (!isLogin) props.history.push("/");
  }
  componentDidMount() {
    const { getTranslation, isLogin } = this.props;
    // if (!isLogin) this.props.history.push("/");
    if (getTranslation && isLogin) getTranslation();
  }
  render() {
    const { translation, isLogin } = this.props;

    return (
      <div>
        {(translation || []).map((res, index) => (
          <div key={index}>{res.title}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.componentReducer.isLogin,
    translation: state.constainerReducer.translation
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getTranslation() {
      dispatch(getTranslation());
    }
  };
};
Translation.loadData = store => {
  return store.dispatch(getTranslation());
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Translation));
