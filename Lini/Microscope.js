var React = require('react');

var PropTypes = require('prop-types');

function LiniMicroscope({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniMicroscope';

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
    d: "M18.5 13h-5.099c-0.001 0-0.003 0-0.004 0h-1.897c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.244c-0.626 1.77-2.322 3-4.244 3-2.481 0-4.5-2.019-4.5-4.5 0-2.251 1.637-4.131 3.841-4.452l2.099 2.099c0.283 0.283 0.659 0.438 1.061 0.438s0.778-0.156 1.061-0.438l0.586-0.586c0.585-0.585 0.585-1.536-0-2.121l-5.586-5.586c-0.283-0.283-0.659-0.438-1.061-0.438-0.116 0-0.229 0.013-0.339 0.038l-1.307-1.307c-0.195-0.195-0.512-0.195-0.707 0l-1 1c-0.195 0.195-0.195 0.512 0 0.707l1.307 1.307c-0.025 0.11-0.038 0.223-0.038 0.339 0 0.401 0.156 0.778 0.438 1.061l0.338 0.338c-1.273 0.638-2.365 1.584-3.185 2.768-0.986 1.424-1.507 3.095-1.507 4.833 0 2.531 1.128 4.901 3.023 6.5h-1.523c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5l3.118 0c0.002 0 0.003 0 0.005 0s0.003-0 0.005-0l7.742 0c0.002 0 0.003 0 0.005 0s0.004-0 0.006-0l3.118 0c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.524c1.507-1.273 2.542-3.044 2.891-5h1.632c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM6.354 2.561l5.586 5.586c0.195 0.195 0.195 0.512 0 0.707l-0.586 0.586c-0.094 0.094-0.219 0.145-0.354 0.145s-0.26-0.052-0.354-0.145l-4.73-4.73c-0.001-0.001-0.003-0.003-0.004-0.004l-0.852-0.852c-0.094-0.094-0.145-0.219-0.145-0.354s0.052-0.26 0.145-0.354l0.586-0.586c0.094-0.094 0.219-0.145 0.354-0.145s0.26 0.052 0.354 0.145zM4 1.207l0.793 0.793-0.293 0.293-0.793-0.793 0.293-0.293zM12.242 19l-7.487-0c-2.32-1.339-3.756-3.818-3.756-6.5 0-2.99 1.733-5.644 4.442-6.851l1.558 1.558c-0.982 0.278-1.873 0.826-2.571 1.594-0.921 1.014-1.429 2.327-1.429 3.698 0 3.033 2.467 5.5 5.5 5.5 1.276 0 2.52-0.447 3.502-1.259 0.862-0.713 1.488-1.675 1.79-2.741h2.057c-0.426 2.090-1.742 3.924-3.606 5z",
    fill: color
  })));
}

LiniMicroscope.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMicroscope;