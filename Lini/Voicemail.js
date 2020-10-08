var React = require('react');

var PropTypes = require('prop-types');

function LiniVoicemail({
  size,
  ...props
}) {
  var className = 'Component Lini LiniVoicemail';

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
    d: "M15 6c-2.206 0-4 1.794-4 4 0 1.194 0.526 2.266 1.357 3h-5.715c0.832-0.734 1.357-1.806 1.357-3 0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4h11c2.206 0 4-1.794 4-4s-1.794-4-4-4zM1 10c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zM15 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z",
    fill: "#000000"
  })));
}

LiniVoicemail.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniVoicemail;