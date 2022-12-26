import React from "react";
import PropTypes from "prop-types";

export default function LiniCube({
  size = 20,
  color = "",
  className = "",
  ...moreProps
}) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      className={`Component Lini LiniCube ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M18.998 4.455c-0-0.005-0.001-0.009-0.002-0.014-0.001-0.011-0.003-0.021-0.005-0.032-0.001-0.005-0.002-0.009-0.003-0.014-0.003-0.014-0.006-0.027-0.010-0.040-0.002-0.005-0.003-0.010-0.005-0.014-0.003-0.009-0.006-0.018-0.010-0.026-0.002-0.006-0.004-0.011-0.007-0.016-0.004-0.009-0.008-0.018-0.013-0.026-0.002-0.004-0.004-0.008-0.006-0.012-0.007-0.012-0.014-0.024-0.021-0.035-0.002-0.004-0.005-0.007-0.008-0.011-0.006-0.009-0.012-0.017-0.019-0.025-0.003-0.003-0.006-0.007-0.008-0.010-0.008-0.010-0.017-0.019-0.026-0.029-0.001-0.001-0.002-0.002-0.003-0.003-0.010-0.010-0.021-0.020-0.032-0.029-0.003-0.003-0.006-0.005-0.009-0.007-0.008-0.007-0.017-0.013-0.025-0.019-0.004-0.003-0.008-0.006-0.012-0.008-0.009-0.006-0.018-0.012-0.028-0.017-0.003-0.002-0.007-0.004-0.010-0.006-0.011-0.006-0.022-0.011-0.033-0.016l-0.007-0.003c-0.001-0-0.001-0.001-0.002-0.001l-8.991-3.996c-0.129-0.057-0.277-0.057-0.406 0l-8.991 3.996c-0.001 0-0.001 0.001-0.002 0.001l-0.007 0.003c-0.011 0.005-0.022 0.011-0.033 0.016-0.003 0.002-0.007 0.004-0.010 0.006-0.010 0.005-0.019 0.011-0.028 0.017-0.004 0.003-0.008 0.005-0.012 0.008-0.009 0.006-0.017 0.013-0.026 0.019-0.003 0.002-0.006 0.005-0.009 0.007-0.011 0.009-0.022 0.019-0.032 0.029-0.001 0.001-0.002 0.002-0.003 0.003-0.009 0.009-0.018 0.019-0.026 0.029-0.003 0.003-0.006 0.007-0.008 0.010-0.007 0.008-0.013 0.017-0.019 0.025-0.003 0.004-0.005 0.007-0.008 0.011-0.008 0.011-0.015 0.023-0.021 0.035-0.002 0.004-0.004 0.008-0.006 0.012-0.004 0.009-0.009 0.018-0.013 0.027-0.002 0.005-0.005 0.011-0.007 0.016-0.004 0.009-0.007 0.018-0.010 0.027-0.002 0.005-0.003 0.010-0.005 0.014-0.004 0.013-0.007 0.027-0.010 0.040-0.001 0.005-0.002 0.009-0.003 0.014-0.002 0.011-0.004 0.021-0.005 0.032-0.001 0.005-0.001 0.009-0.002 0.014-0.001 0.015-0.002 0.030-0.002 0.045v11c0 0.198 0.116 0.377 0.297 0.457l9 4c0.001 0 0.002 0.001 0.003 0.001 0.013 0.006 0.026 0.011 0.040 0.015 0.003 0.001 0.005 0.002 0.008 0.003 0.015 0.005 0.031 0.009 0.047 0.013 0.001 0 0.002 0 0.002 0.001 0.033 0.007 0.068 0.011 0.103 0.011s0.070-0.004 0.103-0.011c0.001-0 0.002-0 0.002-0.001 0.016-0.003 0.032-0.008 0.047-0.013 0.003-0.001 0.005-0.002 0.008-0.003 0.014-0.005 0.027-0.010 0.040-0.015 0.001-0 0.002-0.001 0.003-0.001l9-4c0.181-0.080 0.297-0.259 0.297-0.457v-11c0-0.015-0.001-0.030-0.002-0.045zM9.5 1.047l7.769 3.453-7.769 3.453-7.769-3.453 7.769-3.453zM1 5.269l8 3.556v9.906l-8-3.556v-9.906zM10 18.731v-9.906l8-3.556v9.906l-8 3.556z" />
      </g>
    </svg>
  );
}

LiniCube.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
