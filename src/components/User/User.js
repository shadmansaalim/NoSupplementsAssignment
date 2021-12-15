import React, { useState } from 'react';
import { Col, Card, Avatar } from 'antd';
import { MailOutlined, PhoneOutlined, GlobalOutlined, EditOutlined, DeleteFilled, HeartOutlined, HeartFilled, MessageOutlined } from '@ant-design/icons';
import { Modal, Button, Form, Input, Checkbox } from 'antd';
import swal from 'sweetalert';


const User = ({ user, handleDeleteUser }) => {
    //Destructuring id and username of user object
    const { id, username } = user;
    //States to store data
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [website, setWebsite] = useState(user.website);

    const [liked, setLiked] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);


    const [form] = Form.useForm();

    //Like button function
    const handleLike = (e) => {
        setLiked(true);
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    //Form Submit Function
    const handleSubmit = (values) => {
        for (const field in values) {
            if (/^\s*$/.test(values[field]) === true) {
                swal("Invalid Input", `Please provide the ${field} to continue. You have typed spaces only in the input field.`, "error");
                return;
            }
        }

        setName(values.name);
        setEmail(values.email);
        setPhone(values.phone);
        setWebsite(values.website);
        swal("Updated Successfully", "User information updated successfully", "success");
        setIsModalVisible(false);
    };



    const handleCancel = () => {
        setIsModalVisible(false);
    };



    return (
        <Col xs={24} sm={24} md={8} lg={8} xl={6} style={{ padding: '15px' }}>
            <Card
                style={{ height: '100%' }}
                cover={
                    <div style={{ backgroundColor: '#f5f5f5' }}>
                        <img
                            width="200px"
                            height="200px"
                            alt="example"
                            src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
                        />
                    </div>
                }
                actions={[
                    <div>
                        {
                            liked
                                ?
                                <HeartFilled key="like" style={{ color: 'rgb(255, 0, 0)', fontSize: '20px' }} />
                                :
                                <HeartOutlined onClick={handleLike} key="like" style={{ color: 'rgb(255, 0, 0)', fontSize: '20px' }} />
                        }
                    </div>,
                    <EditOutlined onClick={showModal} key="edit" style={{ fontSize: '20px' }} />,
                    <DeleteFilled onClick={() => handleDeleteUser(id)} key="delete" style={{ fontSize: '20px' }} />,
                ]}
            >
                <div style={{ textAlign: 'start' }}>
                    <h3>{name}</h3>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '6px' }}>
                        <MailOutlined style={{ fontSize: '18px' }} />
                        <p style={{ marginLeft: '10px', marginBottom: '0px' }}>{email}</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '6px' }}>
                        <PhoneOutlined style={{ fontSize: '18px' }} />
                        <p style={{ marginLeft: '10px', marginBottom: '0px' }}>{phone}</p>
                    </div>


                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <GlobalOutlined style={{ fontSize: '18px' }} />
                        <p style={{ marginLeft: '10px', marginBottom: '0px' }}>
                            http://{website}
                        </p>
                    </div>
                </div>

                <Modal title={`${user.name.split(' ')[0]}'s Information`} visible={isModalVisible}
                    onOk={() => {
                        form
                            .validateFields()
                            .then((values) => {
                                form.resetFields();
                                handleSubmit(values);
                            })
                            .catch((info) => {
                                console.log('Validate Failed:', info);
                            });
                    }}
                    onCancel={handleCancel}
                    okText="Update"
                    cancelText="Cancel"
                >
                    <Form
                        form={form}
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{
                            name: name,
                            email: email,
                            phone: phone,
                            website: website
                        }}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'This field is required' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{
                                required: true,
                                message: 'This field is required'
                            }, {
                                type: 'email',
                                message: 'Invalid email'
                            }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Phone"
                            name="phone"
                            rules={[{ required: true, message: 'This field is required' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Website"
                            name="website"
                            rules={[{ required: true, message: 'This field is required' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Form>
                </Modal>
            </Card>
        </Col >
    );
};

export default User;