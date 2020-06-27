import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSyringe({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSyringe';

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
    d: "M18.854 5.646l-.5-.5-4-4-.5-.5a.5.5 0 00-.707.707l.146.146L11 3.792l-.146-.146-1.5-1.5a.5.5 0 00-.707.707l1.146 1.146-7.646 7.646a.503.503 0 00-.137.452c.019.097.44 2.157 1.314 3.371L.647 18.145a.5.5 0 00.708.707l2.677-2.677c1.215.874 3.274 1.295 3.371 1.314a.505.505 0 00.452-.136l7.647-7.646 1.646 1.646a.498.498 0 00.708 0 .5.5 0 000-.707l-2-2-.146-.146 2.293-2.293.146.146a.498.498 0 00.708 0 .5.5 0 000-.707zM7.34 16.453c-.793-.187-2.335-.655-2.986-1.307-.65-.65-1.118-2.193-1.306-2.987l7.453-7.453 4.293 4.293-7.453 7.453zM15 7.793L11.707 4.5 14 2.207 17.293 5.5 15 7.793z"
  })));
}
LiniSyringe.propTypes = {
  size: PropTypes.number.isRequired
};