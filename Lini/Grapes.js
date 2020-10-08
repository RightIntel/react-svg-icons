var React = require('react');

var PropTypes = require('prop-types');

function LiniGrapes({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniGrapes';

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
    d: "M18.614 14.472c0.251-0.446 0.386-0.952 0.386-1.472 0-1.061-0.553-1.994-1.386-2.528 0.251-0.446 0.386-0.952 0.386-1.472 0-1.654-1.346-3-3-3-0.534 0-1.037 0.141-1.472 0.387-0.495-0.772-1.328-1.287-2.252-1.373 0.038-0.045 0.076-0.091 0.114-0.139 1.053-1.316 1.61-2.829 1.61-4.375 0-0.166-0.082-0.321-0.22-0.414s-0.312-0.112-0.466-0.050c-0.629 0.252-1.664 0.173-2.76 0.090-1.826-0.138-3.895-0.295-5.245 0.957-0.871 0.807-1.299 2.061-1.309 3.83-0.248 0.323-0.462 0.668-0.639 1.033-0.355-0.536-0.648-1.145-0.877-1.825-0.475-1.41-0.484-2.609-0.484-2.621-0-0.276-0.224-0.499-0.5-0.499s-0.5 0.224-0.5 0.5c0 0.054 0.006 1.349 0.526 2.908 0.364 1.092 0.892 2.041 1.563 2.825 0.021 0.031 0.046 0.059 0.073 0.084 0.271 0.307 0.565 0.588 0.88 0.84-1.186 0.401-2.042 1.524-2.042 2.843 0 1.032 0.538 1.984 1.387 2.528-0.246 0.435-0.387 0.937-0.387 1.472 0 1.654 1.346 3 3 3 0.52 0 1.026-0.135 1.472-0.386 0.534 0.833 1.467 1.386 2.528 1.386 0.753 0 1.457-0.273 2.002-0.764 0.531 0.475 1.231 0.764 1.998 0.764 0.52 0 1.026-0.135 1.472-0.386 0.534 0.833 1.467 1.386 2.528 1.386 1.654 0 3-1.346 3-3 0-1.061-0.553-1.994-1.386-2.528zM17.684 14.079c-0.22-0.051-0.449-0.079-0.684-0.079-0.534 0-1.037 0.141-1.472 0.387-0.36-0.561-0.898-0.987-1.52-1.21-0.005-0.059-0.008-0.117-0.008-0.176 0-1.103 0.897-2 2-2s2 0.897 2 2c0 0.385-0.111 0.759-0.316 1.079zM7.023 13.746c-0.622-0.35-1.023-1.018-1.023-1.746 0-1.103 0.897-2 2-2 0.521 0 1.007 0.197 1.376 0.548-0.239 0.431-0.376 0.926-0.376 1.452 0 0.348 0.061 0.688 0.175 1.005-0.058-0.003-0.116-0.005-0.175-0.005-0.757 0-1.449 0.282-1.977 0.746zM5.008 8.176c-0.005-0.059-0.008-0.117-0.008-0.176 0-1.103 0.897-2 2-2 0.521 0 1.007 0.197 1.376 0.548-0.239 0.431-0.376 0.926-0.376 1.452 0 0.348 0.061 0.688 0.175 1.005-0.058-0.003-0.116-0.005-0.175-0.005-0.534 0-1.037 0.141-1.472 0.387-0.36-0.561-0.898-0.987-1.52-1.21zM11.023 13.746c-0.061-0.034-0.12-0.072-0.177-0.112-0.029-0.023-0.058-0.045-0.088-0.066-0.469-0.374-0.758-0.949-0.758-1.567 0-1.103 0.897-2 2-2 0.728 0 1.396 0.401 1.746 1.023-0.464 0.528-0.746 1.22-0.746 1.977-0.757 0-1.449 0.282-1.977 0.746zM17 9c0 0.385-0.111 0.759-0.316 1.079-0.22-0.051-0.449-0.079-0.684-0.079-0.534 0-1.037 0.141-1.472 0.387-0.36-0.561-0.898-0.987-1.52-1.21-0.005-0.059-0.008-0.117-0.008-0.176 0-1.103 0.897-2 2-2s2 0.897 2 2zM12.746 7.023c-0.464 0.528-0.746 1.22-0.746 1.977-0.757 0-1.449 0.282-1.977 0.746-0.061-0.034-0.12-0.072-0.177-0.112-0.029-0.023-0.058-0.045-0.088-0.066-0.469-0.374-0.758-0.949-0.758-1.567 0-1.103 0.897-2 2-2 0.728 0 1.396 0.401 1.746 1.023zM6.141 3.71c1.259-0.584 2.4-0.712 2.411-0.713 0.275-0.029 0.474-0.275 0.445-0.549s-0.275-0.474-0.549-0.445c-0.052 0.005-1.292 0.141-2.697 0.787-0.626 0.287-1.185 0.632-1.674 1.026 0.132-0.896 0.433-1.555 0.912-1.999 1.030-0.955 2.789-0.822 4.49-0.693 0.896 0.068 1.756 0.133 2.484 0.027-0.127 1.086-0.573 2.117-1.333 3.075-0.591 0.745-1.191 1.204-1.36 1.326-0.006 0.004-0.011 0.008-0.017 0.012-0.019 0.013-0.029 0.021-0.030 0.021-0.018 0.012-0.034 0.025-0.050 0.039-0.059 0.045-0.116 0.092-0.171 0.142-0.545-0.491-1.249-0.764-2.002-0.764-1.533 0-2.801 1.156-2.978 2.641-0.346-0.235-0.664-0.505-0.954-0.808 0.502-1.359 1.535-2.409 3.074-3.123zM4 9c0.728 0 1.396 0.401 1.746 1.023-0.464 0.528-0.746 1.22-0.746 1.977-0.757 0-1.449 0.282-1.977 0.746-0.622-0.35-1.023-1.018-1.023-1.746 0-1.103 0.897-2 2-2zM5 17c-1.103 0-2-0.897-2-2s0.897-2 2-2c0.059 0 0.118 0.003 0.176 0.008 0.224 0.622 0.649 1.16 1.21 1.52-0.246 0.435-0.387 0.937-0.387 1.472 0 0.235 0.027 0.464 0.079 0.684-0.32 0.205-0.694 0.316-1.079 0.316zM7 16c0-1.103 0.897-2 2-2 0.521 0 1.007 0.197 1.376 0.548-0.239 0.431-0.376 0.926-0.376 1.452s0.136 1.022 0.376 1.452c-0.369 0.351-0.855 0.548-1.376 0.548-1.103 0-2-0.897-2-2zM13 18c-1.103 0-2-0.897-2-2s0.897-2 2-2c0.728 0 1.396 0.401 1.746 1.023-0.464 0.528-0.746 1.22-0.746 1.977 0 0.235 0.027 0.464 0.079 0.684-0.32 0.205-0.694 0.316-1.079 0.316zM17 19c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2z",
    fill: color
  })));
}

LiniGrapes.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniGrapes;