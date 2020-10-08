var React = require('react');

var PropTypes = require('prop-types');

function LiniPencil3({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPencil3';

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
    d: "M19.5 6c0-2.757-2.243-5-5-5-0.753 0-1.478 0.164-2.153 0.486-0.053 0.025-0.099 0.059-0.138 0.098l-0-0-10.563 10.563c-0.077 0.077-0.126 0.176-0.141 0.283l-1 7c-0.022 0.156 0.030 0.313 0.141 0.424 0.094 0.094 0.222 0.146 0.353 0.146 0.023 0 0.047-0.002 0.071-0.005l7-1c0.107-0.015 0.206-0.065 0.283-0.141l10.555-10.555c0-0 0.001-0.001 0.001-0.001l0.007-0.007-0-0c0.039-0.039 0.072-0.085 0.098-0.138 0.323-0.675 0.486-1.4 0.486-2.153zM18.5 6c0 0.575-0.119 1.129-0.354 1.647l-1.15 1.15c-0.105-2.872-2.421-5.188-5.293-5.293l1.15-1.15c0.518-0.235 1.072-0.354 1.647-0.354 2.206 0 4 1.794 4 4zM2.005 16l0.423-2.964c0.189-0.024 0.38-0.036 0.572-0.036 2.481 0 4.5 2.019 4.5 4.5 0 0.191-0.012 0.383-0.036 0.572l-2.964 0.423c-0.003-1.374-1.12-2.492-2.495-2.495zM10.621 4.586c0.288-0.057 0.583-0.086 0.879-0.086 1.061 0 2.037 0.369 2.807 0.986l-7.79 7.79c-0.906-0.755-2.057-1.225-3.315-1.271l7.418-7.418zM7.225 13.982l7.79-7.79c0.616 0.77 0.986 1.746 0.986 2.807 0 0.296-0.029 0.591-0.086 0.879l-7.418 7.418c-0.046-1.258-0.516-2.409-1.271-3.315zM1.861 17.007c0.046-0.004 0.092-0.007 0.139-0.007 0.827 0 1.5 0.673 1.5 1.5 0 0.047-0.002 0.093-0.007 0.139l-1.904 0.272 0.272-1.904z"
  }, pathProps))));
}

LiniPencil3.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPencil3;