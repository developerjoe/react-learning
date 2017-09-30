import React from 'react';
import PropTypes from 'prop-types';
import './component.less';

class Component extends React.Component {

    render() {

        let layout = this.props.layout;

        return (
            <div className={['Component', layout].join(' ')}>
                {this.props.children}
            </div>
        )

    }

}

Component.PropTypes = {
    layout: PropTypes.string
};

Component.defaultProps =  {
    layout: 'full'
};

export default Component;