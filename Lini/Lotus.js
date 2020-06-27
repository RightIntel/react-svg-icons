function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniLotus({
  size,
  ...props
}) {
  let className = 'Component Lini LiniLotus';

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
    d: "M18.612 11.154a2.426 2.426 0 00-.551-.655c.706-.591 1.048-1.559.795-2.506s-1.035-1.615-1.943-1.773c.317-.865.129-1.876-.564-2.569s-1.702-.881-2.567-.565a2.431 2.431 0 00-.292-.805 2.42 2.42 0 00-1.482-1.137 2.444 2.444 0 00-2.507.796c-.591-.707-1.56-1.05-2.507-.796S5.379 2.179 5.221 3.087c-.865-.317-1.876-.129-2.569.564s-.881 1.702-.565 2.567c-.28.048-.552.146-.805.292-.565.326-.969.852-1.137 1.482S.063 9.28.389 9.844c.146.253.333.474.551.655-.706.591-1.048 1.559-.795 2.506s1.035 1.615 1.943 1.773a2.445 2.445 0 00.564 2.569 2.425 2.425 0 001.726.715c.292 0 .575-.051.841-.149.049.279.146.55.292.803a2.42 2.42 0 001.482 1.137 2.432 2.432 0 002.508-.795 2.452 2.452 0 002.506.795 2.445 2.445 0 001.773-1.943 2.433 2.433 0 002.569-.564 2.425 2.425 0 00.715-1.726c0-.292-.051-.575-.149-.841.279-.049.55-.146.803-.292.565-.326.969-.852 1.137-1.482s.082-1.288-.244-1.852zm-.722-2.902c.1.372.049.76-.144 1.094a1.429 1.429 0 01-.816.654h-2.957a4.49 4.49 0 00-.349-1.303l2.56-1.478a1.443 1.443 0 011.707 1.033zM9.5 14C7.57 14 6 12.43 6 10.5S7.57 7 9.5 7 13 8.57 13 10.5 11.43 14 9.5 14zm6.142-9.642c.547.547.562 1.429.042 1.994l-2.563 1.48a4.532 4.532 0 00-.953-.953l1.479-2.562a1.444 1.444 0 011.995.041zm-4.988-2.104c.333-.192.722-.244 1.094-.144s.683.338.875.671c.182.316.238.681.159 1.034l-1.479 2.561A4.45 4.45 0 0010 6.027V3.071c.108-.346.339-.635.654-.817zM7.252 2.11c.372-.1.76-.048 1.094.144.316.182.546.471.654.816v2.957a4.49 4.49 0 00-1.303.349l-1.478-2.56a1.443 1.443 0 011.033-1.707zM3.358 4.358a1.443 1.443 0 011.994-.042l1.48 2.563c-.363.268-.685.59-.953.953L3.317 6.353a1.443 1.443 0 01.041-1.994zM1.11 8.252c.1-.372.338-.683.671-.875a1.433 1.433 0 011.034-.159l2.561 1.479A4.45 4.45 0 005.027 10H2.071a1.432 1.432 0 01-.817-.654 1.433 1.433 0 01-.144-1.094zm0 4.496c-.1-.372-.048-.76.144-1.094.182-.316.471-.546.816-.654h2.957c.051.458.171.896.349 1.303l-2.56 1.478a1.443 1.443 0 01-1.707-1.033zm2.248 3.894a1.443 1.443 0 01-.042-1.994l2.563-1.479c.268.363.59.685.953.953l-1.479 2.562a1.443 1.443 0 01-1.994-.041zm4.988 2.104c-.333.192-.722.244-1.094.144s-.683-.338-.875-.671a1.433 1.433 0 01-.159-1.034l1.479-2.561A4.45 4.45 0 009 14.973v2.956a1.432 1.432 0 01-.654.817zm3.402.144c-.372.1-.76.049-1.094-.144A1.429 1.429 0 0110 17.93v-2.957a4.49 4.49 0 001.303-.349l1.478 2.56a1.443 1.443 0 01-1.033 1.707zm3.894-2.248a1.443 1.443 0 01-1.994.042l-1.479-2.563c.363-.268.685-.59.953-.953l2.562 1.479c.52.565.506 1.447-.041 1.995zm2.248-3.894c-.1.372-.338.683-.671.875a1.433 1.433 0 01-1.034.159l-2.561-1.479A4.45 4.45 0 0013.973 11h2.956c.346.108.635.339.817.654.192.333.244.722.144 1.094z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 13C8.122 13 7 11.878 7 10.5S8.122 8 9.5 8 12 9.122 12 10.5 10.878 13 9.5 13zm0-4C8.673 9 8 9.673 8 10.5S8.673 12 9.5 12s1.5-.673 1.5-1.5S10.327 9 9.5 9z"
  })));
}
LiniLotus.propTypes = {
  size: PropTypes.number.isRequired
};