var React = require('react');

var PropTypes = require('prop-types');

function LiniEjectCircle({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniEjectCircle';

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
    d: "M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5c4.687 0 8.5-3.813 8.5-8.5s-3.813-8.5-8.5-8.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 15h-8c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h8c0.276 0 0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5zM6 14h7v-1h-7v1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.501 11c-0-0-0-0-0.001 0h-8c-0.184 0-0.354-0.102-0.441-0.264s-0.077-0.36 0.025-0.513l4-6c0.093-0.139 0.249-0.223 0.416-0.223s0.323 0.084 0.416 0.223l3.987 5.981c0.061 0.083 0.097 0.186 0.097 0.297 0 0.276-0.224 0.5-0.5 0.5zM6.434 10h6.131l-3.066-4.599-3.066 4.599z",
    fill: color
  })));
}

LiniEjectCircle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniEjectCircle;