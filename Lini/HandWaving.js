import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHandWaving({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHandWaving';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zM10.499 20a.5.5 0 01-.497-.45l-.491-4.908-1.459-2.918a.498.498 0 01-.043-.322l.934-4.672-1.221-.814a.504.504 0 01-.147-.151l-2.5-4a.5.5 0 01.848-.53l2.443 3.909 1.41.94a.498.498 0 01.213.514l-.966 4.832 1.423 2.847a.498.498 0 01.05.174l.5 5a.5.5 0 01-.448.547c-.017.002-.034.002-.05.002zM5.5 20a.5.5 0 01-.469-.676l1.49-3.973.493-1.972a.5.5 0 01.97.242l-.5 2c-.005.018-.01.037-.017.054l-1.5 4a.5.5 0 01-.468.325zM13.5 13a.5.5 0 01-.46-.303l-1.482-3.458-.975-1.462a.5.5 0 11.832-.554l1 1.5a.478.478 0 01.044.08l1.5 3.5a.5.5 0 01-.46.698z"
  })));
}
LiniHandWaving.propTypes = {
  size: PropTypes.number.isRequired
};