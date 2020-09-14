import React from 'react';
import {Button} from './Button';
import { mount } from "enzyme";


// дети компонента рендерятся как дети тега button
it('should check children props', () => {
  const wrapper = mount(<Button>hello</Button>);
  const buttonWrapper = wrapper.find("button");

  expect(buttonWrapper.text()).toBe('hello');
})

// при нажатии на кнопку вызывается функция onClick
it('should call onClick', () => {
  const onClick = jest.fn();
  const wrapper = mount(<Button onClick={onClick}/>);
  const buttonWrapper = wrapper.find("button");

  buttonWrapper.simulate('click');

  expect(onClick).toHaveBeenCalledTimes(1);
})

// если kind не передан, то в className есть класс btn-default
it('should have class btn-default if kind was not passed', () => {
  const wrapper = mount(<Button />);
  const buttonWrapper = wrapper.find("button");

  expect(buttonWrapper.props().className).toBe('btn btn-default');
})

//- если kind="info", то в className есть класс btn-info
it('should contain className btn-info if kind=info', ()=>{
  const wrapper = mount(<Button kind='info'/>);
  const buttonWrapper = wrapper.find('button');

  expect(buttonWrapper.props().className).toBe('btn btn-info');
})

//- если kind="danger", то в className есть класс btn-danger
it('should contain className btn-danger if kind=danger', () => {
  const wrapper = mount(<Button kind='danger'></Button>)
  const buttonWrapper = wrapper.find('button');

  expect(buttonWrapper.props().className).toBe('btn btn-danger');
})

//- если isBig=true, то в className есть класс btn-big
it('should contain className btn-big if isBig=true', () => {
  const wrapper = mount(<Button isBig='true'></Button>)
  const buttonWrapper = wrapper.find('button');

  expect(buttonWrapper.props().className).toBe('btn btn-default btn-big');
})