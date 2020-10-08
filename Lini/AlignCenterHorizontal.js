var React = require('react');

var PropTypes = require('prop-types');

function LiniAlignCenterHorizontal({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniAlignCenterHorizontal';

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
    d: "M19.5 10h-1.5v-3.5c0-0.827-0.673-1.5-1.5-1.5h-4c-0.827 0-1.5 0.673-1.5 1.5v3.5h-2v-6.5c0-0.827-0.673-1.5-1.5-1.5h-4c-0.827 0-1.5 0.673-1.5 1.5v6.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.5v6.5c0 0.827 0.673 1.5 1.5 1.5h4c0.827 0 1.5-0.673 1.5-1.5v-6.5h2v3.5c0 0.827 0.673 1.5 1.5 1.5h4c0.827 0 1.5-0.673 1.5-1.5v-3.5h1.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM12 6.5c0-0.276 0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5v3.5h-5v-3.5zM3 3.5c0-0.276 0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5v6.5h-5v-6.5zM8 17.5c0 0.276-0.224 0.5-0.5 0.5h-4c-0.276 0-0.5-0.224-0.5-0.5v-6.5h5v6.5zM17 14.5c0 0.276-0.224 0.5-0.5 0.5h-4c-0.276 0-0.5-0.224-0.5-0.5v-3.5h5v3.5z"
  }, pathProps))));
}

LiniAlignCenterHorizontal.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniAlignCenterHorizontal;