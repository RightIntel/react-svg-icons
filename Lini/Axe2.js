var React = require('react');

var PropTypes = require('prop-types');

function LiniAxe2({
  size,
  ...props
}) {
  var className = 'Component Lini LiniAxe2';

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
    d: "M19.971 16.676c-0.011-0.266-0.136-0.518-0.343-0.693l-2.423-2.043c-0.201-0.169-0.531-0.466-0.72-0.647l-4.841-4.631c0.863-0.424 1.832-0.662 2.857-0.662 0.276 0 0.5-0.224 0.5-0.5 0-2.003-0.78-3.887-2.197-5.303s-3.3-2.197-5.303-2.197c-0.276 0-0.5 0.224-0.5 0.5 0 1.086-0.268 2.111-0.741 3.012l-0.552-0.528c-0.394-0.377-1.028-0.37-1.414 0.016l-1.293 1.293c-0.386 0.386-0.393 1.020-0.016 1.414l0.528 0.552c-0.901 0.473-1.926 0.741-3.012 0.741-0.276 0-0.5 0.224-0.5 0.5 0 2.003 0.78 3.887 2.197 5.303s3.3 2.197 5.303 2.197c0.276 0 0.5-0.224 0.5-0.5 0-1.024 0.239-1.994 0.662-2.857l4.631 4.841c0.181 0.189 0.478 0.519 0.647 0.72l2.043 2.423c0.174 0.207 0.427 0.332 0.693 0.343 0.013 0.001 0.026 0.001 0.039 0.001 0.252 0 0.498-0.102 0.68-0.284l2.293-2.293c0.191-0.191 0.295-0.453 0.283-0.719zM3.707 5.016c-0.002-0.002-0.002-0.013 0-0.016l1.293-1.293c0.002-0.002 0.013-0.002 0.016-0l0.699 0.669c-0.379 0.509-0.831 0.96-1.339 1.339l-0.669-0.699zM7.017 13.982c-3.2-0.236-5.764-2.799-6-6 1.808-0.122 3.492-0.885 4.786-2.179s2.057-2.977 2.179-4.786c3.2 0.236 5.764 2.799 6 6-1.808 0.122-3.492 0.885-4.786 2.179s-2.057 2.977-2.179 4.786zM16.719 18.949l-2.014-2.389c-0.183-0.218-0.493-0.562-0.689-0.767l-4.823-5.042c0.427-0.603 0.955-1.131 1.558-1.558l5.042 4.823c0.205 0.196 0.549 0.505 0.767 0.689l2.389 2.014-2.23 2.23z"
  })));
}

LiniAxe2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniAxe2;