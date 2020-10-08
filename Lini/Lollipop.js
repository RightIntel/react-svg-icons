var React = require('react');

var PropTypes = require('prop-types');

function LiniLollipop({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniLollipop';

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
    d: "M9.5 20c-0.276 0-0.5-0.224-0.5-0.5v-6.519c-3.351-0.256-6-3.065-6-6.481 0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5c0 3.416-2.649 6.225-6 6.481v6.519c0 0.276-0.224 0.5-0.5 0.5zM9.5 5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5c3.033 0 5.5-2.467 5.5-5.5s-2.467-5.5-5.5-5.5-5.5 2.467-5.5 5.5c0 1.325 0.471 2.542 1.255 3.493-0.165-0.467-0.255-0.97-0.255-1.493 0-2.481 2.019-4.5 4.5-4.5 1.654 0 3 1.346 3 3s-1.346 3-3 3c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c1.103 0 2-0.897 2-2s-0.897-2-2-2z",
    fill: color
  })));
}

LiniLollipop.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLollipop;