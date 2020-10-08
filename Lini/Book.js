var React = require('react');

var PropTypes = require('prop-types');

function LiniBook({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniBook';

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
    d: "M18.854 4.646c-0.759-0.76-2.486-1.646-4.854-1.646-2.052 0-3.623 0.667-4.5 1.339-0.877-0.672-2.448-1.339-4.5-1.339-2.367 0-4.094 0.887-4.854 1.646-0.094 0.094-0.146 0.221-0.146 0.354v11c0 0.202 0.122 0.385 0.309 0.462s0.402 0.035 0.545-0.108c0.503-0.503 1.942-1.354 4.146-1.354s3.644 0.851 4.146 1.354c0.195 0.195 0.512 0.195 0.707 0 0.503-0.503 1.942-1.354 4.146-1.354s3.644 0.851 4.146 1.354c0.096 0.096 0.223 0.146 0.354 0.146 0.064 0 0.129-0.012 0.191-0.038 0.187-0.077 0.309-0.26 0.309-0.462v-11c0-0.133-0.053-0.26-0.146-0.354zM1 15.004v-9.783c0.604-0.506 1.981-1.22 4-1.22s3.397 0.714 4 1.221v9.783c-0.918-0.542-2.292-1.004-4-1.004s-3.082 0.461-4 1.004zM18 15.004c-0.918-0.542-2.293-1.004-4-1.004s-3.082 0.462-4 1.004v-9.783c0.603-0.506 1.98-1.221 4-1.221s3.396 0.714 4 1.22v9.783z",
    fill: color
  })));
}

LiniBook.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBook;