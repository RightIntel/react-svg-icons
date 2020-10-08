var React = require('react');

var PropTypes = require('prop-types');

function LiniShare3({
  size,
  ...props
}) {
  var className = 'Component Lini LiniShare3';

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
    d: "M9.5 14c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zM9.5 8c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 11h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2.519c0.256-3.351 3.065-6 6.481-6 2.182 0 4.207 1.086 5.416 2.906 0.153 0.23 0.090 0.54-0.14 0.693s-0.54 0.090-0.693-0.14c-1.024-1.54-2.737-2.459-4.584-2.459-3.033 0-5.5 2.467-5.5 5.5 0 0.276-0.224 0.5-0.5 0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 17c-2.182 0-4.207-1.086-5.416-2.906-0.153-0.23-0.090-0.54 0.14-0.693s0.54-0.090 0.693 0.14c1.024 1.54 2.737 2.459 4.584 2.459 3.033 0 5.5-2.467 5.5-5.5 0-0.276 0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2.519c-0.256 3.351-3.065 6-6.481 6z"
  })));
}

LiniShare3.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniShare3;