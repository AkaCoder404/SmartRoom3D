import React from 'react';
import {Modal} from 'antd';
import { useTranslation } from "react-i18next";
import { AboutModalState } from '../../../utils/globalState';

function HelpModal(props) {
    const { t } = useTranslation();
    const setHelpModalVisible = AboutModalState((state) => state.setHelpModalVisible);

    const handleOk = () => {
        setHelpModalVisible(false);
    }
    const handleCancel = () => {
        setHelpModalVisible(false);
    }

    return (
        <Modal
            style={{borderRadius: 20}}
            visible={props.visible}
            title={t("help")}
            onOk={handleOk}
            onText={t("confirm")}
            onCancel={handleCancel}
            centered
            >
            
        </Modal>
    )
}

export default HelpModal;