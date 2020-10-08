var React = require('react');

var PropTypes = require('prop-types');

function LiniBandages({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniBandages';

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
  }, /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10 6.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M8 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6 10.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M12 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M8 10.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10 10.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M12 10.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14 10.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M8 12.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10 12.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M12 12.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10 14.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17.141 10.934l-0.434-0.434 0.434-0.434c1.073-1.073 1.717-2.457 1.813-3.897 0.097-1.465-0.382-2.805-1.35-3.772-0.878-0.878-2.089-1.362-3.409-1.362-1.548 0-3.1 0.665-4.26 1.825l-0.434 0.434-0.434-0.434c-1.16-1.16-2.712-1.825-4.26-1.825-1.32 0-2.531 0.484-3.41 1.362-0.968 0.968-1.447 2.308-1.35 3.772 0.096 1.44 0.739 2.824 1.813 3.897l0.434 0.434-0.434 0.434c-1.073 1.073-1.717 2.457-1.813 3.897-0.097 1.465 0.382 2.805 1.35 3.773 0.878 0.878 2.089 1.362 3.41 1.362 1.548 0 3.1-0.665 4.26-1.825l0.434-0.434 0.434 0.434c1.159 1.159 2.712 1.824 4.26 1.825 0 0 0 0 0 0 1.32 0 2.531-0.484 3.409-1.362 0.968-0.968 1.447-2.308 1.35-3.773-0.096-1.44-0.739-2.824-1.812-3.897zM10.641 3.566c0.973-0.973 2.268-1.532 3.553-1.532 1.053 0 2.013 0.38 2.702 1.069 1.597 1.597 1.39 4.403-0.462 6.255l-0.434 0.434-5.793-5.793 0.434-0.434zM15.293 10.5l-5.793 5.793-5.793-5.793 5.793-5.793 5.793 5.793zM2.566 9.359c-1.852-1.852-2.059-4.658-0.462-6.255 0.69-0.69 1.649-1.069 2.702-1.069 1.284 0 2.579 0.558 3.553 1.532l0.434 0.434-5.793 5.793-0.434-0.434zM8.359 17.434c-0.973 0.973-2.268 1.532-3.553 1.532-1.053 0-2.013-0.38-2.702-1.069-1.597-1.597-1.39-4.403 0.462-6.255l0.434-0.434 5.793 5.793-0.434 0.434zM16.896 17.896c-0.69 0.69-1.649 1.069-2.702 1.069-0 0-0 0-0 0-1.285-0-2.579-0.558-3.553-1.532l-0.434-0.434 5.793-5.793 0.434 0.434c1.852 1.852 2.059 4.658 0.462 6.255z"
  }, pathProps))));
}

LiniBandages.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBandages;