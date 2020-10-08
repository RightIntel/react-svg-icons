var React = require('react');

var PropTypes = require('prop-types');

function LiniPieChart({
  size,
  ...props
}) {
  var className = 'Component Lini LiniPieChart';

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
    d: "M8.5 20c-2.27 0-4.405-0.884-6.010-2.49s-2.49-3.74-2.49-6.010c0-2.27 0.884-4.405 2.49-6.010s3.74-2.49 6.010-2.49c0.276 0 0.5 0.224 0.5 0.5v7.5h7.5c0.276 0 0.5 0.224 0.5 0.5 0 2.27-0.884 4.405-2.49 6.010s-3.74 2.49-6.010 2.49zM8 4.016c-3.903 0.258-7 3.516-7 7.484 0 4.136 3.364 7.5 7.5 7.5 3.967 0 7.225-3.097 7.484-7h-7.484c-0.276 0-0.5-0.224-0.5-0.5v-7.484z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 10h-8c-0.276 0-0.5-0.224-0.5-0.5v-8c0-0.276 0.224-0.5 0.5-0.5 2.27 0 4.405 0.884 6.010 2.49s2.49 3.74 2.49 6.010c0 0.276-0.224 0.5-0.5 0.5zM11 9h6.984c-0.247-3.738-3.246-6.736-6.984-6.984v6.984z",
    fill: "#000000"
  })));
}

LiniPieChart.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPieChart;