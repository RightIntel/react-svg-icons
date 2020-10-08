var React = require('react');

var PropTypes = require('prop-types');

function Lini8ball({
  size,
  ...props
}) {
  var className = 'Component Lini Lini8ball';

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
    d: "M9.5 15c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5zM9.5 7c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 9.5c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5c0 0.384 0.145 0.734 0.383 1-0.238 0.266-0.383 0.616-0.383 1 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.384-0.145-0.734-0.383-1 0.238-0.266 0.383-0.616 0.383-1zM9.5 9c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5zM9.5 12c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z",
    fill: "#000000"
  })));
}

Lini8ball.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = Lini8ball;