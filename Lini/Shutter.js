import React from 'react';
import PropTypes from 'prop-types';
export default function LiniShutter({
  size,
  ...props
}) {
  let className = 'Component Lini LiniShutter';

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
    d: "M17.071 2.929C15.182 1.04 12.671 0 10 0S4.818 1.04 2.929 2.929C1.04 4.818 0 7.329 0 10s1.04 5.182 2.929 7.071C4.818 18.96 7.329 20 10 20s5.182-1.04 7.071-2.929C18.96 15.182 20 12.671 20 10s-1.04-5.182-2.929-7.071zM1 10c0-1.004.165-1.97.47-2.873l5.701 5.701a.38.38 0 00.037.033c.048.047.098.093.149.138H1.514a8.956 8.956 0 01-.515-3zm9 3c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm2.791-5.862A4.83 4.83 0 0012.643 7h5.843c.333.939.515 1.948.515 3 0 1.004-.165 1.97-.47 2.873L12.83 7.172l-.037-.034zM18.061 6H10a4.18 4.18 0 00-.251.008l4.129-4.129A9.059 9.059 0 0118.061 6zm-5.188-4.53L7.172 7.171l-.032.036a3.917 3.917 0 00-.139.15V1.514a8.96 8.96 0 013-.515c1.004 0 1.97.165 2.873.47zM6 1.939v8.062c0 .084.003.167.008.25L1.879 6.122A9.059 9.059 0 016 1.939zM1.939 14h8.063c.084 0 .167-.003.249-.008l-4.129 4.129A9.059 9.059 0 011.939 14zm5.188 4.53l5.701-5.701.034-.038a4.83 4.83 0 00.138-.148v5.843a8.956 8.956 0 01-3 .515 8.961 8.961 0 01-2.873-.47zM14 18.061V10v-.002c0-.083-.003-.166-.008-.248l4.129 4.129A9.059 9.059 0 0114 18.062z"
  })));
}
LiniShutter.propTypes = {
  size: PropTypes.number.isRequired
};