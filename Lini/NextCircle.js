var React = require('react');

var PropTypes = require('prop-types');

function LiniNextCircle({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniNextCircle';

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
    d: "M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5c4.687 0 8.5-3.813 8.5-8.5s-3.813-8.5-8.5-8.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M6.5 16c-0.072 0-0.144-0.016-0.212-0.047-0.176-0.082-0.288-0.259-0.288-0.453v-10c0-0.194 0.112-0.371 0.288-0.453s0.383-0.056 0.532 0.069l6 5c0.114 0.095 0.18 0.236 0.18 0.384s-0.066 0.289-0.18 0.384l-6 5c-0.092 0.076-0.205 0.116-0.32 0.116zM7 6.568v7.865l4.719-3.933-4.719-3.932z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M13.5 15c-0.276 0-0.5-0.224-0.5-0.5v-8c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v8c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniNextCircle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniNextCircle;