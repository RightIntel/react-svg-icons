var React = require('react');

var PropTypes = require('prop-types');

function LiniAxe({
  size,
  ...props
}) {
  var className = 'Component Lini LiniAxe';

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
    d: "M19.971 15.676c-0.011-0.266-0.136-0.518-0.343-0.693l-2.423-2.043c-0.201-0.169-0.531-0.466-0.72-0.647l-5.096-4.874 0.152-0.152c0.585-0.585 0.585-1.536 0-2.121l-2.686-2.686c-0.283-0.283-0.659-0.438-1.061-0.438s-0.778 0.156-1.061 0.438l-0.259 0.259-0.767-0.734c-0.394-0.377-1.028-0.37-1.414 0.016l-1.293 1.293c-0.386 0.386-0.393 1.020-0.016 1.414l0.531 0.555c-0.919 0.482-1.947 0.738-3.015 0.738-0.276 0-0.5 0.224-0.5 0.5 0 2.003 0.78 3.887 2.197 5.303s3.3 2.197 5.303 2.197c0.276 0 0.5-0.224 0.5-0.5 0-1.008 0.228-1.981 0.66-2.86l4.633 4.844c0.181 0.189 0.478 0.519 0.647 0.72l2.043 2.423c0.174 0.207 0.427 0.332 0.693 0.343 0.013 0.001 0.026 0.001 0.039 0.001 0.252 0 0.498-0.102 0.68-0.284l2.293-2.293c0.191-0.191 0.295-0.453 0.283-0.719zM3.707 4.016c-0.002-0.002-0.002-0.013 0-0.016l1.293-1.293c0.002-0.002 0.013-0.002 0.016-0l0.751 0.719-0.671 0.671c-0.226 0.226-0.466 0.433-0.718 0.621l-0.671-0.702zM7.017 12.982c-3.2-0.236-5.764-2.799-6-6 1.808-0.122 3.492-0.885 4.786-2.179l1.637-1.637c0.094-0.094 0.219-0.145 0.354-0.145s0.26 0.052 0.354 0.145l2.686 2.686c0.195 0.195 0.195 0.512 0 0.707l-1.637 1.637c-1.294 1.294-2.057 2.977-2.179 4.786zM16.719 17.949l-2.014-2.389c-0.183-0.218-0.493-0.562-0.689-0.767l-4.825-5.045c0.212-0.298 0.45-0.581 0.714-0.844l0.778-0.778 5.112 4.889c0.205 0.196 0.549 0.505 0.767 0.689l2.389 2.014-2.23 2.23z"
  })));
}

LiniAxe.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniAxe;