var React = require('react');

var PropTypes = require('prop-types');

function LiniFirstAid({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniFirstAid';

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
    d: "M11.5 16h-3c-0.276 0-0.5-0.224-0.5-0.5v-1.5h-1.5c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h1.5v-1.5c0-0.276 0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5v1.5h1.5c0.276 0 0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5h-1.5v1.5c0 0.276-0.224 0.5-0.5 0.5zM9 15h2v-1.5c0-0.276 0.224-0.5 0.5-0.5h1.5v-2h-1.5c-0.276 0-0.5-0.224-0.5-0.5v-1.5h-2v1.5c0 0.276-0.224 0.5-0.5 0.5h-1.5v2h1.5c0.276 0 0.5 0.224 0.5 0.5v1.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 5h-4.5v-1.5c0-0.827-0.673-1.5-1.5-1.5h-5c-0.827 0-1.5 0.673-1.5 1.5v1.5h-4.5c-0.827 0-1.5 0.673-1.5 1.5v11c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-11c0-0.827-0.673-1.5-1.5-1.5zM7 3.5c0-0.276 0.224-0.5 0.5-0.5h5c0.276 0 0.5 0.224 0.5 0.5v1.5h-6v-1.5zM19 17.5c0 0.276-0.224 0.5-0.5 0.5h-17c-0.276 0-0.5-0.224-0.5-0.5v-11c0-0.276 0.224-0.5 0.5-0.5h17c0.276 0 0.5 0.224 0.5 0.5v11z",
    fill: color
  })));
}

LiniFirstAid.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFirstAid;