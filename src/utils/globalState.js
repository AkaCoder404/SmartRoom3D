/**
 * @fileoverview This file contains global states for the application.
 * 
 */

import { create } from 'zustand';
import moment from 'moment';
import { message } from 'antd';

export const useStore = create((set) => ({
    checked: 0,
    setChecked: (id) => set(() => ({ checked: id })),
    resetChecked: () => set({ checked: 0 }),

    menu2: false,
    setMenu2: (id) => set(() => ({ menu2: id })),
}))

export const menu2state = create((set) => ({
    menu2: 0,
    setMenu2: (key) => set(() => ({ menu2: key })),
    menu3: 0,
    setMenu3: (key) => set(() => ({ menu3: key }))
}))

export const TimeState = create((set) => ({
    time: moment('20:06:00', 'HH:mm:ss'),
    date: moment('2022-11-28'),
    setTime: (key) => set(() => ({ time: key })),
    setDate: (key) => set(() => ({ date: key }))
}))

export const UIState = create((set) => ({
    reminder: false,
    setReminder: (key) => set(() => ({ reminder: !key, myself: 0, timer: 0, outline: 0 })),
    myself: false,
    setMyself: (key) => set(() => ({ myself: !key, reminder: 0, timer: 0, outline: 0 })),
    timer: false,
    setTimer: (key) => set(() => ({ timer: !key, reminder: 0, myself: 0, outline: 0 })),
    outline: false,
    setOutline: (key) => set(() => ({ outline: !key, reminder: 0, myself: 0, timer: 0 })),

}))

// login modal state
export const LoginState = create((set) => ({
    login: false,
    loginModalVisible: false,
    username: "AkaCoder404",
    setLogin: (key) => set(() => ({ login: key })),
    setLoginModalVisible: (key) => set(() => ({ loginModalVisible: key })),
    setUsername: (key) => set(() => ({ username: key })),
}));


// dropdown modal states
export const AboutModalState = create((set) => ({
    aboutModalVisible: false,
    setAboutModalVisible: (key) => set(() => ({ aboutModalVisible: key })),
    helpModalVisible: false,
    setHelpModalVisible: (key) => set(() => ({ helpModalVisible: key })),
}));


// save local user information
export var UserProfile = (function () {
    var username = "";
    var getUsername = function () {
        return username;
    };

    var setUsername = function (name) {
        username = name;
    };

    return {
        getUsername: getUsername,
        setUsername: setUsername
    };
})

// global AC temperture states
export const ACState = create((set) => ({
    // 环境温度
    livingroom: 0,
    setLivingroom: (key) => set(() => ({ livingroom: key })),
    bedroom: 0,
    setBedroom: (key) => set(() => ({ bedroom: key })),
    diningroom: 0,
    setDiningroom: (key) => set(() => ({ diningroom: key })),
    // 开关, true = on, false = off
    livingroomAcOnOFF: false,
    setLivingroomAcOnOFF: (key) => set(() => ({ livingroomAcOnOFF: key })),
    bedroomAcOnOFF: false,
    setBedroomAcOnOFF: (key) => set(() => ({ bedroomAcOnOFF: key })),
    diningroomAcOnOFF: false,
    setDiningroomAcOnOFF: (key) => set(() => ({ diningroomAcOnOFF: key })),
    // 目标温度
    livingroomTargetTemp: 0,
    setLivingroomTargetTemp: (key) => set(() => ({ livingroomTargetTemp: key })),
    bedroomTargetTemp: 0,
    setBedroomTargetTemp: (key) => set(() => ({ bedroomTargetTemp: key })),
    diningroomTargetTemp: 0,
    setDiningroomTargetTemp: (key) => set(() => ({ diningroomTargetTemp: key })),
}));

// global antd states
message.config({
    duration: 1,
    maxCount: 1,
})


