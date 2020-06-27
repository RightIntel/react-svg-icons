function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniEarthLock({
  size,
  ...props
}) {
  let className = 'Component Lini LiniEarthLock';

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
    d: "M17.071 2.929A9.934 9.934 0 0010 0c-.893 0-1.778.118-2.631.35a.5.5 0 00.263.965A9.023 9.023 0 0110.001 1c1.578 0 3.061.409 4.352 1.125-.441-.192-.847-.169-1.215-.147-.447.027-.869.052-1.477-.272-1.13-.602-2.048-.811-3.394-.1a.5.5 0 00.467.885c.896-.473 1.424-.452 2.457.099.856.456 1.494.418 2.006.388.429-.026.647-.029.922.158.385.263.585.844.796 1.458.32.932.683 1.988 1.835 2.38.155.053.421.143.61.222-.163.168-.435.411-.702.649-.172.154-.367.328-.583.525-.624.569-.55 1.235-.484 1.822.076.677.154 1.378-.687 2.322-.227.255-.36.61-.501.986-.326.871-.634 1.694-1.946 1.706-.037-.044-.141-.21-.234-.733-.085-.482-.134-1.106-.187-1.765-.08-1.012-.171-2.16-.421-3.112-.32-1.217-.857-1.936-1.641-2.198-.6-.2-1.128-.184-1.521-.147a.5.5 0 00.094.996c.329-.031.692-.04 1.111.1.439.147.763.639.991 1.504s.314 1.966.391 2.936c.064.81.124 1.574.257 2.151.081.35.185.616.32.813.201.294.489.456.811.456.884 0 1.59-.285 2.099-.847.423-.467.639-1.044.813-1.508.102-.273.208-.556.311-.672 1.137-1.277 1.02-2.329.934-3.098-.063-.564-.064-.764.164-.972.212-.193.405-.366.575-.518.363-.324.625-.558.809-.758.126-.138.422-.461.34-.865l-.002-.01c.343.951.53 1.976.53 3.044 0 4.963-4.037 9-9 9a8.987 8.987 0 01-7.934-4.739c.261-.495.754-1.606.525-2.578.016-.097.181-.331.28-.472a3.35 3.35 0 00.34-.554.5.5 0 00-.914-.406c-.046.104-.147.247-.243.384-.247.351-.555.788-.438 1.269.08.327.011.73-.105 1.1a9.031 9.031 0 01-.501-2.574.5.5 0 10-.999.047 9.95 9.95 0 003.077 6.749 9.955 9.955 0 006.912 2.773c2.671 0 5.182-1.04 7.071-2.929s2.929-4.4 2.929-7.071a9.934 9.934 0 00-2.929-7.071zm.001 3.097c-.687-.234-.93-.94-1.211-1.758-.244-.71-.496-1.443-1.095-1.899a9.052 9.052 0 013.631 4.393c-.195-.351-.685-.518-1.325-.736z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 3.086V2.5C6 1.122 4.878 0 3.5 0S1 1.122 1 2.5v.586c-.582.206-1 .762-1 1.414v3C0 8.327.673 9 1.5 9h4C6.327 9 7 8.327 7 7.5v-3c0-.652-.418-1.208-1-1.414zM3.5 1C4.327 1 5 1.673 5 2.5V3H2v-.5C2 1.673 2.673 1 3.5 1zM6 7.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v3z"
  })));
}
LiniEarthLock.propTypes = {
  size: PropTypes.number.isRequired
};