var React = require('react');

var PropTypes = require('prop-types');

function LiniShuffle({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniShuffle';

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
    d: "M15.5 17c-0.209 0-0.404-0.132-0.474-0.342-0.087-0.262 0.054-0.545 0.316-0.632l0.847-0.282c-3.262-0.766-5.195-3.129-7.075-5.427-2.237-2.734-4.35-5.317-8.613-5.317-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c4.737 0 7.101 2.889 9.387 5.683 2.237 2.734 4.35 5.317 8.613 5.317 0.245 0 0.454 0.178 0.494 0.42s-0.103 0.477-0.335 0.554l-3 1c-0.052 0.017-0.106 0.026-0.158 0.026z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.755 9c-0.117 0-0.234-0.041-0.329-0.124-0.208-0.182-0.229-0.498-0.047-0.706 1.491-1.703 3.228-3.305 5.811-3.913l-0.849-0.283c-0.262-0.087-0.404-0.37-0.316-0.632s0.37-0.404 0.632-0.316l3 1c0.233 0.078 0.375 0.312 0.335 0.554s-0.248 0.42-0.494 0.42c-3.333 0-5.356 1.531-7.368 3.829-0.099 0.113-0.237 0.171-0.376 0.171z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0.5 16c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c3.333 0 5.356-1.531 7.368-3.829 0.182-0.208 0.498-0.229 0.706-0.047s0.229 0.498 0.047 0.706c-1.896 2.166-4.193 4.171-8.121 4.171z",
    fill: color
  })));
}

LiniShuffle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniShuffle;