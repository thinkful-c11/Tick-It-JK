/////////////////////////////////////////////////////////////////////////////////////
///////////////                 Imports                    /////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//Importing react
import React from 'react';

//Importing shallow and mount to test the component 
import {shallow, mount} from 'enzyme';

//Importing the component
import {Login} from './login';

//Importing actions used in login
import {changeNavButton, CHANGE_NAV_BUTTON} from '../actions';

//Importing the local storage mock object
import LocalStorageMock from './local-storage-mock';

//Making the global local storage to be our local storage mock object
global.localStorage = new LocalStorageMock;

/////////////////////////////////////////////////////////////////////////////////////
///////////////                 Login Test                 /////////////////////////
///////////////////////////////////////////////////////////////////////////////////
describe('Login Test', () => {
  it('renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<Login dispatch={dispatch}/>);
  });

  it('it has 1 form, 2 labels, 3 inputs', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<Login dispatch={dispatch}/>);
    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('label').length).toEqual(2);
    expect(wrapper.find('input').length).toEqual(3);
  });

  it('Once Login is clicked, it should submit once all values are filled', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<Login dispatch={dispatch}/>);
    wrapper.find('#username').value = 'Chris';
    wrapper.find('#password').value = '123456';
    wrapper.find('.button').simulate('click');
    expect(dispatch).toHaveBeenCalled();
  });

  it('Login should have a sign up nav button', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<Login dispatch={dispatch}/>);
    expect(dispatch).toHaveBeenCalledWith(changeNavButton('Sign Up'));
    expect(dispatch.mock.calls[0][0].type).toEqual(CHANGE_NAV_BUTTON);
  });
});