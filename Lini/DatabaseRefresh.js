var React = require('react');

var PropTypes = require('prop-types');

function LiniDatabaseRefresh({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniDatabaseRefresh';

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
    d: "M17.521 18.169c-0.183-0.207-0.499-0.227-0.706-0.044-0.639 0.564-1.461 0.875-2.315 0.875-1.858 0-3.382-1.456-3.493-3.286l0.14 0.14c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-1-1c-0.195-0.195-0.512-0.195-0.707 0l-1 1c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l0.151-0.151c0.106 2.388 2.082 4.298 4.495 4.298 1.097 0 2.154-0.4 2.976-1.125 0.207-0.183 0.227-0.499 0.044-0.706z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.854 15.146c-0.195-0.195-0.512-0.195-0.707 0l-0.151 0.151c-0.106-2.388-2.082-4.298-4.495-4.298-1.097 0-2.154 0.399-2.976 1.125-0.207 0.183-0.227 0.499-0.044 0.706s0.499 0.227 0.706 0.044c0.639-0.564 1.461-0.875 2.315-0.875 1.858 0 3.382 1.456 3.493 3.286l-0.14-0.14c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l1 1c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l1-1c0.195-0.195 0.195-0.512 0-0.707z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.067 1.609c-0.497-0.326-1.193-0.615-2.069-0.858-1.742-0.484-4.050-0.75-6.498-0.75s-4.756 0.267-6.498 0.75c-0.877 0.243-1.573 0.532-2.069 0.858-0.619 0.407-0.933 0.874-0.933 1.391v12c0 0.882 0.897 1.606 2.665 2.151 1.522 0.469 3.588 0.765 5.819 0.834 0.005 0 0.010 0 0.016 0 0.269 0 0.491-0.214 0.499-0.485 0.008-0.276-0.208-0.507-0.484-0.515-2.144-0.066-4.117-0.346-5.556-0.79-1.547-0.477-1.96-0.976-1.96-1.195v-2.565c0.423 0.265 0.978 0.504 1.665 0.716 1.522 0.469 3.588 0.765 5.819 0.834 0.005 0 0.010 0 0.016 0 0.269 0 0.491-0.214 0.499-0.485 0.008-0.276-0.208-0.507-0.484-0.515-2.144-0.066-4.117-0.346-5.556-0.79-1.547-0.477-1.96-0.976-1.96-1.195v-2.566c0.492 0.309 1.164 0.583 2.002 0.816 1.742 0.484 4.050 0.75 6.498 0.75s4.756-0.267 6.498-0.75c0.838-0.233 1.511-0.507 2.002-0.816v2.566c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-8c0-0.517-0.314-0.985-0.933-1.391zM3.27 1.714c1.658-0.46 3.87-0.714 6.23-0.714s4.573 0.254 6.23 0.714c1.795 0.499 2.27 1.059 2.27 1.286s-0.474 0.787-2.27 1.286c-1.658 0.46-3.87 0.714-6.23 0.714s-4.573-0.254-6.23-0.714c-1.795-0.499-2.27-1.059-2.27-1.286s0.474-0.787 2.27-1.286zM15.73 8.286c-1.658 0.46-3.87 0.714-6.23 0.714s-4.573-0.254-6.23-0.714c-1.795-0.499-2.27-1.059-2.27-1.286v-2.566c0.492 0.309 1.164 0.583 2.002 0.816 1.742 0.484 4.050 0.75 6.498 0.75s4.756-0.267 6.498-0.75c0.838-0.233 1.511-0.507 2.002-0.816v2.566c0 0.227-0.474 0.787-2.27 1.286z",
    fill: color
  })));
}

LiniDatabaseRefresh.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniDatabaseRefresh;