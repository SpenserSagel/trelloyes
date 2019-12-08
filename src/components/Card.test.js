import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card.js';

describe('cardTest',() => {
    it('rendersWithoutCrash', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('rendersAsExpected', () => {
        const tree = renderer
            .create(<Card title="testTitle" content="testContent"/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});