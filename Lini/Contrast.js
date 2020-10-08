var React = require('react');

var PropTypes = require('prop-types');

function LiniContrast({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniContrast';

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
    d: "M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 17c-0.276 0-0.5-0.224-0.5-0.5v-12c0-0.276 0.224-0.5 0.5-0.5 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5zM10 5.023v10.955c2.799-0.253 5-2.613 5-5.477s-2.201-5.224-5-5.477z",
    fill: color
  })));
}

LiniContrast.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniContrast;