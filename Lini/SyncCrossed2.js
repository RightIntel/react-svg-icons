var React = require('react');

var PropTypes = require('prop-types');

function LiniSyncCrossed2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniSyncCrossed2';

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
  }, /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M19.854 8.646c-0.195-0.195-0.512-0.195-0.707 0l-1.149 1.149c-0.051-2.060-0.878-3.99-2.341-5.452-0.017-0.017-0.033-0.033-0.050-0.049l1.271-1.467c0.181-0.209 0.158-0.524-0.050-0.705s-0.524-0.158-0.705 0.050l-1.27 1.466c-1.387-1.062-3.075-1.638-4.852-1.638-2.974 0-5.686 1.635-7.077 4.266-0.129 0.244-0.036 0.547 0.208 0.676s0.547 0.036 0.676-0.208c1.217-2.303 3.59-3.734 6.193-3.734 1.571 0 3.024 0.521 4.193 1.398l-9.142 10.548c-1.267-1.267-2.052-3.017-2.052-4.946v-1c0-0.202-0.122-0.385-0.309-0.462s-0.402-0.035-0.545 0.108l-2 2c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l1.149-1.149c0.051 2.060 0.878 3.99 2.341 5.452 0.017 0.017 0.033 0.033 0.050 0.049l-1.271 1.467c-0.181 0.209-0.158 0.524 0.050 0.705 0.095 0.082 0.211 0.122 0.327 0.122 0.14 0 0.279-0.058 0.378-0.173l1.27-1.466c1.387 1.062 3.075 1.638 4.852 1.638 2.974 0 5.686-1.635 7.077-4.266 0.129-0.244 0.036-0.547-0.208-0.676s-0.547-0.036-0.676 0.208c-1.217 2.303-3.59 3.734-6.193 3.734-1.572 0-3.024-0.521-4.193-1.398l9.142-10.548c1.267 1.267 2.052 3.017 2.052 4.946v1c0 0.202 0.122 0.385 0.309 0.462 0.062 0.026 0.127 0.038 0.191 0.038 0.13 0 0.258-0.051 0.354-0.146l2-2c0.195-0.195 0.195-0.512 0-0.707z"
  }, pathProps))));
}

LiniSyncCrossed2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSyncCrossed2;