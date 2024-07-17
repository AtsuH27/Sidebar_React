import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';
import UploadIcon from '@mui/icons-material/Upload';
import SettingsIcon from '@mui/icons-material/Settings';


export const SidebarData =[
    //サイドバーの属性を配列で持たせる
    {
        title:"ホーム",
        icon: <HomeIcon/>,
        link: "/home",
    },
    {
        title:"メール",
        icon: <MailIcon/>,
        link: "/pages/mail.js",
    },
    {
        title:"アナリティクス",
        icon: <AnalyticsIcon/>,
        link: "/analitics",
    },
    {
        title:"友達追加",
        icon: <PeopleIcon/>,
        link: "/fried",
    },
    {
        title:"お支払い設定",
        icon: <PaymentIcon/>,
        link: "/pay",
    },
    {
        title:"アップロード",
        icon: <UploadIcon/>,
        link: "/upload",
    },
    {
        title:"詳細設定",
        icon: <SettingsIcon/>,
        link: "/rocket",
    },
];
