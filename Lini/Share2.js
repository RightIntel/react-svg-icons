var React = require('react');

var PropTypes = require('prop-types');

function LiniShare2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniShare2';

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
    d: "M16 12c-1.384 0-2.606 0.707-3.325 1.779l-4.902-2.451c0.147-0.416 0.227-0.862 0.227-1.328s-0.080-0.912-0.227-1.328l4.902-2.451c0.718 1.072 1.941 1.779 3.325 1.779 2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4c0 0.465 0.080 0.912 0.227 1.327l-4.902 2.451c-0.718-1.072-1.941-1.778-3.325-1.778-2.206 0-4 1.794-4 4s1.794 4 4 4c1.384 0 2.606-0.707 3.325-1.779l4.902 2.451c-0.147 0.416-0.227 0.862-0.227 1.328 0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4zM16 1c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zM4 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM16 19c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"
  }, pathProps))));
}

LiniShare2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniShare2;