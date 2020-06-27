import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSausage({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSausage';

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
    d: "M17.138 3.058c.297-.605 1.027-1.516 1.716-2.205a.499.499 0 00-.354-.854h-4a.501.501 0 00-.354.854c.688.689 1.419 1.6 1.716 2.205A3.506 3.506 0 0013 6.5c0 3.584-2.916 6.5-6.5 6.5a3.507 3.507 0 00-3.442 2.862c-.605-.297-1.516-1.027-2.205-1.716a.499.499 0 00-.854.354v4a.501.501 0 00.854.354c.689-.688 1.6-1.419 2.205-1.716A3.506 3.506 0 006.5 20a13.45 13.45 0 009.546-3.954A13.45 13.45 0 0020 6.5a3.507 3.507 0 00-2.862-3.442zM17.367 1c-.084.099-.171.204-.258.313a9.181 9.181 0 00-.61.846 9.181 9.181 0 00-.61-.846A16.082 16.082 0 0015.631 1h1.735zM1.313 17.11c-.109.087-.213.174-.313.258v-1.735c.099.084.204.171.313.258.305.244.586.447.846.61-.26.163-.541.366-.846.61zM6.5 19C5.122 19 4 17.878 4 16.5S5.122 14 6.5 14c.753 0 1.489-.11 2.19-.323l.337.985a.5.5 0 10.946-.324l-.348-1.016a7.48 7.48 0 001.813-1.177l.709.709a.5.5 0 10.707-.707l-.709-.709a7.48 7.48 0 001.177-1.813l1.016.348a.5.5 0 00.324-.946l-.985-.337A7.523 7.523 0 0014 6.5C14 5.122 15.122 4 16.5 4S19 5.122 19 6.5C19 13.393 13.393 19 6.5 19z"
  })));
}
LiniSausage.propTypes = {
  size: PropTypes.number.isRequired
};