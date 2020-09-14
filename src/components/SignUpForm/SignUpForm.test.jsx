import React from 'react';
import {SignUpForm} from './SignUpForm';
import { mount } from "enzyme";

//- при вводе в поля формы их значение меняется
it('should change input value if typing', ()=>{
  const wrapper = mount(<SignUpForm onSignUp={() => {}} onCancel={()=>{}}/>);

  const loginInput = wrapper.find('[name="login"]');
  const inputPassword = wrapper.find('[name="password"]');
  const inputPasswordConfirmation = wrapper.find('[name="password-confirmation"]');

  loginInput.simulate('change', { target: { value: "name" }});
  inputPassword.simulate('change', {target: {value: '123456'}});
  inputPasswordConfirmation.simulate('change', {target: {value: '123456'}});

  expect(wrapper.find('[name="login"]').props().value).toBe("name");
  expect(wrapper.find('[name="password"]').props().value).toBe("123456");
  expect(wrapper.find('[name="password-confirmation"]').props().value).toBe("123456");
})


//- при нажатии на кнопку Cancel вызывается функция onCancel
it('should Cancel form if click button Cancel', () => {
  const onCancel = jest.fn();
  const wrapper = mount(<SignUpForm onCancel={onCancel}/>);

  const buttonWrapper = wrapper.find('button')
  buttonWrapper.at(0).simulate('click');

  expect(onCancel).toHaveBeenCalledTimes(1);
})

// -при нажатии на кнопку Confirm вызывается функция onSignUp и туда передается объект со значениями из 3-х полей

it('should call onSignUp if click button Confirm', () => {
  const onSignUp = jest.fn();
  const wrapper = mount(<SignUpForm onCancel={() => {}} onSignUp={onSignUp}/>);

  const loginInput = wrapper.find('[name="login"]');
  const inputPassword = wrapper.find('[name="password"]');
  const inputPasswordConfirmation = wrapper.find('[name="password-confirmation"]');

  loginInput.simulate('change', { target: { value: "name" }});
  inputPassword.simulate('change', {target: {value: '123456'}});
  inputPasswordConfirmation.simulate('change', {target: {value: '123456'}});

  const buttonWrapper = wrapper.find('button')
  buttonWrapper.at(1).simulate('click');

  expect(onSignUp).toHaveBeenCalledTimes(1);
  expect(onSignUp).toHaveBeenCalledWith({login: 'name', password: '123456', passwordConfirmation: '123456'});
})

// - если пароль и его подтверждение не совпадают - появляется валидационное сообщение, а функция onSignUp не вызывается

it('should compare password and passwordConfirmation', () => {
  const onSignUp = jest.fn();
  const wrapper = mount(<SignUpForm onCancel={() => {}} onSignUp={onSignUp}/>);

  const inputPassword = wrapper.find('[name="password"]');
  const inputPasswordConfirmation = wrapper.find('[name="password-confirmation"]');


  inputPassword.simulate('change', {target: {value: '123456'}});
  inputPasswordConfirmation.simulate('change', {target: {value: '12345'}});

  const buttonWrapper = wrapper.find('button');
  buttonWrapper.at(1).simulate('click');


  const messageError = wrapper.find(".sign-up-form__alert");

  expect(messageError.at(0).text()).toBe('Password and password confirmation should match');

  // почему не работает вариант проверки
//   expect(wrapper.contains(<div className="sign-up-form__alert">
//   Password and password confirmation should match
// </div>)).to.equal(true);

  expect(onSignUp).toHaveBeenCalledTimes(0);

})

