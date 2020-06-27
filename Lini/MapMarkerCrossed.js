import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMapMarkerCrossed({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMapMarkerCrossed';

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
    d: "M17.815 1.112a.5.5 0 00-.703.073l-1.741 2.143A6.007 6.007 0 0010 0C6.692 0 4 2.692 4 6c0 1.536.298 3.22.884 5.008a26.515 26.515 0 001.433 3.462l-2.206 2.715a.5.5 0 10.776.63l1.93-2.375c1.377 2.562 2.732 4.296 2.789 4.369a.5.5 0 00.786 0c.057-.073 1.418-1.814 2.797-4.385.812-1.513 1.46-2.999 1.925-4.416.587-1.787.884-3.472.884-5.008 0-.552-.075-1.087-.216-1.595l2.104-2.589a.5.5 0 00-.073-.703zM5 6c0-2.757 2.243-5 5-5a5.009 5.009 0 014.664 3.198L12.989 6.26A3.004 3.004 0 0010 3C8.346 3 7 4.346 7 6a3.004 3.004 0 003.866 2.872l-3.851 4.74c-1.031-2.173-2.014-4.945-2.014-7.613zm5 2c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm5-2c0 3.248-1.458 6.652-2.682 8.935A34.38 34.38 0 0110 18.661a34.411 34.411 0 01-2.496-4.065l7.462-9.184c.023.193.035.389.035.587z"
  })));
}
LiniMapMarkerCrossed.propTypes = {
  size: PropTypes.number.isRequired
};