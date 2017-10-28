import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Icon, Select, Radio, DatePicker, AutoComplete, Button } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const format = 'YYYY-MM-DD';

function getInput({
  form,
  formEntryType = 'input',
  label = null,
  fieldName,
  initialValue,
  rules = [],
  normalize,
  options = [],
  onChange = () => {},
  onSelect = () => {},
  vertical = false,
  buttonText,
  extra = null,
  sectionTitle = null,
  render = () => {},
  placeholder = '',
  type = 'primary',
  disabled = 'false',
  addonBefore = null,
  inputProps = {},
  formItemProperties = {
    labelCol: { span: 23 },
    wrapperCol: { span: 12},
  }
}) {

  const { getFieldDecorator } = form;

  const inputs = {

    input() {
      const inputProperties = {
        onChange: e => onChange(e),
        addonBefore,
        ...inputProps,
      };

      const formItemProps = {
        extra,
        ...formItemProperties
      };

      return (
        <div>
          {sectionTitle && <h2 className="within-form">{sectionTitle}</h2>}
          <FormItem
            {...formItemProps}
            label={label}
          >
            {getFieldDecorator(fieldName, {
              initialValue,
              normalize,
              rules,
            })(<Input {...inputProperties} />)}
          </FormItem>
        </div>
      );
    },

    hiddenInput() {
      const inputProperties = {
        onChange: e => onChange(e),
        type: 'hidden'
      };

      return (
        <div>
          {getFieldDecorator(fieldName, {
            initialValue,
            normalize,
            rules,
          })(<Input {...inputProperties} />)}
        </div>
      );
    },

    datepicker() {
      const inputProperties = {
        onChange: e => onChange(e),
      };

      const formItemProps = {
        extra,
        ...formItemProperties
      };

      return (
        <div>
          {sectionTitle && <h2 className="within-form">{sectionTitle}</h2>}
          <FormItem
            {...formItemProps}
            label={label}
          >
            {getFieldDecorator(fieldName, {
              initialValue,
              normalize,
              rules,
            })(
              <DatePicker
                style={{ width: '100%' }}
                format={format}
                {...inputProperties}
              />,
            )}
          </FormItem>
        </div>
      );
    },

    autocomplete() {

      const inputProperties = {
        onSelect: e => onSelect(e),
      };

      const formItemProps = {
        extra,
        ...formItemProperties
      };

      return (
        <div>
          {sectionTitle && <h2 className="within-form">{sectionTitle}</h2>}
          <FormItem
            {...formItemProps}
            label={label}
          >
            {getFieldDecorator(fieldName, {
              initialValue,
              normalize,
              rules,
            })(
              <AutoComplete
                dataSource={options}
                filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                {...inputProperties}
              />,
            )}
          </FormItem>
        </div>
      );
    },

    autocompleteObject() {

      const inputProperties = {
        onSelect: e => onSelect(e),
        placeholder
      };

      const formItemProps = {
        extra,
        ...formItemProperties
      };

      const children = options.map((option, key) => {

        const name = option.name ? option.name : option.label;

        return (
          <Option key={key} value={option.id.toString() || option.name}>
            {name}
          </Option>
        );
      });

      return (
        <div>
          {sectionTitle && <h2 className="within-form">{sectionTitle}</h2>}
          <FormItem
            {...formItemProps}
            label={label}
          >
            {getFieldDecorator(fieldName, {
              initialValue,
              normalize,
              rules,
            })(
              <AutoComplete
                dataSource={options}
                filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                {...inputProperties}
              >
                {children}
              </AutoComplete>,
            )}
          </FormItem>
        </div>
      );
    },

    submitButton() {
      return (
        <FormItem>
          <Button
            type={type}
            disabled={disabled}
            loading={disabled}
            htmlType="submit"
          >
            {buttonText || 'Guardar y Continuar'} <Icon type="right" />
          </Button>
        </FormItem>
      );
    },

    sectionTitle() {
      return (
        <h2>{sectionTitle}</h2>
      );
    },

    select() {
      const inputProperties = {
        onSelect: value => onSelect(value),
        showSearch: true,
        placeholder: placeholder,
        optionFilterProp: 'children',
        filterOption: (input, option) => option.props.children.toUpperCase().indexOf(input.toUpperCase()) >= 0,
        notFoundContent: 'No se encontró'
      };

      const formItemProps = {
        extra,
        ...formItemProperties
      };

      return (
        <div>
          {sectionTitle && <h2 className="within-form">{sectionTitle}</h2>}
          <FormItem
            {...formItemProps}
            label={label}
          >
            {getFieldDecorator(fieldName, {
              initialValue: initialValue || '',
              normalize,
              rules,
            })(
              <Select {...inputProperties}>
                <Option value="" key={new Date().getTime()}>--------</Option>
                {options.map((option, key) =>
                  <Option value={option.value || option.id} key={key}>
                    {option.name}
                  </Option>,
                )}
              </Select>,
            )}
          </FormItem>
        </div>
      );
    },

    radioGroup() {

      const inputProperties = {
        onChange: e => onChange(e),
      };

      const formItemProps = {
        extra,
        ...formItemProperties
      };

      const radioStyle = vertical
        ? {
          display: 'block',
          height: '30px',
          lineHeight: '30px',
        }
        : {
          height: '30px',
          lineHeight: '30px',
        };

      return (
        <div>
          {sectionTitle && <h2 className="within-form">{sectionTitle}</h2>}
          <FormItem
            {...formItemProps}
            label={label}
          >
            {getFieldDecorator(fieldName, {
              initialValue: initialValue || '',
              normalize,
              rules,
            })(
              <RadioGroup
                {...inputProperties}
              >
                {options.map((option, key) =>
                  <Radio style={radioStyle} value={option.value} key={key}>
                    {option.name}
                  </Radio>,
                )}
              </RadioGroup>,
            )}
          </FormItem>
        </div>
      );
    },

    custom() {
      return (
        <div>
          {sectionTitle && <h2 className="within-form">{sectionTitle}</h2>}
          {render}
        </div>
      );
    },
  };

  return inputs[formEntryType]();
}

const FormEntry = props => getInput(props);

FormEntry.propTypes = {
  form: PropTypes.object.isRequired,
  formEntryType: PropTypes.string,
  label: PropTypes.string,
  fieldName: PropTypes.string,
  initialValue: PropTypes.any,
  options: PropTypes.array,
  rules: PropTypes.array,
};

export default FormEntry;
