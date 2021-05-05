import React from "react";
import { render } from "react-dom";
import * as Icons from "react-bootstrap-icons";

const Icon = props => {
  const { iconName, size, color } = props;
  const icon = React.createElement(Icons[iconName]);
  return (
    <div style={{ fontSize: size, color: color }}>{icon}</div>
  );
};