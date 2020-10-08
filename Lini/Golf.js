var React = require('react');

var PropTypes = require('prop-types');

function LiniGolf({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniGolf';

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
    d: "M7.5 16c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5 4.5 2.019 4.5 4.5c0 2.481-2.019 4.5-4.5 4.5zM7.5 8c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M7.5 20c-0.276 0-0.5-0.224-0.5-0.5 0-1.672-1.706-2.544-1.724-2.553-0.247-0.123-0.347-0.424-0.224-0.671s0.424-0.347 0.671-0.224c0.064 0.032 1.126 0.576 1.776 1.661 0.651-1.085 1.712-1.629 1.776-1.661 0.247-0.123 0.547-0.023 0.671 0.224s0.023 0.547-0.224 0.671c-0.016 0.008-1.724 0.895-1.724 2.553 0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M7 9.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9 9.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M6 11.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M8 11.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M10 11.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M7 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M19.815 3.112c-0.215-0.174-0.529-0.141-0.703 0.074l-3.291 4.060c-0.249-0.536-0.757-1.101-1.536-1.709-0.895-0.699-2.149-1.451-3.628-2.172-2.804-1.369-5.814-2.363-7.157-2.363-1.107 0-2.063 0.649-2.691 1.827-0.522 0.978-0.809 2.282-0.809 3.673 0 1.673 0.801 2.872 2.318 3.466 0.060 0.023 0.122 0.035 0.182 0.035 0.2 0 0.388-0.121 0.466-0.318 0.101-0.257-0.026-0.547-0.283-0.648-1.132-0.443-1.682-1.272-1.682-2.534 0-2.236 0.859-4.5 2.5-4.5 1.17 0 4.121 0.993 6.718 2.262 3.53 1.724 4.782 3.091 4.782 3.738 0 0.447-0.191 0.831-2.536 1.001-0.275 0.020-0.482 0.26-0.462 0.535s0.259 0.482 0.535 0.462c1.22-0.089 1.962-0.233 2.482-0.481 0.279-0.134 0.5-0.304 0.66-0.51 0.001-0.002 0.003-0.003 0.004-0.004l4.206-5.189c0.174-0.215 0.141-0.529-0.074-0.703z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M6 4h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M10.5 6h-8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h8c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M12.5 8h-1.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M4 8h-1.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniGolf.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniGolf;