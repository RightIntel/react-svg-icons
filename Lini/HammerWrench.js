function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHammerWrench({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHammerWrench';

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
    d: "M18.596 14.457l-4.535-4.122.53-.59a4.004 4.004 0 004.961-5.584.498.498 0 00-.797-.123L16.793 6H16v-.793l1.962-1.962a.5.5 0 00-.123-.797 4.004 4.004 0 00-5.584 4.961l-.71.639-2.468-2.244a.45.45 0 01-.015-.657l2.293-2.293A.499.499 0 0011.001 2c-.041 0-1.027.001-2.092.063-2.034.12-2.53.351-2.762.583l-3.5 3.5a.5.5 0 00-.146.354V7h-.5a.504.504 0 00-.354.146l-1 1a.5.5 0 000 .707l2 2a.5.5 0 00.707 0l1-1a.5.5 0 00.146-.354v-.5H5c.133 0 .26-.053.354-.146l.793-.793a.452.452 0 01.321-.136c.127 0 .246.054.335.151l2.117 2.329-4.511 4.054c-.301.27-.472.639-.483 1.038s.141.777.427 1.063l1.086 1.086c.277.277.639.428 1.023.428l.039-.001a1.436 1.436 0 001.038-.483l3.933-4.376 3.984 4.382a1.442 1.442 0 002.103.05l1.086-1.086a1.445 1.445 0 00-.05-2.103zm-5.291-7.138a3.004 3.004 0 013.404-4.235l-1.563 1.563a.5.5 0 00-.146.354v1.5a.5.5 0 00.5.5H17c.133 0 .26-.053.354-.146l1.563-1.563a3.004 3.004 0 01-4.235 3.404.498.498 0 00-.592.115l-.767.853-1.034-.94.902-.811a.501.501 0 00.115-.592zm-6.838-.394c-.387 0-.752.152-1.028.429L4.793 8H4a.5.5 0 00-.5.5v.793l-.5.5L1.707 8.5l.5-.5H3a.5.5 0 00.5-.5v-.793l3.34-3.34c.063-.036.46-.213 2.223-.311.244-.014.483-.024.706-.032L8.354 4.439a1.445 1.445 0 00.05 2.103l.872.793-.94.94-.793-.872a1.46 1.46 0 00-1.075-.479zm.33 9.997c-.085.095-.199.149-.321.152s-.239-.045-.329-.135l-1.086-1.086c-.09-.09-.138-.207-.135-.329s.057-.236.152-.321l4.515-4.058 1.205 1.325-4.001 4.451zm11.142-1.068l-1.086 1.086a.452.452 0 01-.321.136.452.452 0 01-.335-.151L9.009 9.018l1.008-1.008 7.907 7.188a.45.45 0 01.015.657z"
  })));
}
LiniHammerWrench.propTypes = {
  size: PropTypes.number.isRequired
};