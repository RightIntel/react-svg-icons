var React = require('react');

var PropTypes = require('prop-types');

function LiniWatch({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniWatch';

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
  }, /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M15.5 9h-0.675c-0.298-1.255-0.96-2.371-1.87-3.228l-0.752-3.403c-0.169-0.767-0.918-1.369-1.704-1.369h-4c-0.786 0-1.534 0.601-1.704 1.369l-0.752 3.403c-1.258 1.186-2.045 2.867-2.045 4.728s0.787 3.542 2.045 4.728l0.752 3.403c0.169 0.767 0.918 1.369 1.704 1.369h4c0.786 0 1.534-0.601 1.704-1.369l0.752-3.403c0.909-0.857 1.572-1.973 1.87-3.228h0.675c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5zM5.773 2.584c0.068-0.306 0.414-0.584 0.727-0.584h4c0.313 0 0.66 0.278 0.727 0.584l0.503 2.277c-0.952-0.548-2.055-0.861-3.23-0.861s-2.278 0.313-3.23 0.861l0.503-2.277zM11.227 18.416c-0.068 0.306-0.414 0.584-0.727 0.584h-4c-0.313 0-0.66-0.278-0.727-0.584l-0.503-2.277c0.952 0.548 2.055 0.861 3.23 0.861s2.278-0.313 3.23-0.861l-0.503 2.277zM8.5 16c-3.033 0-5.5-2.467-5.5-5.5s2.467-5.5 5.5-5.5 5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5zM15.5 11h-0.519c0.013-0.165 0.019-0.332 0.019-0.5s-0.006-0.335-0.019-0.5h0.519c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M8.5 11c-0.076 0-0.153-0.017-0.224-0.053l-2-1c-0.247-0.123-0.347-0.424-0.224-0.671s0.424-0.347 0.671-0.224l1.74 0.87 2.759-1.839c0.23-0.153 0.54-0.091 0.693 0.139s0.091 0.54-0.139 0.693l-3 2c-0.084 0.056-0.18 0.084-0.277 0.084z"
  }, pathProps))));
}

LiniWatch.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniWatch;