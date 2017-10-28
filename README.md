#cm-form ReactJS Component

*Easy [antd](https://ant.design/components/form/) forms management for little and large projects*

This component Helps you to manage [antd](https://ant.design/components/form/) forms for large or little projects.

## How to Install?

If you're using Yarn run `yarn add @comparamejor/cm-form --save` else 
run `npm i @comparamejor/cm-form -S`

## Dependencies

- `react@15.5.4`
- `antd@2.13.7`
- `antd/form`

## How to use it?

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormData from '@comparamejor/cm-form';
import questions from './questions'; // Is array of the question passed to the antd form

class Form extends Component {

  /**
   * `handleSubmit:` Manage form data
   * @param {event} e event
   * */
  handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data entry
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      
      // Do stuff with code here
    });
  };

  /**
   * `render:` Self descriptive
   * @return {HTML} Markup
   * */
  render() {
    return (
      <FormData
        formTitle={'Form Title'}
        questions={questions}
        onSubmit={this.handleSubmit}
        submitText={'Enviar'}
        form={this.props.form}
      />
    );
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);

```

## Requirements

- For correct use of the component is necessary pass the form HOC from [Antd Form API](https://ant.design/components/form/#API).
- questions configuration file to be passed within `questions` prop of the component.

## FormData properties

- `questions*`: array Array of questions | default []
- `formTitle?`: string Form title 
- `onSubmit?`: func Method to manage form data 
- `submitText?`: string Name of send button | default 'enviar'
- `disabled?`: boolean Use it for disable button after send the form
- `form`: object [antd](https://ant.design/components/form/#API) form props.

## Input properties

Each object within array have the next properties

- `formEntryType*`: string <input|select|hiddenInput|datepicker|autocomplete|autocompleteObject|submitButton|sectionTitle|select|radioGroup|custom> 
- `fieldName*`: string Name for field to send  
- `inputProps?`: object Nature input properties [maxLength|placeholder|pattern...] 
- `label?`: string Name for label
- `visible?`: func|boolean Validate if the input field is available to show
- `rules?`: array [antd](https://ant.design/components/form/#API) form rules array of objects
- `options?`: array Use this option for setting select|radioGroup options  
- `addonBefore?`: string Name of icon to put before input
- `vertical?`: boolean Use it for layout of options type inputs
- `onChange?`: func Self descriptive
- `onSelect?`: func Self descriptive
- `render?`: ReactJSNode return a node of React
- `extra?`: ReactJSNode return a node of react as hint for the input
- `children?`: use it for adding nested fields to form

## Questions format

The `question` component property receive an array of questions or a function that returns a valid array. It would be to have a nested childs array for making actions in the form.

The format for the questions file is:

```js
// Export as function
export default data => [
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
    initialValue: data.phoneMobile,
    inputProps: {
      disabled: true,
    },
  },
];
```
Or

```js
// Export as array 
export default [
  {
    formEntryType: 'input',
    fieldName: 'firstName',
    inputProps: {
      disabled: true,
    },
  },
  {
    formEntryType: 'input',
    fieldName: 'lastName',
    inputProps: {
      disabled: true,
    },
  },
  {
    formEntryType: 'input',
    fieldName: 'emailAddress',
    inputProps: {
      disabled: true,
    },
  },
  {
    formEntryType: 'input',
    fieldName: 'phoneMobile',
    inputProps: {
      disabled: true,
    },
  },
];
```

## Run tests

run `yarn test`
 
