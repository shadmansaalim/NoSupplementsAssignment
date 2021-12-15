import React, { useState } from 'react';
import { Col, Card, Avatar } from 'antd';
import { MailOutlined, PhoneOutlined, GlobalOutlined, EditOutlined, DeleteFilled, HeartOutlined, HeartFilled, MessageOutlined } from '@ant-design/icons';
import { Modal, Button, Form, Input, Checkbox } from 'antd';


const { Meta } = Card;
const User = ({ user }) => {
    const { username } = user;
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [website, setWebsite] = useState(user.website);

    const [liked, setLiked] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [updatedData, setUpdatedData] = useState({});



    const handleLike = (e) => {
        setLiked(true);
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        setName(updatedData.name);
        setEmail(updatedData.email);
        setPhone(updatedData.phone);
        setWebsite(updatedData.website);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value)
        const newUpdatedData = { ...updatedData };
        newUpdatedData[field] = value;
        setUpdatedData(newUpdatedData);
    }

    return (
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
            <Card
                style={{ margin: '15px' }}
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
                    <DeleteFilled key="delete" style={{ fontSize: '20px' }} />,
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
                        <p style={{ marginLeft: '10px', marginBottom: '0px' }}>{website}</p>
                    </div>
                </div>

                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Name"
                            rules={[{ required: true, message: 'This field is required' }]}
                        >
                            <Input defaultValue={name} name="name" type="text" onBlur={handleOnBlur} />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            rules={[{ required: true, message: 'This field is required' }]}
                        >
                            <Input defaultValue={email} name="email" type="email" onBlur={handleOnBlur} />
                        </Form.Item>
                        <Form.Item
                            label="Phone"
                            rules={[{ required: true, message: 'This field is required' }]}
                        >
                            <Input defaultValue={phone} name="phone" type="text" onBlur={handleOnBlur} />
                        </Form.Item>
                        <Form.Item
                            label="Website"
                            rules={[{ required: true, message: 'This field is required' }]}
                        >
                            <Input defaultValue={website} name="website" type="text" onBlur={handleOnBlur} />
                        </Form.Item>

                    </Form>
                </Modal>
            </Card>
        </Col >
    );
};

export default User;