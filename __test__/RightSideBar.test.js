import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RightSideBar from '../components/Home/RightSideBar';


enzyme.configure({ adapter: new Adapter() });


describe('<RightSideBar />', () => {

  it('renders three <RightSideBar /> components', () => {
    const wrapper = shallow(<RightSideBar />);
    expect(wrapper.find("#contact-right").text()).toContain("Contacts");
  });


});
