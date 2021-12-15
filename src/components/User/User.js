import React, { useState } from 'react';
import { Col, Card, Avatar } from 'antd';
import { MailOutlined, PhoneOutlined, GlobalOutlined, EditOutlined, DeleteFilled, HeartOutlined, HeartFilled, MessageOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';

const { Meta } = Card;
const User = ({ user }) => {
    const { username, name, email, phone, website } = user;
    const [liked, setLiked] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleLike = (e) => {
        setLiked(true);
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

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
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </Card>
        </Col >
    );
};

export default User;