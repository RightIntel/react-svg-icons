var React = require('react');

var PropTypes = require('prop-types');

function LiniRank({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniRank';

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
    d: "M18.5 16c-0.082 0-0.165-0.020-0.242-0.063l-8.757-4.865-8.757 4.865c-0.241 0.134-0.546 0.047-0.68-0.194s-0.047-0.546 0.194-0.68l9-5c0.151-0.084 0.335-0.084 0.486 0l9 5c0.241 0.134 0.328 0.438 0.194 0.68-0.091 0.164-0.262 0.257-0.438 0.257z",
    fill: color
  })));
}

LiniRank.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniRank;