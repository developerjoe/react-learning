import React from 'react';
import Block from 'components/block';
import './article.less';

class Article extends React.Component {

    render() {
        return (
            <div className={'Article'}>
                <header>
                    <div className={'inner'}>
                        <h1>{this.props.title}</h1>
                    </div>
                </header>
                <Block/>
                <Block/>
            </div>
        )
    }

};

Article.defaultProps = {
  "title" : "An Article Title"
};

export default Article;