var React = require('react');

var PropTypes = require('prop-types');

function LiniWrench({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniWrench';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.75 20.013c-0.602 0-1.169-0.232-1.597-0.655-0.001-0.001-0.002-0.002-0.002-0.002l-7.71-7.709c-0.619 0.234-1.27 0.352-1.941 0.352-3.033 0-5.5-2.467-5.5-5.5 0-0.789 0.164-1.551 0.486-2.264 0.068-0.15 0.204-0.256 0.366-0.286s0.327 0.022 0.443 0.138l2.912 2.912h1.793v-1.793l-2.919-2.919c-0.116-0.116-0.168-0.282-0.138-0.443s0.136-0.298 0.286-0.366c0.693-0.313 1.478-0.479 2.272-0.479 3.033 0 5.5 2.467 5.5 5.5 0 0.663-0.12 1.312-0.357 1.936l7.704 7.704c0.43 0.425 0.668 0.992 0.671 1.596s-0.231 1.173-0.656 1.604c-0.428 0.434-1.001 0.673-1.613 0.673zM15.856 18.648c0.239 0.236 0.557 0.366 0.894 0.366 0.342 0 0.662-0.133 0.901-0.376s0.369-0.56 0.368-0.897c-0.001-0.337-0.134-0.653-0.375-0.89-0.001-0.001-0.002-0.002-0.002-0.002l-7.942-7.942c-0.147-0.147-0.188-0.37-0.102-0.56 0.267-0.591 0.402-1.212 0.402-1.847 0-2.481-2.019-4.5-4.5-4.5-0.392 0-0.78 0.049-1.15 0.143l2.504 2.504c0.094 0.094 0.146 0.221 0.146 0.354v2.5c0 0.276-0.224 0.5-0.5 0.5h-2.5c-0.133 0-0.26-0.053-0.354-0.146l-2.5-2.5c-0.098 0.371-0.147 0.754-0.147 1.146 0 2.481 2.019 4.5 4.5 4.5 0.646 0 1.269-0.134 1.852-0.397 0.19-0.086 0.412-0.045 0.56 0.102l7.944 7.943z",
    fill: color
  })));
}

LiniWrench.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniWrench;