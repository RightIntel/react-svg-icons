var React = require('react');

var PropTypes = require('prop-types');

function LiniPlayCircle({
  size,
  ...props
}) {
  var className = 'Component Lini LiniPlayCircle';

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
    d: "M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5c4.687 0 8.5-3.813 8.5-8.5s-3.813-8.5-8.5-8.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 16c-0.083 0-0.167-0.021-0.242-0.063-0.159-0.088-0.258-0.256-0.258-0.437v-10c0-0.182 0.099-0.349 0.258-0.437s0.353-0.083 0.507 0.013l8 5c0.146 0.091 0.235 0.252 0.235 0.424s-0.089 0.333-0.235 0.424l-8 5c-0.081 0.051-0.173 0.076-0.265 0.076zM7 6.402v8.196l6.557-4.098-6.557-4.098z"
  })));
}

LiniPlayCircle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPlayCircle;