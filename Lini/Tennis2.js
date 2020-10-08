var React = require('react');

var PropTypes = require('prop-types');

function LiniTennis2({
  size,
  ...props
}) {
  var className = 'Component Lini LiniTennis2';

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
    d: "M16.218 3.782c-1.794-1.794-4.18-2.782-6.718-2.782s-4.923 0.988-6.717 2.782-2.782 4.18-2.782 6.717c0 2.538 0.988 4.923 2.782 6.717s4.18 2.782 6.717 2.782 4.923-0.988 6.718-2.782c1.794-1.794 2.782-4.18 2.782-6.717s-0.988-4.923-2.782-6.717zM14 10.5c0-2.019 0.706-3.943 1.997-5.474 1.249 1.48 2.003 3.39 2.003 5.474s-0.754 3.994-2.003 5.474c-1.292-1.531-1.997-3.454-1.997-5.474zM3.003 5.026c1.292 1.531 1.997 3.454 1.997 5.474s-0.706 3.943-1.997 5.474c-1.249-1.48-2.003-3.39-2.003-5.474s0.754-3.994 2.003-5.474zM3.695 16.703c1.49-1.725 2.305-3.908 2.305-6.203s-0.815-4.478-2.305-6.203c1.52-1.424 3.562-2.297 5.805-2.297s4.284 0.873 5.805 2.297c-1.49 1.725-2.305 3.908-2.305 6.203s0.815 4.478 2.305 6.203c-1.52 1.424-3.562 2.297-5.805 2.297s-4.284-0.873-5.805-2.297z"
  })));
}

LiniTennis2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTennis2;