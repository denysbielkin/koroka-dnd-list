import React from 'react';
import Tabs from 'antd/es/tabs';

const { TabPane } = Tabs;

const Page = ({ id, index, name }) => {


    return <TabPane key={index} tab={name}>content of {name}</TabPane>
};


export default Page;
