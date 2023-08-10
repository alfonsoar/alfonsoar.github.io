import React from 'react';
import { shallow } from 'enzyme';
import { Header, IState } from '../header';
 
describe('Header', () => {
    let wrapper: any;
    beforeEach(() => {
      wrapper = shallow<Header, {}, IState>(<Header />);
    });

    it('renders without crashing', () => {
        expect(wrapper.find('NavbarBrand').shallow().text()).toEqual('Alfonso Austin-Rivera');
    });

    it('Handles dropdown click', () => {
      wrapper.find('NavbarToggler').simulate('click');
      expect(wrapper.state().isOpen).toEqual(true)
  });
});