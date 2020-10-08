var React = require('react');

var PropTypes = require('prop-types');

function LiniTrophy({
  size,
  ...props
}) {
  var className = 'Component Lini LiniTrophy';

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
    d: "M16.423 11.563c1.148-1.047 2.577-2.349 2.577-4.563 0-1.103-0.897-2-2-2-0.38 0-0.735 0.106-1.038 0.291 0.030-0.746 0.038-1.366 0.038-1.791 0-0.538-0.337-1.301-1.94-1.884-1.092-0.397-2.534-0.616-4.060-0.616s-2.968 0.219-4.060 0.616c-1.603 0.583-1.94 1.346-1.94 1.884 0 0.425 0.007 1.045 0.038 1.791-0.303-0.185-0.658-0.291-1.038-0.291-1.103 0-2 0.897-2 2 0 2.214 1.429 3.517 2.577 4.563 0.763 0.696 1.423 1.297 1.423 1.937 0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5c0 0.827 0.673 1.5 1.5 1.5 0.483 0 0.913-0.23 1.188-0.585 0.281 0.655 0.594 1.222 0.939 1.697 0.911 1.253 2.046 1.889 3.373 1.889s2.462-0.635 3.373-1.889c0.345-0.474 0.658-1.042 0.939-1.697 0.275 0.356 0.705 0.585 1.188 0.585 0.827 0 1.5-0.673 1.5-1.5 0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.64 0.659-1.241 1.423-1.937zM6.282 2.556c0.985-0.358 2.306-0.556 3.718-0.556s2.733 0.197 3.718 0.556c0.885 0.322 1.282 0.706 1.282 0.944s-0.396 0.622-1.282 0.944c-0.985 0.358-2.306 0.556-3.718 0.556s-2.733-0.197-3.718-0.556c-0.885-0.322-1.282-0.706-1.282-0.944s0.396-0.622 1.282-0.944zM2 7c0-0.551 0.449-1 1-1s1 0.449 1 1c0 0.445-0.293 0.896-0.667 1.029-0.26 0.092-0.397 0.378-0.305 0.638s0.378 0.397 0.638 0.305c0.232-0.082 0.445-0.214 0.629-0.383 0.105 0.878 0.245 1.788 0.434 2.678-0.155-0.148-0.316-0.294-0.479-0.443-1.107-1.009-2.251-2.052-2.251-3.824zM12.564 15.523c-0.722 0.994-1.561 1.477-2.564 1.477s-1.842-0.483-2.564-1.477c-0.644-0.886-1.174-2.163-1.575-3.797-0.58-2.362-0.774-4.994-0.835-6.767 0.246 0.148 0.547 0.291 0.914 0.425 1.092 0.397 2.534 0.616 4.060 0.616s2.968-0.219 4.060-0.616c0.368-0.134 0.668-0.277 0.914-0.425-0.061 1.773-0.254 4.406-0.835 6.767-0.402 1.633-0.931 2.911-1.575 3.797zM15.27 11.267c0.189-0.89 0.33-1.801 0.434-2.678 0.184 0.168 0.397 0.301 0.629 0.383 0.26 0.092 0.546-0.044 0.638-0.305s-0.044-0.546-0.305-0.638c-0.374-0.132-0.667-0.584-0.667-1.029 0-0.551 0.449-1 1-1s1 0.449 1 1c0 1.772-1.144 2.816-2.251 3.824-0.163 0.148-0.324 0.295-0.479 0.443z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 20c-1.001 0-1.95-0.17-2.672-0.48-1.156-0.495-1.328-1.165-1.328-1.52 0-0.287 0.108-0.57 0.314-0.818 0.176-0.213 0.491-0.243 0.704-0.068s0.243 0.491 0.068 0.704c-0.056 0.068-0.085 0.13-0.085 0.182 0 0.353 1.139 1 3 1s3-0.647 3-1c0-0.052-0.029-0.114-0.085-0.182-0.176-0.213-0.145-0.528 0.068-0.704s0.528-0.146 0.704 0.068c0.205 0.249 0.314 0.532 0.314 0.818 0 0.355-0.173 1.025-1.328 1.52-0.722 0.309-1.671 0.48-2.672 0.48z"
  })));
}

LiniTrophy.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTrophy;