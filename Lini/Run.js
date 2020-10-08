var React = require('react');

var PropTypes = require('prop-types');

function LiniRun({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniRun';

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
    d: "M13 4c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM13 1c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 20c-0.062 0-0.125-0.012-0.186-0.036-0.256-0.103-0.381-0.394-0.279-0.65l1.878-4.694-2.767-2.767c-0.152-0.152-0.19-0.385-0.094-0.577l2.638-5.276h-3.040l-2.874 1.916c-0.23 0.153-0.54 0.091-0.693-0.139s-0.091-0.54 0.139-0.693l3-2c0.082-0.055 0.179-0.084 0.277-0.084h4c0.173 0 0.334 0.090 0.425 0.237s0.099 0.331 0.022 0.486l-2.839 5.678 2.745 2.745c0.141 0.141 0.185 0.354 0.111 0.539l-2 5c-0.078 0.195-0.266 0.314-0.464 0.314z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 16h-4.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4.25l1.35-1.8c0.166-0.221 0.479-0.266 0.7-0.1s0.266 0.479 0.1 0.7l-1.5 2c-0.094 0.126-0.243 0.2-0.4 0.2z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 10h-4c-0.189 0-0.363-0.107-0.447-0.276l-1-2c-0.123-0.247-0.023-0.547 0.224-0.671s0.547-0.023 0.671 0.224l0.862 1.724h3.691c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  })));
}

LiniRun.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniRun;