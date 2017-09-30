import React from 'react';
import PropTypes from 'prop-types';
import Component from 'components/component';
import styles from './text.less';

class TextComponent extends React.Component {

    render() {

        let layout = this.props.layout;

        return (
            <Component layout={layout}>
                <div className={styles.TextComponent}>
                    <h1>Text Component</h1>
                    <p>Some body text.</p>
                    <p>More body text.</p>
                </div>
            </Component>
        )

    }

}

Component.PropTypes = {
    layout: PropTypes.string
};

Component.defaultProps =  {
    layout: 'full'
};

export default TextComponent;