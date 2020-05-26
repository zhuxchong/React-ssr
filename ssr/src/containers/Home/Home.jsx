import React from "react";
import { connect } from "react-redux";
import { getHomeList } from "../store/action";
import style from "./style.css";
import importStyle from "../../HOC/importStyle";
import { Helmet } from "react-helmet";
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (this.props.getList) this.props.getList();
  }
  render() {
    const { list, name } = this.props;

    return (
      <div className={style.testTest}>
        <Helmet>
          <title>HAHHAHA</title>
          <meta name="description" content="you are sb"></meta>
        </Helmet>
        {(list || []).map((res, index) => (
          <div key={index}>{res.title}</div>
        ))}
        <div>welcome{name}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.constainerReducer.name,
    list: state.constainerReducer.newList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getList() {
      dispatch(getHomeList());
    }
  };
};

const ConnectHome = connect(mapStateToProps, mapDispatchToProps)(Home);
ConnectHome.loadData = store => {
  return store.dispatch(getHomeList());
};
export default ConnectHome;
//importStyle(style, ConnectHome);
