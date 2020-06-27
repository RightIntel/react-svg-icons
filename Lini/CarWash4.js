function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCarWash4({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCarWash4';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.492 3.009c-.83 0-1.504-.675-1.504-1.504S15.663.001 16.492.001s1.504.675 1.504 1.504-.675 1.504-1.504 1.504zm0-2.009a.504.504 0 100 1.009.504.504 0 000-1.009zM13.498 2a.5.5 0 110-1 .5.5 0 010 1zM1.5 5.009a.5.5 0 110-.999.5.5 0 010 .999zM2.5 3C1.673 3 1 2.327 1 1.5S1.673 0 2.5 0 4 .673 4 1.5 3.327 3 2.5 3zm0-2a.5.5 0 100 1 .5.5 0 000-1zM5.5 16c-.827 0-1.5-.673-1.5-1.5S4.673 13 5.5 13s1.5.673 1.5 1.5S6.327 16 5.5 16zm0-2a.5.5 0 100 1 .5.5 0 000-1zM14.5 16c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM.5 17c-.132 0-.261-.053-.353-.147S0 16.631 0 16.5a.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5zM19.5 16c-.132 0-.261-.053-.353-.147S19 15.631 19 15.5a.498.498 0 01.5-.5.498.498 0 01.5.5.5.5 0 01-.5.5zM19.089 9.845A3.508 3.508 0 0020 7.492a3.504 3.504 0 00-4.427-3.376A2.488 2.488 0 0013.493 3a2.5 2.5 0 00-2.168 1.261.5.5 0 10.869.495 1.492 1.492 0 012.441-.226 2.471 2.471 0 00-.085.055.5.5 0 00.558.83A2.503 2.503 0 0119 7.492c0 .89-.479 1.72-1.25 2.166a.499.499 0 10.501.866l.059-.036c.437.377.69.923.69 1.512 0 .635-.292 1.218-.8 1.6a.5.5 0 10.601.8 2.978 2.978 0 001.2-2.4c0-.827-.333-1.596-.911-2.155zM8.939 4.396A3.01 3.01 0 006 2a3.004 3.004 0 00-2.997 3.126A4.008 4.008 0 000 9c0 .868.286 1.712.801 2.4C.309 11.77 0 12.358 0 13c0 .846.536 1.604 1.333 1.886a.499.499 0 10.333-.942 1.002 1.002 0 01.07-1.908.5.5 0 00.211-.847 2.972 2.972 0 01-.948-2.188c0-1.367.925-2.546 2.21-2.895l.039.095a.5.5 0 10.916-.4 2.002 2.002 0 011.834-2.8c.946 0 1.77.671 1.959 1.596a.5.5 0 00.98-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.958 11.907c-.13-.792-.553-3.214-1.011-4.131-.305-.61-1.088-1.077-2.326-1.386C12.615 6.139 11.329 6 10 6s-2.615.138-3.621.39c-1.238.31-2.021.776-2.326 1.386-.458.916-.881 3.339-1.011 4.131C2.343 12.386 2 13.079 2 14v2.5c0 .652.418 1.208 1 1.414V19c0 .551.449 1 1 1h1c.551 0 1-.449 1-1v-1h8v1c0 .551.449 1 1 1h1c.551 0 1-.449 1-1v-1.086c.582-.206 1-.762 1-1.414V14c0-.921-.343-1.614-1.042-2.093zM4.947 8.224C5.244 7.631 7.115 7 10 7s4.756.63 5.053 1.224c.287.575.606 2.096.804 3.183a5.143 5.143 0 00-.303-.08 8.855 8.855 0 00-.863-.156l-2.899-2.077a.5.5 0 00-.583.813l1.566 1.122c-.85-.028-1.782-.028-2.775-.028h-.349L6.777 9.085a.5.5 0 10-.554.832l1.644 1.096c-1.341.024-2.507.097-3.42.314a6.057 6.057 0 00-.303.081c.198-1.087.516-2.608.804-3.183zM5 19H4v-1h1v1zm11 0h-1v-1h1v1zm1-2.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V14c0-.924.486-1.417 1.678-1.701C5.933 12 7.818 12 10 12s4.066 0 5.322.299C16.514 12.583 17 13.076 17 14v2.5zM17.496 7a.5.5 0 110-1 .5.5 0 010 1zM6.5 4.992c-.132 0-.261-.053-.353-.147S6 4.623 6 4.492a.5.5 0 11.5.5z"
  })));
}
LiniCarWash4.propTypes = {
  size: PropTypes.number.isRequired
};