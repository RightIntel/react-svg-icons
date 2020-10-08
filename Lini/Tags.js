var React = require('react');

var PropTypes = require('prop-types');

function LiniTags({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniTags';

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
    d: "M15.5 8c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM15.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M17.5 3h-3.5c-0.688 0-1.574 0.367-2.061 0.854l-7.586 7.586c-0.283 0.283-0.438 0.659-0.438 1.061s0.156 0.778 0.438 1.061l2.602 2.602-1.095 0.632c-0.115 0.066-0.249 0.083-0.379 0.049s-0.238-0.117-0.304-0.232l-3.596-6.229c-0.138-0.239-0.056-0.545 0.183-0.683l7.986-4.611c0.239-0.138 0.321-0.444 0.183-0.683s-0.444-0.321-0.683-0.183l-7.986 4.611c-0.346 0.2-0.594 0.523-0.698 0.911s-0.051 0.792 0.149 1.138l3.596 6.229c0.2 0.346 0.523 0.594 0.911 0.698 0.13 0.035 0.262 0.052 0.392 0.052 0.26 0 0.515-0.068 0.746-0.201l1.327-0.766 0.752 0.752c0.283 0.283 0.659 0.438 1.061 0.438s0.778-0.156 1.061-0.438l7.586-7.586c0.487-0.487 0.853-1.372 0.853-2.061v-3.5c0-0.827-0.673-1.5-1.5-1.5zM18 8c0 0.415-0.267 1.060-0.561 1.354l-7.586 7.586c-0.094 0.094-0.219 0.145-0.354 0.145s-0.26-0.052-0.354-0.145l-4.086-4.086c-0.094-0.094-0.145-0.219-0.145-0.353s0.052-0.26 0.145-0.354l7.586-7.586c0.293-0.293 0.939-0.561 1.353-0.561h3.5c0.276 0 0.5 0.224 0.5 0.5v3.5z"
  }, pathProps))));
}

LiniTags.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTags;