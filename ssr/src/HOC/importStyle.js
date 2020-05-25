import React from "react";
export default (style, DecoratedComponent) => {
  return class ImportStyle extends React.Component {
    constructor(props) {
      super(props);

      if (props.staticContext) {
        props.staticContext.css.push(style._getCss());
      }
      // console.log(props);
      this.returnProps = { ...props, test: 123 };
    }
    render() {
      return <DecoratedComponent {...this.return} />;
    }
  };
};
