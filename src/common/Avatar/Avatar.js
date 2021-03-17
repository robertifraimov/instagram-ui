
import React from 'react' ;
import PropTypes from 'prop-types';
import avatarDefault from './avatar.png';
import './Avatar.scss';

function Avatar (props) {

    const image = props.image || avatarDefault;
    //const size = props.size || 'md';

    return (
        <img src={image} className="Avatar" alt="avatar" />
    );
}

Avatar.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

export default Avatar;