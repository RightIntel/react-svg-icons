var React = require('react');

var PropTypes = require('prop-types');

function LiniSiteMap({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniSiteMap';

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
    d: "M17 13.050v-1.55c0-0.827-0.673-1.5-1.5-1.5h-5.5v-2.050c1.14-0.232 2-1.242 2-2.45 0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5c0 1.207 0.86 2.217 2 2.45v2.050h-5.5c-0.827 0-1.5 0.673-1.5 1.5v1.55c-1.14 0.232-2 1.242-2 2.45 0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5c0-1.207-0.86-2.217-2-2.45v-1.55c0-0.276 0.224-0.5 0.5-0.5h5.5v2.050c-1.14 0.232-2 1.242-2 2.45 0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5c0-1.207-0.86-2.217-2-2.45v-2.050h5.5c0.276 0 0.5 0.224 0.5 0.5v1.55c-1.14 0.232-2 1.242-2 2.45 0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5c0-1.207-0.86-2.217-2-2.45zM8 5.5c0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5c-0.827 0-1.5-0.673-1.5-1.5zM4 15.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5 0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5zM11 15.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5 0.673-1.5 1.5-1.5c0.827 0 1.5 0.673 1.5 1.5zM16.5 17c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5z",
    fill: color
  })));
}

LiniSiteMap.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSiteMap;