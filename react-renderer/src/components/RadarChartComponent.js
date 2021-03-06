import React from 'react';
// import './App.css';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { PieChart, Pie, Sector } from 'recharts';

// import {SimplePieChart} from './Pie.js';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

// Producer: Planner & Organizer Idea Carrier Idea Carrier: Entrepreneur & Thinker FE Programmer Frontend Engineer: Frontend, UI/UX Designer... BE Programmer Backend Engineer: Algorithm Engineer, Database Engineer... Hardware Designer Hardware / IoT Designer: Hardware Engineer & Assembler... Tester Tester: Well... tester ;D CyberSecurity Affiliate Cybersecurity Affiliated: Security Engineer & Tester Reviewer Community Supporter: Active People in the Community
// ReviewerConnoisseur: Active Figures in the Industry & Stacker & Investor

const data1 = [
  {
    subject: 'Producer', A: 120, B: 110, fullMark: 150,
  },
  {
    subject: 'Carrier', A: 98, B: 130, fullMark: 150,
  },
  {
    subject: 'Front End', A: 86, B: 130, fullMark: 150,
  },
  {
    subject: 'Back End', A: 99, B: 100, fullMark: 150,
  },
  {
    subject: 'Hardware/IOT', A: 85, B: 90, fullMark: 150,
  },
  {
    subject: 'Tester', A: 95, B: 85, fullMark: 150,
  },
  {
    subject: 'Cybersecurity', A: 100, B: 85, fullMark: 150,
  },
  {
    subject: 'Community', A: 60, B: 85, fullMark: 150,
  },
  {
    subject: 'Connoisseur', A: 78, B: 85, fullMark: 150,
  },
];

const pie_data = [
  { "username": "exchange_DAO", "nickname": null, "avatar": "/avatar/exchange.png", "percent": 0.3119505442477876 },
  { "username": "18******496@163.com", "nickname": "Zeno\u4e00\u4e03", "avatar": "/avatar/2019/10/27/048505ce12eb3ee8389f1f17962dff4b.jpg", "percent": 0.10843800884955752 },
  { "username": "guoy********dama@gmail.com", "nickname": null, "avatar": null, "percent": 0.08849557522123894 },
  { "username": "ariesmeowww", "nickname": "ariesmeowww", "avatar": "/avatar/2019/11/14/9157c5a9aa60b6e00f69bda262e21904.png", "percent": 0.06673963274336284 },
  { "username": "oH_q_wVdzlF5LBPc3MFAck-1KDR0", "nickname": "hongbo", "avatar": "/avatar/2019/11/30/e6ea7fa497799d43ba45cd858f6c500e.jpg", "percent": 0.04424778761061947 },
  { "username": "oH_q_wWM7UgONqpcnBnMrdkZkDLE", "nickname": "\u5218@blackstone.io", "avatar": "/avatar/2019/11/30/0e24621bbb202de1f95a9221b0a758f4.jpg", "percent": 0.041531951327433626 },
  { "username": "lychees", "nickname": "xiaodao", "avatar": "/avatar/2019/07/12/d0c1f59b794f1dd9437c84af8cc57b6e.png", "percent": 0.035955101769911506 },
  { "username": "aDappDeveloper", "nickname": "aDappDeveloper", "avatar": "/avatar/2019/10/14/16e3fd04148ad033e5cf40aa610377fe.png", "percent": 0.03235991150442478 },
  { "username": "Syntacticlosure", "nickname": "Syntacticlosure", "avatar": "/avatar/2020/01/23/dd9eb8140aa51f78240b409a59bf5441.jpg", "percent": 0.027937646017699116 },
  { "username": "oH_q_waTd9XmrBHcAG2gRGXJRYtI", "nickname": "\u90b1\u5c0f\u5c71", "avatar": "/avatar/2019/11/30/43000f5f5f562cd3ba5ff7c2a1559437.jpg", "percent": 0.01772082743362832 },
  { "username": "atiyit", "nickname": "caiyi", "avatar": "/avatar/2019/12/08/bb3ee97d1fa20bca7b585b231796f2cf.png", "percent": 0.017551389380530972 },
  { "username": "89275103", "nickname": "Frank", "avatar": "/avatar/2019/12/27/1a128129ee9c72b855ecc956da588d45.jpg", "percent": 0.015578190265486725 },
  { "username": "30*****58@qq.com", "nickname": "AF4Jackie", "avatar": "/avatar/2019/12/10/9c6cfff9b5db26e18dac6f8e0f393b18.jpg", "percent": 0.01327433628318584 },
  { "username": "t***pu@outlook.com", "nickname": "CyberForker-MemeMaster", "avatar": "/avatar/2019/12/08/63ffa3218e0671194d7cc3b25f4259eb.jpg", "percent": 0.009823008849557523 },
  { "username": "m***88@yeah.net", "nickname": "\u6108\u591c\u8d8a\u7cbe\u5f69", "avatar": "/avatar/2019/12/09/cbe532d147447618f35eacedc06a3e9e.jpeg", "percent": 0.008849557522123894 },
  { "username": "oH_q_wX_vgprl9l4jBRMuxeDvbek", "nickname": "\u5d14\u9e4f", "avatar": "/avatar/2019/12/03/5a52c52772e0d23431abb41e7c71e0e1.jpg", "percent": 0.006209783185840708 },
  { "username": "ca*****99@gmail.com", "nickname": "Linzh", "avatar": "/avatar/2020/01/18/cd45da95af4279ddefd2a36118af4c2d.jpg", "percent": 0.0061491681415929205 },
  { "username": "Kukmoon", "nickname": "Kukmoon\u8c37\u6708", "avatar": "/avatar/2020/01/21/f41ba97c8f88e68aa5fecf7a269777d1.jpg", "percent": 0.005140641592920354 },
  { "username": "liushmh", "nickname": "yiming liu", "avatar": "/avatar/2019/12/15/66cd42fc5f1547477fa692d2edc65940.jpg", "percent": 0.0048672566371681415 },
  { "username": "56*****05@qq.com", "nickname": "Tmomonono", "avatar": "/avatar/2019/08/16/b97a21d99009a8bce1d52301acc3a9e9.jpg", "percent": 0.004711491150442478 }
]

function MyRadarChart() {
  return (
    <div>

      <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data1}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>

    </div>
  );
}

export default MyRadarChart;