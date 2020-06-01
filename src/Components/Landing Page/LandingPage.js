import React,{Component} from 'react';
import Catalogue from './Catalogue/Catalogue';
import LoginPopup from './Navbar/LoginPopup';
import RegisterPopup from './Navbar/RegisterPopup';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import AboutUs from './AboutUs';
import Facilities from './Facilities';
import BookSlot from './BookSlot';
import PatientView from '../Patient View/PatientView';
import MainNav from './MainNav';
class LandingPage extends Component{
    constructor(){
        super();
        this.state={
            register:false,
            login:false,
        }
    }
    
    // hideNavbar=()=>{
    //     this.setState((prevState)=>{
    //         return(
    //             {nav:!prevState.nav}
    //             )
    //         });
    // }

    onRouteChange=(route)=>{
        if(route==='login'){
            this.setState((prevState)=>{
                return({login:!prevState.login});
            })
        }
          else if(route==='register'){
            this.setState({register:!this.state.register})
          }
          else{
            this.setState({login:false});
            this.setState({register:false});
          }
    }
    Login=()=>{
        return(
            <div>
            {
                (this.state.login===true)?
                <div>
                    <Catalogue/>
                    <LoginPopup hideNavbar={this.hideNavbar} onRouteChange={this.onRouteChange}/>
                </div>
                : <div><Catalogue/></div>
            }
            </div>
        );
    }
    Register=()=>{
        return(
            <div>
            {
                (this.state.register===true)?
                <div>
                    <Catalogue/>
                    <RegisterPopup onRouteChange={this.onRouteChange}/>  
                </div>
                : <div><Catalogue/></div>
            }
            </div>
        );
    }
    render(){
    return(
        <div>
        <Router>
        <MainNav onRouteChange={this.onRouteChange}/>
        <Switch>
                <Route path="/" exact component={Catalogue} />
                <Route path="/login" component={this.Login}/>
                <Route path="/register" component={this.Register}/>
                <Route path='/aboutus' component={AboutUs}/>
                <Route path='/facilities' component={Facilities}/>
                <Route path='/bookslot' component={BookSlot}/>
                <Route path='/patient' component={PatientView}/>
        </Switch>
        </Router>
       
        </div>
    );
    }
}

export default LandingPage;
