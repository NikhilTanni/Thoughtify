import React, { Component } from 'react';
const { StatusBar } = require("react-native")

module.exports.StatusbarDefault = () => {
  return (
    <StatusBar barStyle="dark-content" backgroundColor='#fcf951' />
  )
}