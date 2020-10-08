var React = require('react');

var PropTypes = require('prop-types');

function LiniBaby3({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniBaby3';

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
    d: "M7.5 8c-0.827 0-1.5-0.673-1.5-1.5 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 0.827-0.673 1.5-1.5 1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M11.5 8c-0.827 0-1.5-0.673-1.5-1.5 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 0.827-0.673 1.5-1.5 1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9.5 14c-3.033 0-5.5-2.467-5.5-5.5s2.467-5.5 5.5-5.5 5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5zM9.5 4c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5c2.481 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9.5 12c-0.994 0-1.945-0.425-2.609-1.167-0.184-0.206-0.167-0.522 0.039-0.706s0.522-0.167 0.706 0.039c0.474 0.53 1.153 0.833 1.864 0.833s1.389-0.304 1.863-0.833c0.184-0.206 0.5-0.223 0.706-0.039s0.223 0.5 0.039 0.706c-0.664 0.741-1.614 1.166-2.609 1.166z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M15.51 2.49c-1.605-1.605-3.74-2.49-6.010-2.49s-4.405 0.884-6.010 2.49-2.49 3.74-2.49 6.010v11c0 0.159 0.076 0.309 0.204 0.403 0.087 0.064 0.191 0.097 0.296 0.097 0.050 0 0.1-0.007 0.149-0.023l15.351-4.797v4.32c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4.988c0-0.008 0-0.015 0-0.023v-5.989c0-2.27-0.884-4.405-2.49-6.010zM2 15.157l6.228 1.717-6.228 1.946v-3.663zM17 14.132l-7.009 2.19-7.991-2.203v-5.619c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5v5.632z"
  }, pathProps))));
}

LiniBaby3.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBaby3;