import React, { Component } from 'react';
import { Image } from 'react-native'

export const SplashLogoImage = () => {
    return (<Image source = {require('../assets/CA_LOGO2.png')} style={{width: 73.8, height: 127.8, margin: '20%'}} />)
}

export const PoweredLogoImage = () => {
    return (<Image source = {require('../assets/tnik_logo.png')} style={{width: 36, height: 36}} />)
}