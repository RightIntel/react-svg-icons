var React = require('react');

var PropTypes = require('prop-types');

function LiniGrumpy({
  size,
  ...props
}) {
  var className = 'Component Lini LiniGrumpy';

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
    d: "M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 14h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 7h-4c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.586c-0.056 0.157-0.086 0.325-0.086 0.5 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.175-0.031-0.343-0.086-0.5h0.586c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM7 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 7h-4c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.586c-0.056 0.157-0.086 0.325-0.086 0.5 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.175-0.031-0.343-0.086-0.5h0.586c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM13 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5z",
    fill: "#000000"
  })));
}

LiniGrumpy.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniGrumpy;