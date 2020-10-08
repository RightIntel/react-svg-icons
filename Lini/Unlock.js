var React = require('react');

var PropTypes = require('prop-types');

function LiniUnlock({
  size,
  ...props
}) {
  var className = 'Component Lini LiniUnlock';

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
    d: "M13.5 1c-2.481 0-4.5 2.019-4.5 4.5v2.5h-7.5c-0.827 0-1.5 0.673-1.5 1.5v8c0 0.827 0.673 1.5 1.5 1.5h10c0.827 0 1.5-0.673 1.5-1.5v-8c0-0.827-0.673-1.5-1.5-1.5h-1.5v-2.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5v1c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1c0-2.481-2.019-4.5-4.5-4.5zM11.5 9c0.276 0 0.5 0.224 0.5 0.5v8c0 0.276-0.224 0.5-0.5 0.5h-10c-0.276 0-0.5-0.224-0.5-0.5v-8c0-0.276 0.224-0.5 0.5-0.5h10z",
    fill: "#000000"
  })));
}

LiniUnlock.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniUnlock;