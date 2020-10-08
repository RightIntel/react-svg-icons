var React = require('react');

var PropTypes = require('prop-types');

function LiniGhost({
  size,
  ...props
}) {
  var className = 'Component Lini LiniGhost';

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
    d: "M18.5 20c-1.645 0-2.506-0.413-3.134-0.715-0.344-0.165-0.592-0.285-0.866-0.285-0.349 0-0.638 0.193-0.973 0.416-0.411 0.274-0.876 0.584-1.527 0.584s-1.117-0.31-1.527-0.584c-0.335-0.223-0.624-0.416-0.973-0.416s-0.638 0.193-0.973 0.416c-0.411 0.274-0.876 0.584-1.527 0.584-0.662 0-1.158-0.319-1.595-0.601-0.332-0.214-0.619-0.399-0.905-0.399-0.22 0-0.455 0.112-0.779 0.266-0.651 0.31-1.542 0.734-3.221 0.734-0.276 0-0.5-0.224-0.5-0.5v-9c0-2.538 0.988-4.923 2.783-6.717s4.18-2.783 6.717-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.717v9c0 0.276-0.224 0.5-0.5 0.5zM9.5 18c0.651 0 1.117 0.31 1.527 0.584 0.335 0.223 0.624 0.416 0.973 0.416s0.638-0.193 0.973-0.416c0.411-0.274 0.876-0.584 1.527-0.584 0.501 0 0.889 0.186 1.299 0.383 0.5 0.24 1.108 0.532 2.201 0.601v-8.485c0-4.687-3.813-8.5-8.5-8.5s-8.5 3.813-8.5 8.5v8.485c1.131-0.070 1.767-0.373 2.291-0.622 0.393-0.187 0.763-0.363 1.209-0.363 0.579 0 1.040 0.296 1.446 0.558 0.368 0.237 0.687 0.442 1.054 0.442 0.349 0 0.638-0.193 0.973-0.416 0.411-0.274 0.876-0.584 1.527-0.584z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 10c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM6.5 8c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 10c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM12.5 8c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  })));
}

LiniGhost.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniGhost;