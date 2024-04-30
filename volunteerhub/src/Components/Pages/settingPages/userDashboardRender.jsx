// Import necessary modules
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserSettingPage from './userSettingPage';
import ProfilePage from './profilePage';
// Import other page components

const App = () => {
    return (
        <div>
            <UserSettingPage />
            <ProfilePage />
        </div>
    );
};

export default App;
