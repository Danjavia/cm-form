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
    formEntryType: 'select',
    fieldName: 'city',
    options: [
      {
        name: 'Bogota', value: 'bogota'
      },
      {
        name: 'Tunja', value: 'tunja',
      },
      {
        name: 'vali', value: 'cali'
      }
    ]
  },
  {
    formEntryType: 'datepicker',
    fieldName: 'datetime',
  },
  {
    formEntryType: 'radioGroup',
    fieldName: 'phoneMobile',
    options: [
      {
        name: 'Bogota', value: 'bogota'
      },
      {
        name: 'Tunja', value: 'tunja',
      },
      {
        name: 'vali', value: 'cali'
      }
    ]
  },
  {
    formEntryType: 'radioGroup',
    fieldName: 'phoneMobile',
    vertical: true,
    options: [
      {
        name: 'Bogota', value: 'bogota'
      },
      {
        name: 'Tunja', value: 'tunja',
      },
      {
        name: 'vali', value: 'cali'
      }
    ]
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
