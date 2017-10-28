import React from 'react';
import { shallow } from 'enzyme';
import FormData from '../FormData';

const data = {
  firstName: 'Danny',
  secondName: 'Hoower',
  firstSurename: 'Viasus',
  secondSurename: 'Avila',
  emailAddress: 'email@exmaple.com',
  mobilePhone: '573227808655',
};

const questions = data => [
  {
    formEntryType: 'input',
    fieldName: 'firstName',
    initialValue: `${data.firstName} ${data.secondName}`,
    inputProps: {
      disabled: true,
    },
  },
  {
    formEntryType: 'input',
    fieldName: 'lastName',
    initialValue: `${data.firstSurename} ${data.secondSurename}`,
    inputProps: {
      disabled: true,
    },
  },
  {
    formEntryType: 'input',
    fieldName: 'emailAddress',
    initialValue: data.emailAddress,
    inputProps: {
      disabled: true,
    },
  },
  {
    formEntryType: 'input',
    fieldName: 'phoneMobile',
    initialValue: data.mobilePhone,
    inputProps: {
      disabled: true,
    },
  },
];


describe('FormData', () => {
  let component, props;

  beforeEach(() => {
    props = {
      form: {},
      questions: questions(data),
    };
    component = shallow(<FormData {...props} />);
  });

  test('screenshot test', () => {
    expect(component).toMatchSnapshot();
  });
});
