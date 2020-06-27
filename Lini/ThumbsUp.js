function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniThumbsUp({
  size,
  ...props
}) {
  let className = 'Component Lini LiniThumbsUp';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.916 11.208c.443-.511.695-1.355.695-2.159 0-.531-.115-.996-.333-1.345A1.46 1.46 0 0018 7h-2.618c1.425-2.591 1.785-4.543 1.07-5.807C15.953.312 15.039 0 14.407 0a.5.5 0 00-.495.433c-.179 1.319-1.188 2.893-2.768 4.318a15.544 15.544 0 01-5.286 3.11 1.502 1.502 0 00-1.356-.86h-3c-.827 0-1.5.673-1.5 1.5v9c0 .827.673 1.5 1.5 1.5h3c.634 0 1.176-.395 1.396-.952 1.961.246 2.699.64 3.414 1.022.895.478 1.739.93 4.503.93.72 0 1.398-.188 1.91-.529.5-.333.82-.801.926-1.343.399-.162.753-.536 1.024-1.092.264-.541.435-1.232.435-1.761 0-.099-.006-.19-.017-.274.253-.186.48-.473.667-.851a4.32 4.32 0 00.432-1.826c0-.424-.079-.777-.234-1.051l-.039-.065zM4.5 18h-3a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v9a.5.5 0 01-.5.5zm13.839-7.726c-.151.304-.304.414-.37.414a.5.5 0 000 1c.042 0 .072 0 .117.078.066.117.104.32.104.558 0 .445-.126.974-.328 1.382-.198.399-.399.544-.487.544a.5.5 0 00-.269.922c.031.317-.117 1.165-.501 1.718-.145.209-.298.329-.418.329a.5.5 0 00-.5.5c0 .88-.972 1.281-1.875 1.281-2.513 0-3.217-.376-4.032-.812-.762-.407-1.618-.865-3.781-1.134V8.867a16.545 16.545 0 005.812-3.373c1.593-1.436 2.639-2.988 2.994-4.426.272.087.579.271.776.618.334.59.584 2.096-1.493 5.557a.5.5 0 00.429.758H18c.199 0 .327.07.43.234.117.187.181.477.181.815 0 .424-.102.882-.272 1.225z"
  })));
}
LiniThumbsUp.propTypes = {
  size: PropTypes.number.isRequired
};