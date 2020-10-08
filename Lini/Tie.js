var React = require('react');

var PropTypes = require('prop-types');

function LiniTie({
  size,
  ...props
}) {
  var className = 'Component Lini LiniTie';

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
    d: "M12.995 17.426l-1.959-13.14c0.296-0.272 0.592-0.62 0.888-1.045 0.557-0.801 0.917-1.591 0.932-1.624 0.18-0.397 0.166-0.805-0.037-1.121s-0.57-0.497-1.005-0.497h-4.625c-0.435 0-0.802 0.181-1.005 0.497s-0.217 0.724-0.037 1.121c0.015 0.033 0.375 0.823 0.932 1.624 0.292 0.42 0.585 0.765 0.877 1.035l-1.948 13.151c-0.028 0.191 0.056 0.382 0.217 0.489l3 2c0.084 0.056 0.181 0.084 0.277 0.084s0.193-0.028 0.277-0.084l3-2c0.161-0.107 0.246-0.298 0.217-0.49zM7.056 1.204c-0.048-0.105-0.037-0.16-0.033-0.166s0.049-0.038 0.165-0.038h4.625c0.116 0 0.161 0.032 0.165 0.038s0.015 0.061-0.033 0.166c-0.306 0.676-1.012 1.884-1.719 2.465-0.025 0.017-0.049 0.035-0.071 0.056-0.224 0.17-0.446 0.274-0.655 0.274-0.428 0-1.009-0.481-1.594-1.319-0.507-0.726-0.847-1.469-0.85-1.476zM9.5 18.899l-2.459-1.639 1.834-12.38c0.209 0.080 0.418 0.12 0.625 0.12 0.203 0 0.408-0.039 0.613-0.116l1.845 12.376-2.459 1.639z"
  })));
}

LiniTie.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTie;