import React, { useState } from 'react';
import './index.scss';
import {
  Input,
  Button,
  Form,
  Select,
  Checkbox,
  Radio,
  RadioChangeEvent,
  DatePicker,
  
} from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import { UserOutlined } from '@ant-design/icons';
import { MailOutlined } from '@ant-design/icons';
//import { _values } from 'tslib';

const FormContainer = () => {
  const [value, setValue] = useState(1);
  const [form] = Form.useForm(); 

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    localStorage.setItem('formData', JSON.stringify(values));
    form.resetFields(); 
  };

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
     localStorage.setItem('checkboxValues', JSON.stringify(checkedValues));
  };

  const onChangeRadio = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
     localStorage.setItem('radioValue', e.target.value);
  };

  const dropoptions = [
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
  ];

  const courceOptions = ['Java', 'PHP', 'Python', '.Net'];

  return (
    <>
      <div className="container">
        <div className="form_container">
          <div className="heading">Registration Form</div>
          <div className="form">
            <Form autoComplete="off" labelCol={{ span: 4 }} onFinish={onFinish}>
              <Form.Item
                label="Name"
                name={'name'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter your name',
                  },
                  { whitespace: true },
                  { min: 3 },
                ]}
                hasFeedback
              >
                <Input
                  placeholder="Enter your Name...."
                  prefix={<UserOutlined />}
                  allowClear
                ></Input>
              </Form.Item>
              <Form.Item
                label="Email"
                name={'email'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter your email...',
                  },
                  { type: 'email', message: 'Please enter valid email...'},
                ]}
                hasFeedback
              >
                <Input
                  placeholder="Enter your Email ........"
                  prefix={< MailOutlined/>}
                  allowClear
                ></Input>
              </Form.Item>
              <Form.Item label="Password" name={'password'}
               rules={[
                  {
                    required: true,
                  },
                  {min:6},
                  {
                    validator:(_,value)=>
                    value && value.includes('A') ? Promise.resolve(): Promise.reject('Password dose not match criteria.')
                  }
                ]}
                hasFeedback
              >
                <Input.Password placeholder="......."></Input.Password>
              </Form.Item>
              <Form.Item label="ConfirmP" name={'confirm'}
              dependencies={['password']}
               rules={[
                  {
                    required: true,
                  },
                  ({getFieldValue})=>({
                      validator(_,value){
                        if(!value || getFieldValue('password')===value){
                          return Promise.resolve()
                        }
                        return Promise.reject("Password dose  not match ...")
                      }
                  })
                ]}
                hasFeedback
              >
                <Input.Password placeholder="......."></Input.Password>
              </Form.Item>
              <Form.Item label="DOB" name={'date'}
              rules={[
                  {
                    required: true,
                    message: 'Please provide your date of birth',
                  },
                ]}
              >
                <DatePicker
                  style={{ width: '100%' }}
                  picker="date"
                  placeholder="Choose your date"
                ></DatePicker>
              </Form.Item>
              <Form.Item label="Gender" name={'gender'}>
                <Select
                  placeholder="Select your Gender......"
                  options={dropoptions}
                ></Select>
              </Form.Item>
               <Form.Item
                label="SiteName"
                name={'site'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter your siteName...',
                  },
                  { type: 'url', message: 'Please enter valid url...'},
                ]}
                hasFeedback
              >
                <Input
                  placeholder="Enter your siteName ........"
                  allowClear
                ></Input>
              </Form.Item>
              <Form.Item label="Course">
                <Checkbox.Group
                  options={courceOptions}
                  defaultValue={['Training']}
                  onChange={onChange}
                />
              </Form.Item>

              <Form.Item label="Technology">
                <Radio.Group onChange={onChangeRadio} value={value}>
                  <Radio value={"Training"}>Training</Radio>
                  <Radio value={"Internship"}>Internship</Radio>
                  <Radio value={"Communication"}>Communication</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item>
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  className="button"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormContainer;



