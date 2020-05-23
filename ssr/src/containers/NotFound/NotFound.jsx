import React from "react";
const NotFound = props => {
  if (props.staticContext) props.staticContext.notFound = true;
  return <div>404 Not Found</div>;
};
export default NotFound;
