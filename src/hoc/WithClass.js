import React from "react";

const withClass = (WrapperdComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrapperdComponent />
    </div>
  );
};

export default withClass;
