var React = require('react');

var PropTypes = require('prop-types');

function LiniBriefcase({
  size,
  ...props
}) {
  var className = 'Component Lini LiniBriefcase';

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
    d: "M18.5 5h-4.5v-1.5c0-0.827-0.673-1.5-1.5-1.5h-5c-0.827 0-1.5 0.673-1.5 1.5v1.5h-4.5c-0.827 0-1.5 0.673-1.5 1.5v11c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-11c0-0.827-0.673-1.5-1.5-1.5zM7 3.5c0-0.276 0.224-0.5 0.5-0.5h5c0.276 0 0.5 0.224 0.5 0.5v1.5h-6v-1.5zM1.5 6h17c0.276 0 0.5 0.224 0.5 0.5v7.5h-2v-0.5c0-0.276-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5 0.224-0.5 0.5v0.5h-8v-0.5c0-0.276-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5 0.224-0.5 0.5v0.5h-2v-7.5c0-0.276 0.224-0.5 0.5-0.5zM16 14v1h-1v-1h1zM5 14v1h-1v-1h1zM18.5 18h-17c-0.276 0-0.5-0.224-0.5-0.5v-2.5h2v0.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-0.5h8v0.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-0.5h2v2.5c0 0.276-0.224 0.5-0.5 0.5z"
  })));
}

LiniBriefcase.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBriefcase;