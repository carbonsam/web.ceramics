import React, {useRef, useState} from 'react';
import {Button, Form, Input, Modal, Select} from 'antd';

const { Option } = Select;

export default ({ reloadBeers }) => {
    const formRef = useRef();

    const [isVisible, setIsVisible] = useState(false);

    const hideModal = () => setIsVisible(false);

    const showModal = () => setIsVisible(true);

    const onFinish = values => fetch("api/v1/beers/create/", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    })
        .then(data => {
            if (data.ok) {
                hideModal();
                return data.json();
            }
            throw new Error("Network error.");
        })
        .then(() => reloadBeers())
        .catch(error => console.error("Error: " + error));

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Create New +
            </Button>

            <Modal title="Add New Beer ..." visible={isVisible} onCancel={hideModal} footer={null}>
                <Form ref={formRef} layout="vertical" onFinish={onFinish}>
                    <Form.Item name="brand" label="Brand" rules={[{ required: true, message: "Please input your beer brand!" }]}>
                        <Input placeholder="Input your beer brand" />
                    </Form.Item>

                    <Form.Item name="style" label="Style" rules={[{ required: true, message: "Please input your beer style!" }]}>
                        <Input placeholder="Input your beer style" />
                    </Form.Item>

                    <Form.Item
                        name="country"
                        label="Country"
                        rules={[
                            {
                                required: true,
                                message: "Please input the country of the beer!",
                            },
                        ]}
                    >
                        <Select showSearch placeholder="Select your beer country" optionFilterProp="children" style={{ width: "100%" }}>
                            <Option value="Finland">Finland</Option>
                            <Option value="Germany">Germany</Option>
                            <Option value="Netherlands">Netherlands</Option>
                            <Option value="UK">UK</Option>
                            <Option value="USA">USA</Option>
                            <Option value="Other">Other</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="quantity" label="Quantity" rules={[{ required: true, message: "Please input the quantity!" }]}>
                        <Input type="number" placeholder="How many beers you desire?" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
};