var React = require('react');

var PropTypes = require('prop-types');

function LiniConvex({
  size,
  ...props
}) {
  var className = 'Component Lini LiniConvex';

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
    d: "M9.5 18c-3.514 0-7.923-0.971-8.108-1.012-0.179-0.040-0.322-0.174-0.372-0.351-0.042-0.146-1.019-3.597-1.019-6.137s0.978-5.992 1.019-6.137c0.050-0.176 0.193-0.311 0.372-0.351 0.186-0.041 4.594-1.012 8.108-1.012s7.923 0.971 8.108 1.012c0.179 0.040 0.322 0.174 0.372 0.351 0.042 0.146 1.019 3.597 1.019 6.137s-0.978 5.992-1.019 6.137c-0.050 0.176-0.193 0.311-0.372 0.351-0.186 0.041-4.594 1.012-8.108 1.012zM1.902 16.074c1.049 0.217 4.701 0.926 7.598 0.926 2.899 0 6.549-0.709 7.598-0.926 0.233-0.879 0.902-3.581 0.902-5.574s-0.67-4.696-0.902-5.574c-1.049-0.217-4.701-0.926-7.598-0.926-2.899 0-6.549 0.709-7.598 0.926-0.233 0.879-0.902 3.581-0.902 5.574s0.67 4.696 0.902 5.574z",
    fill: "#000000"
  })));
}

LiniConvex.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniConvex;