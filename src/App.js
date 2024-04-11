/**
 * @fileoverview This file contains the main application component.
 * 
 */

import React from 'react';
import MyLayout from "./components/UI/MyLayout";
import HouseReal from "./components/Scene/HouseReal";

import './App.less';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyLayout />
        <HouseReal />
      </div>
    );
  }
}

