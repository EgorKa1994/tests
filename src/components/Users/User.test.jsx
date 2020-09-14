import React from 'react';
import {UserList} from '../Users/UserList';
import {User} from '../Users/User';
import { mount } from "enzyme";
import { Button } from '../Button/Button';

// - рендерится столько же пользователей в том же порядке, как и в prop-е users
it('should render the same users as in props', () => {

  const source = [
    { id: 1, name: "Bill Mitchell" },
    { id: 2, name: "Leanne Morley" },
    { id: 3, name: "Said Norton" },
    { id: 4, name: "Isaac Molina" },
    { id: 5, name: "Aleena O'Ryan" },
  ];

  const callback = jest.fn(item => { return <User key={item.id}/>});


  source.map(callback);
  expect(callback).toHaveBeenCalledTimes(5);
  expect(callback).toHaveLastReturnedWith(<User key='5'/>);
  expect(callback).toHaveNthReturnedWith(2, <User key='2'/>);
})

// - рядом с каждым пользователям есть 2 кнопки - Edit и Delete
it('should check if each User has 2 buttons: Edit and Delete', () => {
  const onEdit = jest.fn();
  const onDelete = jest.fn();
  const users = [
    { id: 1, name: "Bill Mitchell" },
    { id: 2, name: "Leanne Morley" },
    { id: 3, name: "Said Norton" },
    { id: 4, name: "Isaac Molina" },
    { id: 5, name: "Aleena O'Ryan" },
  ];

  const wrapper = mount(<UserList users={users} onEdit={() => {}} onDelete={() => {}}/>);

  expect(wrapper.find(User).at(1).containsAllMatchingElements([
    <Button onClick={onEdit}/>,
    <Button onClick={onDelete}/>,
  ]))

  expect(wrapper.find(User).at(4).containsAllMatchingElements([
    <Button onClick={onEdit}/>,
    <Button onClick={onDelete}/>,
  ]))
})


// - по нажатию на кнопку Edit вызывается функция Edit и туда передается id редактируемого пользователя

it('should call Edit and pass id if press button Edit', () => {
  const onEdit = jest.fn();
  const users = [
    { id: 1, name: "Bill Mitchell" },
    { id: 2, name: "Leanne Morley" },
    { id: 3, name: "Said Norton" },
    { id: 4, name: "Isaac Molina" },
    { id: 5, name: "Aleena O'Ryan" },
  ];

  const wrapper = mount(<UserList users={users} onEdit={onEdit} onDelete={() => {}}/>);

  const User1 = wrapper.find(User).filterWhere(wrap => wrap.prop("name") === 'Leanne Morley');

  const buttonWrapper = User1.find(Button);
  buttonWrapper.at(0).find('.btn-info').simulate('click');

  expect(onEdit).toHaveBeenCalledTimes(1);
  expect(onEdit).toHaveBeenCalledWith(2);
})

// - по нажатию на кнопку Delete вызывается функция Delete и туда передается id удаляемого пользователя

it('should call Delete and pass id if press button Delete', () => {
  const onDelete = jest.fn();
  const users = [
    { id: 1, name: "Bill Mitchell" },
    { id: 2, name: "Leanne Morley" },
    { id: 3, name: "Said Norton" },
    { id: 4, name: "Isaac Molina" },
    { id: 5, name: "Aleena O'Ryan" },
  ];

  const wrapper = mount(<UserList users={users} onEdit={() => {}} onDelete={onDelete} />);

  const User1 = wrapper.find(User).filterWhere(wrap => wrap.prop("name") === 'Isaac Molina');

  const buttonWrapper = User1.find(Button);
  buttonWrapper.at(1).find('.btn-danger').simulate('click');

  expect(onDelete).toHaveBeenCalledTimes(1);
  expect(onDelete).toHaveBeenCalledWith(4);
})