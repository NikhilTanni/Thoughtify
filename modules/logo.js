import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native'

export const SplashLogoImage = () => {
  const SLIStyle = StyleSheet.create({
    SplashLogoImage: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(245, 245, 245, 0.9)',
      borderRadius: 60,
      width: 120,
      height: 120,
      margin: '20%'
    }
  });
    return (<Image source = {require('../assets/tnik_logo.png')} style={SLIStyle.SplashLogoImage} />)
}

export const PoweredLogoImage = () => {
    return (<Image source = {require('../assets/tnik_logo.png')} style={{width: 36, height: 36}} />)
}