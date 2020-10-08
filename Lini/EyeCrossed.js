var React = require('react');

var PropTypes = require('prop-types');

function LiniEyeCrossed({
  size,
  ...props
}) {
  var className = 'Component Lini LiniEyeCrossed';

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
    d: "M19.872 10.166c-0.047-0.053-1.182-1.305-2.956-2.572-0.6-0.429-1.202-0.807-1.801-1.134l1.725-1.592c0.203-0.187 0.216-0.504 0.028-0.707s-0.504-0.216-0.707-0.028l-2.003 1.849c-0.124-0.056-0.248-0.11-0.372-0.162-1.305-0.544-2.579-0.82-3.786-0.82s-2.481 0.276-3.786 0.82c-1.030 0.429-2.083 1.026-3.13 1.773-1.774 1.267-2.909 2.52-2.956 2.572-0.171 0.19-0.171 0.479 0 0.669 0.047 0.053 1.182 1.305 2.956 2.572 0.6 0.429 1.202 0.807 1.801 1.134l-1.725 1.592c-0.203 0.187-0.216 0.504-0.028 0.707 0.099 0.107 0.233 0.161 0.368 0.161 0.121 0 0.243-0.044 0.339-0.133l2.003-1.849c0.124 0.056 0.248 0.11 0.372 0.162 1.305 0.544 2.579 0.82 3.786 0.82s2.481-0.276 3.786-0.82c1.030-0.429 2.083-1.026 3.13-1.773 1.774-1.267 2.909-2.52 2.956-2.572 0.171-0.19 0.171-0.479 0-0.669zM14 9.5c0 2.206-1.794 4-4 4-0.711 0-1.378-0.187-1.957-0.513l5.592-5.162c0.238 0.517 0.366 1.086 0.366 1.674zM12.574 6.438c0.191 0.161 0.364 0.337 0.52 0.525l-5.867 5.416c-0.756-0.728-1.227-1.75-1.227-2.88 0-1.188 0.519-2.298 1.426-3.062 0.822-0.268 1.691-0.438 2.574-0.438s1.752 0.17 2.574 0.438zM3.683 12.606c-1.157-0.824-2.042-1.658-2.489-2.106 0.447-0.448 1.332-1.281 2.489-2.106 0.53-0.378 1.156-0.78 1.85-1.145-0.347 0.688-0.533 1.455-0.533 2.251 0 1.391 0.571 2.651 1.491 3.558l-0.825 0.762c-0.747-0.383-1.419-0.813-1.983-1.214zM16.317 12.606c-1.533 1.092-3.873 2.394-6.317 2.394-1.166 0-2.309-0.297-3.352-0.726l0.63-0.582c0.784 0.51 1.718 0.808 2.721 0.808 2.757 0 5-2.243 5-5 0-0.796-0.186-1.563-0.533-2.251 0.694 0.365 1.32 0.768 1.85 1.145 1.157 0.824 2.042 1.658 2.489 2.106-0.447 0.448-1.332 1.281-2.489 2.106z",
    fill: "#000000"
  })));
}

LiniEyeCrossed.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniEyeCrossed;