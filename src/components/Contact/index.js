import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Form, Input, Button, Select, message } from 'antd'
import { CaretDownOutlined, SmileOutlined } from '@ant-design/icons';
import Call from '../../images/call.svg'
import Email from '../../images/email.svg'

import {
  ContactSection,
  SectionHeading,
  FormContainer,
  ContactDetails
} from './styles';

export const ContactPreviewSection = ({
  title,
  call,
  email,
  categories
}) => {

  const { Option } = Select;

  const [form] = Form.useForm();

  const[disabled, setDisabled] = useState(false);

  const onFinish = async values => {

    setDisabled(true);

    var saveData = values;

    const data = new FormData();

    data.append("name", saveData.name);
    data.append("email", saveData.email);
    if(values.category === undefined) {
      data.append("category", '-');
    } else {
      data.append("category", saveData.category);
    }
    if(values.description === undefined) {
      data.append("description", '-');
    } else {
      data.append("description", saveData.description);
    }

    var url= "https://script.google.com/macros/s/AKfycbzpvMlIAKKxyKwgYIigLFc7ygM7CRHAVxhtw1guvVkFme7qEoewmMCfHo_GOXA6ocZw_g/exec";

    await fetch(url, {
      method: 'POST',
      body: data,
      mode: 'no-cors',
    }).then(function (response) {
      message.success({
        content: 'Hello there! Thank you for reaching out. We will get back to you as quick as humanly possible.',
        className: 'messageCont',
        icon: <SmileOutlined />
      });
      setDisabled(false);
      form.resetFields();
    }).catch(function (err) {
      message.error({
        content: err.message,
        className: 'messageCont',
        icon: <SmileOutlined rotate={180} />
      });
      setDisabled(false);
    });
  };

  return (
    <ContactSection>
      <SectionHeading>
        <h2>{title}</h2>
      </SectionHeading>
      <FormContainer>
        <Form name="contact-details" onFinish={onFinish} form={form}>
          <Form.Item
            style={{
              marginBottom: 0,
            }}
            className="inputGroupBlock"
          >
            <Form.Item
              name='name'
              className="inlineInput"
              rules={[
                {
                  required: true,
                  message: `Can't be blank`,
                },
              ]}
            >
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
              name='email'
              className="inlineInput emailInput"
              rules={[
                {
                  required: true,
                  message: `Can't be blank`,
                },
                {
                  type: 'email',
                  message: `Please enter valid Email ID`,
                }
              ]}
            >
              <Input placeholder="Email ID" />
            </Form.Item>
          </Form.Item>
          <Form.Item name='category'>
            <Select
              placeholder="Select Category"
              suffixIcon={<CaretDownOutlined />}
              getPopupContainer={triggerNode => triggerNode.parentNode}
            >
              {categories && categories.map(d => (
                <Option key={d.value}>{d.title}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name='description'>
            <Input.TextArea rows={4} placeholder="How can we help you?" />
          </Form.Item>
          <Form.Item className="submitButton">
            <Button type="primary" htmlType="submit" disabled={disabled}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </FormContainer>
      <ContactDetails>
        <a href={'tel:' + call}>
          <img src={Call} alt="phone number" />
          <span>{call}</span>
        </a>
        <a href={'mailto:' + email}>
          <img src={Email} alt="email" />
          <span>{email}</span>
        </a>
      </ContactDetails>
    </ContactSection>
  );
};

const Contact = props => {

  const[contactContent, setContactContent] = useState({});

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/contact.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            call
            email
            categories {
              id
              title
              value
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if(data.file) {
      setContactContent(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);

  return (
    <Fragment>
      {
        data.file &&
        <ContactPreviewSection
          title={contactContent.title}
          call={contactContent.call}
          email={contactContent.email}
          categories={contactContent.categories}
        />
      }
    </Fragment>
  )
}

export default Contact
