var React = require('react');

var PropTypes = require('prop-types');

function LiniMapMarkerCrossed({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniMapMarkerCrossed';

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
    d: "M17.815 1.112c-0.214-0.174-0.529-0.142-0.703 0.073l-1.741 2.143c-0.985-1.971-3.022-3.328-5.371-3.328-3.308 0-6 2.692-6 6 0 1.536 0.298 3.22 0.884 5.008 0.367 1.118 0.848 2.279 1.433 3.462l-2.206 2.715c-0.174 0.214-0.142 0.529 0.073 0.703 0.093 0.075 0.204 0.112 0.315 0.112 0.145 0 0.29-0.063 0.388-0.185l1.93-2.375c1.377 2.562 2.732 4.296 2.789 4.369 0.095 0.121 0.24 0.191 0.393 0.191s0.298-0.070 0.393-0.191c0.057-0.073 1.418-1.814 2.797-4.385 0.812-1.513 1.46-2.999 1.925-4.416 0.587-1.787 0.884-3.472 0.884-5.008 0-0.552-0.075-1.087-0.216-1.595l2.104-2.589c0.174-0.214 0.142-0.529-0.073-0.703zM5 6c0-2.757 2.243-5 5-5 2.122 0 3.939 1.329 4.664 3.198l-1.675 2.062c0.007-0.086 0.011-0.172 0.011-0.26 0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3c0.301 0 0.591-0.045 0.866-0.128l-3.851 4.74c-1.031-2.173-2.014-4.945-2.014-7.613zM10 8c-1.103 0-2-0.897-2-2s0.897-2 2-2c1.103 0 2 0.897 2 2s-0.897 2-2 2zM15 6c0 3.248-1.458 6.652-2.682 8.935-0.903 1.686-1.816 3.027-2.318 3.726-0.5-0.696-1.407-2.029-2.309-3.71-0.062-0.115-0.124-0.234-0.187-0.355l7.462-9.184c0.023 0.193 0.035 0.389 0.035 0.587z"
  }, pathProps))));
}

LiniMapMarkerCrossed.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMapMarkerCrossed;