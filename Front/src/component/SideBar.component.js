import { Menu } from 'antd';
import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppstoreOutlined, MailOutlined, SettingOutlined ,AreaChartOutlined} from '@ant-design/icons';

const { SubMenu } = Menu;

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: localStorage.getItem("connected") 
    };
    };
  
  logout= (e, props) => { 
    e.preventDefault();
    this.setState({ connected: false });
    localStorage.setItem("connected",false);
   }

   componentDidUpdate(prevProps, prevState) {
  if (prevState.connected != this.state.connected) {
    console.log(this.props.connected)
  }
}
  render(){

    
    return (
  <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline" 
        style={{height: "100vh"}}
      >
    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation">
    <Menu.Item key="1"> 
          <Link className="nav-link" to={"/login"}>Login</Link>
        </Menu.Item>
        <Menu.Item key="2"> 
        <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
        </Menu.Item>
        {localStorage.getItem("connected")  === "true" ?(
        <>
          <Menu.Item key="3" > 
            <Link className="nav-link" to={"/chart" } icon={<AreaChartOutlined />} >Chart</Link>
           <AreaChartOutlined />
          </Menu.Item>
          <Menu.Item key="4"> 
            <Link className="nav-link" to={"/profil"}>Profil</Link>
          </Menu.Item>
          <Menu.Item key="5"> 
            <Link className="nav-link" to={"/login"} onClick={this.logout}>Logout</Link>
          </Menu.Item>
        </>):(
          <>
          </>
        )}

    </SubMenu>
  </Menu>

    )}
}

export default SideBar