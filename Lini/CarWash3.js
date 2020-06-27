function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCarWash3({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCarWash3';

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
    d: "M5.5 16c-.827 0-1.5-.673-1.5-1.5S4.673 13 5.5 13s1.5.673 1.5 1.5S6.327 16 5.5 16zm0-2a.5.5 0 100 1 .5.5 0 000-1zM14.5 16c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM5 5c-1.103 0-2-.897-2-2 0-.792.452-1.313.889-1.817.243-.28.494-.569.663-.907a.5.5 0 01.894 0c.169.338.42.627.663.907.437.503.889 1.024.889 1.817 0 1.103-.897 2-2 2zm0-3.585c-.119.152-.241.292-.356.424C4.244 2.299 4 2.601 4 3c0 .551.449 1 1 1s1-.449 1-1c0-.398-.245-.701-.644-1.161A11.308 11.308 0 015 1.415zM10 5c-1.103 0-2-.897-2-2 0-.792.452-1.313.889-1.817.243-.28.494-.569.663-.907a.5.5 0 01.894 0c.169.338.42.627.663.907.437.503.889 1.024.889 1.817 0 1.103-.897 2-2 2zm0-3.585c-.119.152-.241.292-.356.424C9.244 2.299 9 2.601 9 3c0 .551.449 1 1 1s1-.449 1-1c0-.398-.245-.701-.644-1.161A11.308 11.308 0 0110 1.415zM15 5c-1.103 0-2-.897-2-2 0-.792.452-1.313.889-1.817.243-.28.494-.569.663-.907a.5.5 0 01.894 0c.169.338.42.627.663.907.437.503.889 1.024.889 1.817 0 1.103-.897 2-2 2zm0-3.585c-.119.152-.241.292-.356.424-.4.46-.644.762-.644 1.161 0 .551.449 1 1 1s1-.449 1-1c0-.398-.245-.701-.644-1.161A11.308 11.308 0 0115 1.415z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.958 11.907c-.13-.792-.553-3.214-1.011-4.131-.305-.61-1.088-1.077-2.326-1.386C12.615 6.139 11.329 6 10 6s-2.615.138-3.621.39c-1.238.31-2.021.776-2.326 1.386-.458.916-.881 3.339-1.011 4.131C2.343 12.386 2 13.079 2 14v2.5c0 .652.418 1.208 1 1.414V19c0 .551.449 1 1 1h1c.551 0 1-.449 1-1v-1h8v1c0 .551.449 1 1 1h1c.551 0 1-.449 1-1v-1.086c.582-.206 1-.762 1-1.414V14c0-.921-.343-1.614-1.042-2.093zM4.947 8.224C5.244 7.631 7.115 7 10 7s4.756.63 5.053 1.224c.287.575.606 2.096.803 3.183a5.143 5.143 0 00-.303-.08 9.166 9.166 0 00-.863-.156l-2.899-2.077a.5.5 0 00-.583.813l1.566 1.122c-.85-.028-1.782-.028-2.774-.028h-.349L6.777 9.085a.5.5 0 10-.554.832l1.644 1.096c-1.341.024-2.507.097-3.42.314a7.386 7.386 0 00-.303.08c.198-1.087.516-2.608.804-3.183zM5 19H4v-1h1v1zm10 0v-1h1v1h-1zm2-2.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V14c0-.924.486-1.417 1.678-1.701C5.933 12 7.818 12 10 12s4.066 0 5.322.299C16.514 12.583 17 13.076 17 14v2.5z"
  })));
}
LiniCarWash3.propTypes = {
  size: PropTypes.number.isRequired
};