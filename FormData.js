import React, { Component } from 'react';
import { Form } from 'antd';
import FormEntry from './FormEntry';

/**
 * FormData class
 * Extend class for working with antd forms
 * */
export default class FormData extends Component {

  /**
   * render
   * @return {MarkupHTML} Html rendered
   * */
  render() {
    const { form, questions } = this.props;
    const formItemProperties = {
      labelCol: { span: 23 },
      wrapperCol: { span: 23 },
    };

    return (
      <div>
        {this.props.formTitle && <h2 style={{marginLeft: 10}}>
          {this.props.formTitle || 'Datos generales'}
        </h2>}

        <Form layout="vertical" onSubmit={this.props.onSubmit}>
          <div style={{ position: 'relative' }}>
            {questions &&
              questions.map(
                (props, key) =>
                  props.visible !== false &&
                    <section key={key}>
                      <FormEntry form={form} key={key} formItemProperties={formItemProperties} {...props} />

                    {props.children &&
                      props.children.map(
                        (props, key) =>
                          props.visible && <section key={key}>
                            <FormEntry form={form} key={key} formItemProperties={formItemProperties} {...props} />

                            {props.children &&
                              props.children.map((props, key) =>
                                props.visible && <FormEntry form={form} key={key} formItemProperties={formItemProperties} {...props} />
                              )}
                          </section>,
                      )}
                  </section>,
              )}

            {this.props.submitText && <FormEntry
              form={form}
              formEntryType="submitButton"
              buttonText={this.props.submitText}
              type={this.props.submitButtonType || 'primary'}
              disabled={this.props.disabled || false}
              />}
            {this.props.children}
          </div>
        </Form>
      </div>
    );
  }
}
