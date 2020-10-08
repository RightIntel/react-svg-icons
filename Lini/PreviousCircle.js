var React = require('react');

var PropTypes = require('prop-types');

function LiniPreviousCircle({
  size,
  ...props
}) {
  var className = 'Component Lini LiniPreviousCircle';

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
    d: "M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5c4.687 0 8.5-3.813 8.5-8.5s-3.813-8.5-8.5-8.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 16c-0.115 0-0.228-0.040-0.32-0.116l-6-5c-0.114-0.095-0.18-0.236-0.18-0.384s0.066-0.289 0.18-0.384l6-5c0.149-0.124 0.357-0.151 0.532-0.069s0.288 0.259 0.288 0.453v10c0 0.194-0.112 0.371-0.288 0.453-0.068 0.032-0.14 0.047-0.212 0.047zM7.281 10.5l4.719 3.932v-7.865l-4.719 3.932z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 15c-0.276 0-0.5-0.224-0.5-0.5v-8c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v8c0 0.276-0.224 0.5-0.5 0.5z"
  })));
}

LiniPreviousCircle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPreviousCircle;