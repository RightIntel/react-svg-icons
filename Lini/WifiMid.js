import React from 'react';
import PropTypes from 'prop-types';
export default function LiniWifiMid({
  size,
  ...props
}) {
  let className = 'Component Lini LiniWifiMid';

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
    d: "M10.5 16c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM18.243 8.671a.5.5 0 01-.387-.183 9.608 9.608 0 00-3.081-2.474.5.5 0 11.451-.893 10.461 10.461 0 013.405 2.734.501.501 0 01-.386.817zM12.501 5.2a.492.492 0 01-.1-.01 9.65 9.65 0 00-3.801 0 .499.499 0 11-.198-.98 10.637 10.637 0 014.199 0 .5.5 0 01-.099.99zM2.757 8.671a.5.5 0 01-.386-.817A10.474 10.474 0 015.776 5.12a.501.501 0 01.451.893 9.597 9.597 0 00-3.081 2.474.497.497 0 01-.387.183zM7.053 12.968a.5.5 0 01-.43-.755 4.503 4.503 0 017.752 0 .5.5 0 11-.861.509C12.886 11.66 11.731 11 10.498 11s-2.388.66-3.016 1.722a.5.5 0 01-.431.246z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.107 10.808a.501.501 0 01-.401-.2C14.465 8.951 12.567 8 10.5 8s-3.965.95-5.206 2.608a.5.5 0 11-.8-.6 7.578 7.578 0 012.594-2.189c1.063-.544 2.211-.82 3.412-.82s2.35.276 3.412.82a7.556 7.556 0 012.594 2.189.5.5 0 01-.399.8z"
  })));
}
LiniWifiMid.propTypes = {
  size: PropTypes.number.isRequired
};