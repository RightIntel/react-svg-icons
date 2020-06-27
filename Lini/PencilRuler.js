function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPencilRuler({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPencilRuler';

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
    d: "M19.354 18.146L12.208 11l6.439-6.439a1.501 1.501 0 000-2.121l-1.086-1.086c-.283-.283-.659-.438-1.061-.438s-.778.156-1.061.438L9 7.793 1.854.647C1.529.322 1.073.225.664.394S.001.955.001 1.416v17.085c0 .827.673 1.5 1.5 1.5h17.085c.461 0 .852-.254 1.022-.663s.072-.865-.253-1.19zM6.5 14H9c.133 0 .26-.053.354-.146l.146-.146 2.293 2.293H4.5a.5.5 0 01-.5-.5V8.208l2.293 2.293-.146.146a.5.5 0 00-.146.354v2.5a.5.5 0 00.5.5zm2.293-1H7v-1.793l8-8L16.793 5l-8 8zM16.5 1.915a.5.5 0 01.354.145l1.086 1.086a.5.5 0 010 .707l-.439.439-1.793-1.793.439-.439a.495.495 0 01.354-.145zm2.183 17.039c-.016.038-.062.046-.098.046H1.5a.5.5 0 01-.5-.5V17h.5a.5.5 0 000-1H1v-2h.5a.5.5 0 000-1H1v-2h.5a.5.5 0 000-1H1V8h.5a.5.5 0 000-1H1V1.415c0-.036.008-.082.046-.098s.075.011.1.036l7.146 7.146-1.293 1.293L4.56 7.353c-.476-.476-.889-.378-1.044-.314S3 7.326 3 7.999v7.5c0 .827.673 1.5 1.5 1.5H12c.674 0 .896-.361.96-.516s.162-.568-.314-1.044L10.207 13l1.293-1.293 7.146 7.146c.025.025.052.063.036.1z"
  })));
}
LiniPencilRuler.propTypes = {
  size: PropTypes.number.isRequired
};