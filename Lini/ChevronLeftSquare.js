var React = require('react');

var PropTypes = require('prop-types');

function LiniChevronLeftSquare({
  size,
  ...props
}) {
  var className = 'Component Lini LiniChevronLeftSquare';

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
    d: "M19 18.5v-16c0-0.827-0.673-1.5-1.5-1.5h-16c-0.827 0-1.5 0.673-1.5 1.5v16c0 0.827 0.673 1.5 1.5 1.5h16c0.827 0 1.5-0.673 1.5-1.5zM1 2.5c0-0.276 0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5v16c0 0.276-0.224 0.5-0.5 0.5h-16c-0.276 0-0.5-0.224-0.5-0.5v-16z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 15.5c0-0.128-0.049-0.256-0.146-0.354l-4.646-4.646 4.646-4.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5 5c-0.195 0.195-0.195 0.512 0 0.707l5 5c0.195 0.195 0.512 0.195 0.707 0 0.098-0.098 0.146-0.226 0.146-0.354z",
    fill: "#000000"
  })));
}

LiniChevronLeftSquare.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniChevronLeftSquare;