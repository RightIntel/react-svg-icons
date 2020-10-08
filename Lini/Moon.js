var React = require('react');

var PropTypes = require('prop-types');

function LiniMoon({
  size,
  ...props
}) {
  var className = 'Component Lini LiniMoon';

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
    d: "M10.339 20c-2.762 0-5.358-1.076-7.311-3.028s-3.028-4.549-3.028-7.311 1.075-5.358 3.028-7.311c1.016-1.016 2.205-1.795 3.534-2.316 0.198-0.077 0.423-0.022 0.561 0.139s0.161 0.391 0.056 0.575c-0.946 1.652-1.334 3.609-1.093 5.509 0.248 1.96 1.12 3.737 2.52 5.138 1.671 1.671 3.892 2.591 6.254 2.591 1.542 0 3.060-0.402 4.391-1.164 0.184-0.105 0.415-0.083 0.576 0.055s0.216 0.363 0.139 0.561c-0.521 1.329-1.3 2.518-2.316 3.534-1.953 1.953-4.549 3.028-7.311 3.028zM5.687 1.56c-0.709 0.407-1.362 0.908-1.951 1.497-1.764 1.764-2.735 4.109-2.735 6.604s0.971 4.84 2.735 6.604c1.764 1.764 4.109 2.735 6.603 2.735s4.839-0.971 6.603-2.735c0.588-0.589 1.089-1.241 1.496-1.95-1.135 0.441-2.35 0.671-3.578 0.671-2.63 0-5.103-1.024-6.962-2.884-1.559-1.559-2.529-3.537-2.805-5.719-0.206-1.631 0.004-3.3 0.594-4.822z"
  })));
}

LiniMoon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMoon;