import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniTheater(props = {}) {
  props.name = "Theater";
  
  return (
    <Lini {...props}>
      <path d="M11.5 8c-0.171 0-0.338-0.088-0.431-0.246-0.009-0.014-0.469-0.754-1.069-0.754-0.602 0-1.064 0.744-1.068 0.752-0.139 0.239-0.445 0.319-0.684 0.18s-0.319-0.445-0.18-0.684c0.030-0.051 0.742-1.248 1.932-1.248s1.902 1.197 1.932 1.248c0.139 0.239 0.059 0.545-0.18 0.684-0.079 0.046-0.166 0.068-0.251 0.068z" />
      <path d="M16.5 8c-0.172 0-0.339-0.089-0.432-0.248-0.003-0.006-0.465-0.752-1.068-0.752s-1.064 0.744-1.068 0.752c-0.139 0.239-0.445 0.319-0.684 0.18s-0.319-0.445-0.18-0.684c0.030-0.051 0.742-1.248 1.932-1.248s1.902 1.197 1.932 1.248c0.139 0.239 0.059 0.545-0.18 0.684-0.079 0.046-0.166 0.068-0.251 0.068z" />
      <path d="M12.5 14c-2.283 0-3.401-2.183-3.447-2.276-0.077-0.155-0.069-0.339 0.022-0.486s0.252-0.237 0.425-0.237h6c0.173 0 0.334 0.090 0.425 0.237s0.099 0.331 0.022 0.486c-0.046 0.093-1.164 2.276-3.447 2.276zM10.468 12c0.426 0.472 1.11 1 2.032 1s1.606-0.528 2.032-1h-4.065z" />
      <path d="M19.792 2.095c-0.13-0.094-0.298-0.12-0.45-0.069-0.029 0.010-2.978 0.974-6.842 0.974s-6.784-0.964-6.813-0.974c-0.152-0.051-0.32-0.026-0.451 0.068s-0.208 0.245-0.209 0.405c-0 0.060 0 1.002 0.119 2.386-2.638-0.256-4.441-0.853-4.46-0.859-0.152-0.051-0.32-0.026-0.451 0.068s-0.208 0.244-0.208 0.405c-0 0.093 0.001 2.312 0.445 5.010 0.262 1.592 0.626 3.018 1.081 4.238 0.58 1.554 1.313 2.782 2.18 3.65 1.061 1.064 2.329 1.603 3.767 1.603 1.636 0 3.043-0.693 4.187-2.060 0.264 0.040 0.535 0.060 0.813 0.060 1.763 0 3.259-0.803 4.447-2.387 0.911-1.215 1.639-2.894 2.163-4.991 0.88-3.519 0.89-6.976 0.89-7.121 0-0.161-0.077-0.311-0.208-0.405zM7.5 18c-1.179 0-2.179-0.428-3.059-1.308-2.836-2.84-3.316-9.403-3.398-11.52 0.813 0.218 2.307 0.558 4.204 0.727 0.058 0.506 0.131 1.048 0.224 1.61 0.067 0.405 0.14 0.799 0.22 1.181-0.185 0.165-0.424 0.309-0.692 0.309-0.603 0-1.065-0.746-1.068-0.752-0.139-0.238-0.445-0.319-0.684-0.18s-0.319 0.445-0.18 0.684c0.030 0.051 0.742 1.248 1.932 1.248 0.356 0 0.669-0.106 0.934-0.257 0.182 0.717 0.389 1.387 0.619 2.003 0.189 0.507 0.395 0.98 0.617 1.417-1.301 0.509-2.079 2.037-2.117 2.113-0.077 0.155-0.069 0.339 0.022 0.486s0.252 0.237 0.425 0.237h3.932c0.37 0.272 0.761 0.489 1.172 0.65-0.885 0.907-1.906 1.35-3.104 1.35zM8.367 15h-1.943c0.306-0.387 0.74-0.811 1.245-0.952 0.22 0.348 0.453 0.665 0.697 0.952zM18.136 9.394c-0.492 1.963-1.163 3.519-1.993 4.624-1.002 1.334-2.194 1.982-3.643 1.982-0.97 0-1.818-0.29-2.578-0.882-0.005-0.004-0.010-0.008-0.016-0.012-0.159-0.125-0.313-0.262-0.465-0.414-0.405-0.406-0.762-0.887-1.076-1.421-0.007-0.013-0.014-0.026-0.022-0.039-1.869-3.205-2.23-8.251-2.299-10.060 1.113 0.299 3.499 0.827 6.456 0.827 2.962 0 5.364-0.53 6.483-0.829-0.047 1.174-0.218 3.714-0.847 6.223z" />
    </Lini>
  );
}

LiniTheater.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
