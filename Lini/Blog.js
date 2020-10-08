var React = require('react');

var PropTypes = require('prop-types');

function LiniBlog({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniBlog';

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
    d: "M10.354 12.146l-2.5-2.5c-0.13-0.13-0.321-0.178-0.497-0.125l-5 1.5c-0.169 0.051-0.299 0.187-0.341 0.358l-2 8c-0.043 0.17 0.007 0.351 0.132 0.475 0.095 0.095 0.223 0.146 0.354 0.146 0.040 0 0.081-0.005 0.121-0.015l8-2c0.171-0.043 0.307-0.172 0.358-0.341l1.5-5c0.053-0.176 0.005-0.367-0.125-0.497zM8.103 17.084l-5.973 1.493 2.724-2.724c0.196 0.094 0.415 0.147 0.646 0.147 0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5-1.5 0.673-1.5 1.5c0 0.231 0.053 0.45 0.147 0.646l-2.724 2.724 1.493-5.973 4.442-1.332 2.078 2.078-1.332 4.442zM5 14.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 12c-0.276 0-0.5-0.224-0.5-0.5 0-2.481-2.019-4.5-4.5-4.5-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c3.033 0 5.5 2.467 5.5 5.5 0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 12c-0.276 0-0.5-0.224-0.5-0.5 0-4.136-3.364-7.5-7.5-7.5-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c2.27 0 4.405 0.884 6.010 2.49s2.49 3.74 2.49 6.010c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.5 12c-0.276 0-0.5-0.224-0.5-0.5 0-5.79-4.71-10.5-10.5-10.5-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c1.552 0 3.058 0.304 4.476 0.904 1.369 0.579 2.599 1.408 3.655 2.464s1.885 2.286 2.464 3.655c0.6 1.418 0.904 2.924 0.904 4.476 0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  })));
}

LiniBlog.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBlog;