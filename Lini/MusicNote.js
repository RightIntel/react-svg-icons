var React = require('react');

var PropTypes = require('prop-types');

function LiniMusicNote({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniMusicNote';

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
    d: "M13.5 5c-1.378 0-2.5-1.122-2.5-2.5 0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v12.399c-0.136-0.092-0.286-0.179-0.448-0.26-0.824-0.412-1.907-0.639-3.052-0.639s-2.228 0.227-3.052 0.639c-0.934 0.467-1.448 1.128-1.448 1.861s0.514 1.395 1.448 1.861c0.824 0.412 1.907 0.639 3.052 0.639s2.228-0.227 3.052-0.639c0.934-0.467 1.448-1.128 1.448-1.861v-11.553c0.636 0.649 1.522 1.053 2.5 1.053 1.378 0 2.5 1.122 2.5 2.5 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.93-1.57-3.5-3.5-3.5zM6.5 18c-2.003 0-3.5-0.792-3.5-1.5s1.497-1.5 3.5-1.5 3.5 0.792 3.5 1.5-1.497 1.5-3.5 1.5z",
    fill: color
  })));
}

LiniMusicNote.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMusicNote;