var React = require('react');

var PropTypes = require('prop-types');

function LiniSortTimeDesc({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniSortTimeDesc';

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
    d: "M8.854 14.646c-0.195-0.195-0.512-0.195-0.707 0l-3.146 3.146v-17.293c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v17.293l-3.146-3.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l4 4c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l4-4c0.195-0.195 0.195-0.512 0-0.707z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 15c-0.183 0-0.36-0.101-0.448-0.277-0.123-0.247-0.023-0.547 0.224-0.671l0.597-0.298c-2.241-0.695-3.873-2.788-3.873-5.254 0-3.033 2.467-5.5 5.5-5.5s5.5 2.467 5.5 5.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-2.481-2.019-4.5-4.5-4.5s-4.5 2.019-4.5 4.5c0 2.481 2.019 4.5 4.5 4.5 0.232 0 0.433 0.159 0.487 0.385s-0.056 0.458-0.263 0.562l-2 1c-0.072 0.036-0.148 0.053-0.223 0.053z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 10c-0.076 0-0.152-0.017-0.223-0.053l-2-1c-0.247-0.123-0.347-0.424-0.224-0.671s0.424-0.347 0.671-0.224l1.678 0.839 1.745-1.745c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-2 2c-0.096 0.096-0.224 0.146-0.354 0.146z",
    fill: color
  })));
}

LiniSortTimeDesc.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSortTimeDesc;