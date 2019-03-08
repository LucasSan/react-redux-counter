import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { DisplayCounter } from './DisplayCounter';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<DisplayCounter />', () => {
    it('mounts', () => {
        const wrapper = shallow(<DisplayCounter count={10} />)
        expect(wrapper.contains(<p>O contador está em 10</p>)).toBe(true);
    });
});
