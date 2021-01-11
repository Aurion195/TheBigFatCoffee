import React from 'react';
import { Layout, Menu } from 'antd';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Profile from "./component/profile.component";
import PageChart from './component/pagechart.component.js'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./component/login.component";
import SignUp from "./component/signup.component";
import SideBar from './component/SideBar.component'

const { SubMenu } = Menu;
const handleClick = e => {
  console.log('click ', e);
};
const { Header, Sider, Content } = Layout;



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        connected: "",
        test: "",
    };
    this.liftState = this.liftState.bind(this);

}
   liftState =(bool)=> {
    this.setState({ connected : "true"});
   }


render() {
  return (
  <div className="App">
 <>
 <Router>
   <Layout>
      <Header>
        
      </Header>
      
      <Layout>
        <Sider style={{height: "100vh"}} >
      
        <SideBar  connected={this.state.connected} />
         
        </Sider>
      
        <Content>
          
            <Switch>
             <div >
              <Route path="/chart" component={PageChart} />
              <Route path="/profil" component={Profile} />
              <Route path="/login" render={()=><Login liftState={this.liftState}/> }/>
              <Route path="/sign-up" component={SignUp} />
              </div>
            </Switch>
            
        </Content>
    
      </Layout>
    </Layout>
    </Router>
</>
  </div>
);
}
}
export default App;