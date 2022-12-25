import React from "react";
import PropTypes from "prop-types";

export default function LiniBrain({
  size = 20,
  color = "#333",
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
      className={`Component Lini LiniBrain ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M12.5 7c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5c0 0.827-0.673 1.5-1.5 1.5z" />
        <path d="M12.585 15c-0.206 0-0.399-0.128-0.471-0.333-0.076-0.214-0.114-0.438-0.114-0.667 0-1.103 0.897-2 2-2 0.228 0 0.453 0.038 0.667 0.114 0.26 0.092 0.397 0.378 0.305 0.638s-0.378 0.397-0.638 0.305c-0.107-0.038-0.219-0.057-0.333-0.057-0.551 0-1 0.449-1 1 0 0.115 0.019 0.227 0.057 0.333 0.092 0.26-0.044 0.546-0.305 0.638-0.055 0.019-0.111 0.029-0.167 0.029z" />
        <path d="M19 10.5c0-2.459-0.764-4.801-2.21-6.779-0.373-1.106-1.218-2.014-2.339-2.45-0.544-0.769-1.44-1.272-2.451-1.272-1.042 0-1.962 0.534-2.5 1.344-0.538-0.809-1.458-1.344-2.5-1.344-1.011 0-1.907 0.503-2.451 1.272-1.122 0.436-1.967 1.344-2.339 2.45-1.446 1.978-2.21 4.32-2.21 6.779 0 0.655 0.056 1.312 0.166 1.953-0.11 0.498-0.166 1.017-0.166 1.547 0 1.584 0.508 3.078 1.431 4.206 0.947 1.157 2.214 1.794 3.569 1.794 0.263 0 0.527-0.025 0.785-0.073 0.231 0.048 0.47 0.073 0.715 0.073 1.272 0 2.387-0.682 3-1.699 0.613 1.017 1.728 1.699 3 1.699 0.245 0 0.484-0.025 0.715-0.073 0.259 0.049 0.522 0.073 0.785 0.073 1.355 0 2.622-0.637 3.569-1.794 0.923-1.128 1.431-2.622 1.431-4.206 0-0.531-0.056-1.049-0.166-1.547 0.11-0.641 0.166-1.297 0.166-1.953zM6.5 19c-1.378 0-2.5-1.122-2.5-2.5 0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5c0 0.876 0.323 1.677 0.857 2.292-1.65-0.616-2.857-2.531-2.857-4.792 0-1.158 0.326-2.288 0.917-3.181 0.152-0.23 0.089-0.541-0.141-0.693s-0.54-0.089-0.693 0.141c-0.028 0.042-0.055 0.085-0.082 0.127 0.016-1.603 0.387-3.149 1.087-4.557 0.156 0.735 0.517 1.413 1.055 1.962 0.098 0.1 0.228 0.15 0.357 0.15 0.126 0 0.253-0.048 0.35-0.143 0.197-0.193 0.201-0.51 0.007-0.707-0.553-0.564-0.857-1.31-0.857-2.099 0-0.878 0.381-1.689 1.010-2.246-0.007 0.081-0.010 0.163-0.010 0.246 0 0.202 0.020 0.403 0.060 0.6 0.048 0.237 0.257 0.401 0.489 0.401 0.033 0 0.066-0.003 0.1-0.010 0.271-0.055 0.445-0.319 0.391-0.589-0.027-0.131-0.040-0.266-0.040-0.401 0-1.103 0.897-2 2-2s2 0.897 2 2v6.766c-0.531-0.476-1.232-0.766-2-0.766-0.203 0-0.406 0.021-0.604 0.061-0.271 0.055-0.445 0.32-0.39 0.59s0.319 0.445 0.59 0.39c0.132-0.027 0.268-0.041 0.404-0.041 1.103 0 2 0.897 2 2v4.5c0 1.378-1.122 2.5-2.5 2.5zM15.143 18.791c0.533-0.614 0.857-1.416 0.857-2.291 0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5c0 1.378-1.122 2.5-2.5 2.5s-2.5-1.122-2.5-2.5v-4.5c0-1.103 0.897-2 2-2 0.136 0 0.272 0.014 0.404 0.041 0.27 0.055 0.535-0.119 0.59-0.39s-0.119-0.535-0.39-0.59c-0.198-0.040-0.401-0.061-0.604-0.061-0.768 0-1.469 0.29-2 0.766v-6.766c0-1.103 0.897-2 2-2s2 0.897 2 2c0 0.135-0.013 0.27-0.040 0.401-0.055 0.271 0.12 0.535 0.391 0.589 0.034 0.007 0.067 0.010 0.1 0.010 0.233 0 0.441-0.164 0.489-0.401 0.040-0.196 0.060-0.398 0.060-0.599 0-0.083-0.004-0.165-0.010-0.246 0.629 0.558 1.010 1.368 1.010 2.246 0 0.79-0.304 1.535-0.857 2.099-0.193 0.197-0.19 0.514 0.007 0.707 0.097 0.095 0.224 0.143 0.35 0.143 0.13 0 0.259-0.050 0.357-0.15 0.538-0.549 0.899-1.226 1.055-1.962 0.7 1.407 1.071 2.954 1.087 4.557-0.027-0.043-0.054-0.085-0.082-0.127-0.152-0.23-0.463-0.293-0.693-0.141s-0.293 0.463-0.141 0.693c0.591 0.893 0.917 2.023 0.917 3.181 0 2.26-1.206 4.175-2.857 4.791z" />
        <path d="M6.5 7c-0.827 0-1.5-0.673-1.5-1.5 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 0.276 0.224 0.5 0.5 0.5s0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z" />
        <path d="M6.415 15c-0.055 0-0.112-0.009-0.167-0.029-0.26-0.092-0.397-0.378-0.305-0.638 0.038-0.107 0.057-0.219 0.057-0.333 0-0.551-0.449-1-1-1-0.115 0-0.227 0.019-0.333 0.057-0.26 0.092-0.546-0.044-0.638-0.305s0.044-0.546 0.305-0.638c0.214-0.076 0.438-0.114 0.667-0.114 1.103 0 2 0.897 2 2 0 0.228-0.038 0.453-0.114 0.667-0.073 0.205-0.266 0.333-0.471 0.333z" />
      </g>
    </svg>
  );
}

LiniBrain.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
