import React from 'react';
import PropTypes from 'prop-types';
export default function LiniWifi({
  size,
  ...props
}) {
  let className = 'Component Lini LiniWifi';

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
    d: "M10.5 16c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM7.053 12.968a.5.5 0 01-.43-.755 4.503 4.503 0 017.752 0 .5.5 0 11-.861.509C12.886 11.66 11.731 11 10.498 11s-2.388.66-3.016 1.722a.5.5 0 01-.431.246z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.107 10.808a.501.501 0 01-.401-.2C14.465 8.951 12.567 8 10.5 8s-3.965.95-5.206 2.608a.5.5 0 11-.8-.6 7.578 7.578 0 012.594-2.189c1.063-.544 2.211-.82 3.412-.82s2.35.276 3.412.82a7.556 7.556 0 012.594 2.189.5.5 0 01-.399.8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.243 8.671a.5.5 0 01-.387-.183C16.042 6.271 13.361 5 10.5 5S4.958 6.271 3.144 8.488a.5.5 0 11-.774-.634c2.005-2.45 4.968-3.855 8.13-3.855s6.125 1.405 8.13 3.855a.501.501 0 01-.386.817z"
  })));
}
LiniWifi.propTypes = {
  size: PropTypes.number.isRequired
};