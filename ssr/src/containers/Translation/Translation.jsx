import React from "react";
import { connect } from "react-redux";
import { getTranslation } from "../store/action";
class Translation extends React.Component {
  componentDidMount() {
    const { getTranslation, isLogin } = this.props;
    if (getTranslation && isLogin) getTranslation();
  }
  render() {
    const { translation } = this.props;

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
export default connect(mapStateToProps, mapDispatchToProps)(Translation);
