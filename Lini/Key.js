import React from 'react';
import PropTypes from 'prop-types';
export default function LiniKey({
  size,
  ...props
}) {
  let className = 'Component Lini LiniKey';

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
    d: "M15 0a5 5 0 00-4.087 7.88L.147 18.646a.5.5 0 00.708.707l1.146-1.146 1.646 1.646a.498.498 0 00.708 0 .5.5 0 000-.707L2.709 17.5l.793-.793 1.646 1.646a.498.498 0 00.708 0 .5.5 0 000-.707L4.21 16l7.363-7.363A5 5 0 1015.003 0zm2.828 7.828C17.072 8.584 16.068 9 15 9s-2.073-.416-2.828-1.172C11.416 7.072 11 6.068 11 5s.416-2.073 1.172-2.828C12.928 1.416 13.932 1 15 1s2.073.416 2.828 1.172C18.584 2.928 19 3.932 19 5s-.416 2.073-1.172 2.828z"
  })));
}
LiniKey.propTypes = {
  size: PropTypes.number.isRequired
};