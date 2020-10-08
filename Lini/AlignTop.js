var React = require('react');

var PropTypes = require('prop-types');

function LiniAlignTop({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniAlignTop';

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
    d: "M0 0.5c0-0.276 0.224-0.5 0.5-0.5h19c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-19c-0.276 0-0.5-0.224-0.5-0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 11.5v-8c0-0.827 0.673-1.5 1.5-1.5h4c0.827 0 1.5 0.673 1.5 1.5v8c0 0.827-0.673 1.5-1.5 1.5h-4c-0.827 0-1.5-0.673-1.5-1.5zM17 3.5c0-0.276-0.224-0.5-0.5-0.5h-4c-0.276 0-0.5 0.224-0.5 0.5v8c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-8z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 17.5v-14c0-0.827 0.673-1.5 1.5-1.5h4c0.827 0 1.5 0.673 1.5 1.5v14c0 0.827-0.673 1.5-1.5 1.5h-4c-0.827 0-1.5-0.673-1.5-1.5zM8 3.5c0-0.276-0.224-0.5-0.5-0.5h-4c-0.276 0-0.5 0.224-0.5 0.5v14c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-14z",
    fill: color
  })));
}

LiniAlignTop.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniAlignTop;