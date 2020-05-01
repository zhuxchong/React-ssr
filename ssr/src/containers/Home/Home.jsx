import React from "react";
import { connect } from "react-redux";
import { getHomeList } from "../store/action";
class Home extends React.Component {
  componentDidMount() {
    if (this.props.getList) this.props.getList();
  }
  render() {
    const { name } = this.props;
    return (
      <div
        onClick={() => {
          alert("123");
        }}
      >
        welcome {name}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.constainerReducer.name
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getList() {
      dispatch(getHomeList());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
