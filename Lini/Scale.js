var React = require('react');

var PropTypes = require('prop-types');

function LiniScale({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniScale';

  if (props.className) {
    className += ' ' + props.className;
  }

  const pathProps = {};

  if (color) {
    pathProps.fill = color;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", _extends({
    d: "M10 8.086v-1.586c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.586c-0.582 0.206-1 0.762-1 1.414 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.652-0.418-1.208-1-1.414zM9.5 10c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9.5 5c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5c2.481 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5zM10 12.964v-0.464c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0.464c-1.531-0.22-2.744-1.434-2.964-2.964h0.464c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.464c0.243-1.694 1.704-3 3.464-3s3.221 1.306 3.464 3h-0.464c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.464c-0.22 1.531-1.434 2.744-2.964 2.964z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M13.5 3h-1.5v-0.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v0.5h-1.5c-1.378 0-2.5 1.122-2.5 2.5v8c0 1.378 1.122 2.5 2.5 2.5h3.5v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5c0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.652-0.418-1.208-1-1.414v-1.086h3.5c1.378 0 2.5-1.122 2.5-2.5v-8c0-1.378-1.122-2.5-2.5-2.5zM8 2.5c0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5v0.5h-3v-0.5zM15 13.5c0 0.827-0.673 1.5-1.5 1.5h-8c-0.827 0-1.5-0.673-1.5-1.5v-8c0-0.827 0.673-1.5 1.5-1.5h8c0.827 0 1.5 0.673 1.5 1.5v8z"
  }, pathProps))));
}

LiniScale.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniScale;