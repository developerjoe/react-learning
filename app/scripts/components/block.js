import React from 'react';
import './block.less';
import TextComponent from 'components/presentation/text';

class Block extends React.Component {

    render() {

        return (
            <div className={'Block'}>
                <h1>Block</h1>
                <TextComponent layout={'full'} />
                <TextComponent layout={'left'} />
                <TextComponent layout={'right'} />
                <TextComponent layout={'full'} />
            </div>
        )

    }

}

export default Block;