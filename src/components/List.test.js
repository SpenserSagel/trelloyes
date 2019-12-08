import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List.js';
import { isTSAnyKeyword } from '@babel/types';

describe("listTest", () => {
    it('rendersWithoutCrashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List cardIds={['a']}/>,div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('rendersAsExpected', () => {
        let testIds = ['a','b','c'];
        const tree = renderer
            .create(<List cardIds={testIds} header="testHeader"/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});