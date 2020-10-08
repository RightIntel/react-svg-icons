var React = require('react');

var PropTypes = require('prop-types');

function LiniPineTree({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniPineTree';

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
    d: "M17.874 15.168l-3.245-3.651c0.56-0.183 0.964-0.402 1.225-0.663 0.185-0.185 0.196-0.481 0.026-0.679l-3.107-3.625c0.447-0.191 0.809-0.424 1.081-0.696 0.18-0.18 0.196-0.467 0.037-0.666l-4-5c-0.095-0.119-0.239-0.188-0.39-0.188s-0.296 0.069-0.39 0.188l-4 5c-0.159 0.199-0.143 0.486 0.037 0.666 0.272 0.272 0.634 0.505 1.081 0.696l-3.107 3.625c-0.17 0.198-0.159 0.494 0.026 0.679 0.261 0.261 0.665 0.48 1.225 0.663l-3.245 3.651c-0.096 0.108-0.141 0.253-0.122 0.397s0.099 0.272 0.22 0.352c0.829 0.547 3.902 0.942 6.775 1.049v2.533c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-2.531c1.259-0.044 2.517-0.143 3.648-0.288 1.12-0.144 2.573-0.394 3.13-0.765 0.12-0.080 0.2-0.209 0.219-0.352s-0.026-0.288-0.122-0.396zM10 19h-1v-2.008c0.169 0.002 0.335 0.004 0.5 0.004h0.014c0 0 0 0 0 0 0.161 0 0.323-0.001 0.485-0.003v2.007zM14.52 15.689c-1.537 0.198-3.315 0.307-5.005 0.307-0 0-0 0-0 0h-0.014c-3.112-0.001-5.923-0.367-7.151-0.699l3.308-3.722c0.118-0.133 0.157-0.318 0.102-0.487s-0.195-0.296-0.368-0.334c-0.546-0.12-0.907-0.248-1.143-0.359l3.216-3.752c0.111-0.13 0.148-0.307 0.099-0.47s-0.179-0.29-0.343-0.336c-0.404-0.114-0.747-0.256-1.013-0.42l3.294-4.118 3.294 4.118c-0.267 0.164-0.609 0.306-1.013 0.42-0.164 0.046-0.294 0.173-0.343 0.336s-0.012 0.341 0.099 0.47l3.216 3.752c-0.237 0.111-0.598 0.239-1.143 0.359-0.173 0.038-0.313 0.165-0.368 0.334s-0.016 0.354 0.102 0.487l3.31 3.723c-0.447 0.123-1.145 0.263-2.132 0.391z",
    fill: color
  })));
}

LiniPineTree.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPineTree;