import React from 'react';
import { CloseOutlined } from '@ant-design/icons';

const CustomCloseIcon = () => {
  return <CloseOutlined style={{
    // color:"#867d7b",
    color:'black',
    width:"37px",
    height:"18px",
    fontSize:"16px",
    textAlign:"center",
    borderRadius:"20%",
    border:"1px solid black",
    backgroundColor:"#dadada",
}} />;
};

export default CustomCloseIcon;

