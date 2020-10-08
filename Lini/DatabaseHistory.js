var React = require('react');

var PropTypes = require('prop-types');

function LiniDatabaseHistory({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniDatabaseHistory';

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
    d: "M18.067 1.609c-0.497-0.326-1.193-0.615-2.069-0.858-1.742-0.484-4.050-0.75-6.498-0.75s-4.756 0.267-6.498 0.75c-0.877 0.243-1.573 0.532-2.069 0.858-0.619 0.407-0.933 0.874-0.933 1.391v12c0 0.882 0.897 1.606 2.665 2.151 1.522 0.469 3.588 0.765 5.819 0.834 0.005 0 0.010 0 0.016 0 0.269 0 0.491-0.214 0.499-0.485 0.008-0.276-0.208-0.507-0.484-0.515-2.144-0.066-4.117-0.346-5.556-0.79-1.547-0.477-1.96-0.976-1.96-1.195v-2.565c0.353 0.221 0.798 0.424 1.335 0.609 1.31 0.45 3.134 0.768 5.134 0.894 0.011 0.001 0.021 0.001 0.032 0.001 0.262 0 0.482-0.204 0.499-0.469 0.017-0.276-0.192-0.513-0.468-0.531-1.914-0.121-3.644-0.419-4.872-0.841-1.31-0.45-1.66-0.902-1.66-1.098v-2.565c0.423 0.265 0.978 0.504 1.665 0.716 1.522 0.469 3.588 0.765 5.819 0.834 0.005 0 0.010 0 0.016 0 0.269 0 0.491-0.214 0.499-0.485 0.008-0.276-0.208-0.507-0.484-0.515-2.144-0.066-4.117-0.346-5.556-0.79-1.547-0.477-1.96-0.976-1.96-1.195v-2.566c0.492 0.309 1.164 0.583 2.002 0.816 1.742 0.484 4.050 0.75 6.498 0.75s4.756-0.267 6.498-0.75c0.838-0.233 1.511-0.507 2.002-0.816v3.066c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4.5c0-0.517-0.314-0.985-0.933-1.391zM15.73 4.286c-1.658 0.46-3.87 0.714-6.23 0.714s-4.573-0.254-6.23-0.714c-1.795-0.499-2.27-1.059-2.27-1.286s0.474-0.787 2.27-1.286c1.657-0.46 3.87-0.714 6.23-0.714s4.573 0.254 6.23 0.714c1.795 0.499 2.27 1.059 2.27 1.286s-0.474 0.787-2.27 1.286z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 14c-0.076 0-0.152-0.017-0.223-0.053l-2-1c-0.247-0.123-0.347-0.424-0.224-0.671s0.424-0.347 0.671-0.224l1.678 0.839 1.745-1.745c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-2 2c-0.096 0.096-0.224 0.146-0.354 0.146z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 19c-3.033 0-5.5-2.467-5.5-5.5s2.467-5.5 5.5-5.5 5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5zM14.5 9c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z",
    fill: color
  })));
}

LiniDatabaseHistory.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniDatabaseHistory;