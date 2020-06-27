import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPulse({ size, ...props }) {
    let className = 'Component Lini LiniPulse';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M12.496 16.925c-.111 0-.379-.037-.552-.369a1.692 1.692 0 01-.142-.429L9.442 5.114l-2.196 8.053c-.177.648-.545.765-.749.776s-.583-.062-.832-.686l-1.164-2.911-.164.411C4.058 11.454 3.252 12 2.501 12h-2a.5.5 0 010-1h2c.346 0 .779-.293.907-.614l.257-.643c.243-.607.628-.697.836-.697s.593.091.836.697l1.075 2.686 2.344-8.596c.175-.642.5-.769.744-.762s.561.151.7.802l2.285 10.662 1.33-6.652c.133-.664.491-.801.693-.823s.581.032.856.651l1.188 2.672c.144.323.596.617.949.617h2a.5.5 0 010 1h-2c-.743 0-1.561-.532-1.863-1.211l-.955-2.149-1.495 7.477c-.036.178-.08.319-.137.431-.17.338-.442.376-.55.377h-.003z" />
            </svg>
        </span>
    );
}

LiniPulse.propTypes = {
    size: PropTypes.number.isRequired,
};
