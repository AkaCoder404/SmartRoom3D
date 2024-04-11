import React, {useState} from 'react';
import {Form, Modal, Input, message} from 'antd';
import { useTranslation } from "react-i18next";
import axios from 'axios';

import { LoginState } from "../../../utils/globalState";

function LoginModal(props) {
    // const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const { t } = useTranslation();
    const [form] = Form.useForm();
    // const [messageApi, contextHolder] = message.useMessage();
    // login global state
    const setLoginModalVisible = LoginState((state) => state.setLoginModalVisible);
    const setLogin = LoginState((state) => state.setLogin);
    const setUsername = LoginState((state) => state.setUsername);

    const onFinishForm = (values) => {
        console.log('Received values of form: ', values);
    }
    const onFinishFormFail = (errorInfo) => { 
        console.log('Failed:', errorInfo);
    }

  
    // log into account
    const handleOk = async () => {
        setConfirmLoading(true);
        const data = {
            "username": form.getFieldsValue()[t("username")],
            "password": form.getFieldsValue()[t("password")],
        }
        console.log("sending", {params :data});   
        // TODO: replace with server api
        await axios.get('http://localhost:9000/', // breaks with axios.post?
            {params :data})
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    // message.success(t("loginSuccess"));
                    message.success({
                        content: t("loginSuccess"),
                        style: {
                            marginTop: '10vh',
                        }
                    })
                }
                setConfirmLoading(false);
                setLoginModalVisible(false);
                setLogin(true);
                setUsername(data.username);
                form.resetFields();
            })
            .catch(error => {
                console.log(error)
                message.error({
                    content: t("loginFailed"),
                    style: {
                        marginTop: '10vh',
                    }
                });
                setConfirmLoading(false);
            });
    };      

    const handleCancel = () => {
        form.resetFields();
        setLoginModalVisible(false);
    }

    return (
        <Modal 
            style={{ borderRadius: 20 }}
            visible={props.visible}
            title={t("login")}
            confirmLoading={confirmLoading}
            // okButtonProps ={{disabled:true}}
            // cancelButtonProps ={{disabled:true}}
            onOk={handleOk}
            onCancel={handleCancel}            
            okText={t("confirm")}
            cancelText={t("cancel")}
            centered
            >   
                {/* {contextHolder} */}
                <Form form = {form}
                    // style={{ backgroundColor: "red"}}
                    name="normal_login"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 21 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinishForm}
                    onFinishFailed={onFinishFormFail}
                    autoComplete="off"
                >
                    <Form.Item 
                        label={t("username")}
                        name={t("username")}
                        rules={[{ required: true, message: t("usernamerule")}]}
                        labelAlign="left"
                    >
                        <Input/ >
                    </Form.Item>
                    <Form.Item 
                        label={t("password")}
                        name={t("password")}
                        rules={[{ required: true, message: t("passwordrule") }]}
                        labelAlign="left"
                    >
                        <Input/>
                    </Form.Item>
                </Form>
        </Modal>
    );
}

export default LoginModal;