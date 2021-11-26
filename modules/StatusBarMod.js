import React, { Component } from 'react';
const { StatusBar } = require("react-native")

module.exports.StatusbarDefault = (props) => {
  const SBColor = (props.SBColor !== undefined) ? props.SBColor : "#FCF951";
  const SBContentColor = (props.SBContentColor !== undefined) ? props.SBContentColor : "light-content";

  return (
    <StatusBar barStyle={SBContentColor} backgroundColor={SBColor} />
  )
}