var React = require('react');

var PropTypes = require('prop-types');

function LiniScale2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniScale2';

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
    d: "M10 11.086v-1.586c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.586c-0.582 0.206-1 0.762-1 1.414 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.652-0.418-1.208-1-1.414zM9.5 13c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9.5 8c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5c2.481 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5zM10 15.964v-0.464c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0.464c-1.531-0.22-2.744-1.434-2.964-2.964h0.464c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.464c0.243-1.694 1.704-3 3.464-3s3.221 1.306 3.464 3h-0.464c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.464c-0.22 1.531-1.434 2.744-2.964 2.964z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M17.5 0h-16c-0.276 0-0.5 0.224-0.5 0.5v1c0 1.378 1.122 2.5 2.5 2.5h4.5v1.149c-1.431 0.289-2.747 0.991-3.803 2.047-1.417 1.417-2.197 3.3-2.197 5.303v6c0 0.827 0.673 1.5 1.5 1.5h12c0.827 0 1.5-0.673 1.5-1.5v-6c0-2.003-0.78-3.887-2.197-5.303-1.056-1.056-2.372-1.758-3.804-2.047l-0.001-1.149h4.501c1.378 0 2.5-1.122 2.5-2.5v-1c0-0.276-0.224-0.5-0.5-0.5zM16 12.5v6c0 0.276-0.224 0.5-0.5 0.5h-12c-0.276 0-0.5-0.224-0.5-0.5v-6c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5zM10 5.017c-0.166-0.011-0.332-0.017-0.5-0.017s-0.334 0.006-0.5 0.017v-1.017h0.999l0.001 1.017zM17 1.5c0 0.827-0.673 1.5-1.5 1.5h-12c-0.827 0-1.5-0.673-1.5-1.5v-0.5h15v0.5z"
  }, pathProps))));
}

LiniScale2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniScale2;