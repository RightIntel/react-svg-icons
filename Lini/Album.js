var React = require('react');

var PropTypes = require('prop-types');

function LiniAlbum({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniAlbum';

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
    d: "M16.5 20h-14c-0.827 0-1.5-0.673-1.5-1.5v-13c0-0.827 0.673-1.5 1.5-1.5h14c0.827 0 1.5 0.673 1.5 1.5v13c0 0.827-0.673 1.5-1.5 1.5zM2.5 5c-0.276 0-0.5 0.224-0.5 0.5v13c0 0.276 0.224 0.5 0.5 0.5h14c0.276 0 0.5-0.224 0.5-0.5v-13c0-0.276-0.224-0.5-0.5-0.5h-14z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 3h-14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 1h-12c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.817 9.113c-0.116-0.095-0.268-0.133-0.415-0.104l-5 1c-0.234 0.047-0.402 0.252-0.402 0.49v2.695c-0.293-0.124-0.633-0.195-1-0.195-1.122 0-2 0.659-2 1.5s0.878 1.5 2 1.5 2-0.659 2-1.5v-3.59l4-0.8v2.085c-0.293-0.124-0.633-0.195-1-0.195-1.122 0-2 0.659-2 1.5s0.878 1.5 2 1.5 2-0.659 2-1.5v-4c0-0.15-0.067-0.292-0.183-0.387zM7 15c-0.61 0-1-0.296-1-0.5s0.39-0.5 1-0.5 1 0.296 1 0.5-0.39 0.5-1 0.5zM12 14c-0.61 0-1-0.296-1-0.5s0.39-0.5 1-0.5 1 0.296 1 0.5-0.39 0.5-1 0.5z",
    fill: color
  })));
}

LiniAlbum.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniAlbum;