import React from 'react';
import {Modal} from 'antd';
import { useTranslation } from "react-i18next";
import { AboutModalState } from '../../../utils/globalState';

function AboutMeModal(props) {
    const { t } = useTranslation();
    const setAboutModalVisible = AboutModalState((state) => state.setAboutModalVisible);

    const handleOk = () => {
        setAboutModalVisible(false);
    }

    const handleCancel = () => {
        setAboutModalVisible(false);
    }

    return (
        <Modal
            style={{borderRadius: 20}}
            visible={props.visible}
            title={t("userinformation")}
            onOk={handleOk}
            onCancel={handleCancel}
            centered
            >
        </Modal>
    )
}

export default AboutMeModal;