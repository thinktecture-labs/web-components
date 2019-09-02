import React from 'react';
import './index.css';
import defineElement from './customElement';
import LoginFormComponent from './components/login-form';
import ChartComponent from './components/chart';
import ChartWithDrillDown from './components/react-realtime-chart';

defineElement(LoginFormComponent, 'react-login', ['firstName', 'lastName', 'password']);
defineElement(ChartComponent, 'react-chart', ['label']);
defineElement(ChartWithDrillDown, 'react-chart-2', ['label']);

