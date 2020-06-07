import React from 'react';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import History from './Views/History';
import Profile from './Views/Profile';
import Records from './Views/Records';
import './PatientView.css';
class PatientView extends React.Component{
    constructor(){
        super();
        this.state={
            baropen:false
        }
    }
    openBar=()=>{
        this.setState({baropen:!this.state.baropen})
    }
    welcome=()=>{
        return(
        <div className="welcome">
        <h1>WELCOME !</h1>
        </div>
    )}
    render(){
        return(
            <div>
                <Router>
                <Sidebar openBar={this.openBar} baropen={this.state.baropen}/>
                <Switch>
                    <Route  path='/patient/:id' component={this.welcome}></Route>
                    <Route  path='/profile' component={Profile}></Route>
                    <Route  path='/records' component={Records}></Route>
                    <Route  path='/history' component={History}></Route>
                </Switch>
                </Router>
            </div>
        )
    }
}

export default PatientView;