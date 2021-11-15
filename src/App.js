import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import Header from './Components/Header/header.component';
import SignPage from './pages/sign-in-sign-up/sign-page';
import { Switch, Route, Redirect } from 'react-router-dom'
import ShopPage from './pages/shopage/shopage.component';
import {auth, createUserProfileDoc} from './firbase/firebase.utils'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

const Hats = () => {
  return (
    <h1>
      Hats page
    </h1>)
}

class App extends React.Component {


  closeSubFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.closeSubFromAuth = auth.onAuthStateChanged(async userAuth=>{
     if(userAuth){
       const userRef = await createUserProfileDoc(userAuth)
       userRef.onSnapshot(snapshot =>{
         setCurrentUser({
             id: snapshot.id,
             ...snapshot.data()
         })  
       })
       console.log(this.state)
     }else{
       setCurrentUser(userAuth)
     }
      
    })
  }
  componentWillUnmount(){
    this.closeSubFromAuth()
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render= {()=> this.props.currentUser ? <Redirect to='/'/> : <SignPage/> } />
        </Switch>

      </div>
    );
  }
 
}

const mapStateToProps = ({user})=>({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))


})

export default connect(mapStateToProps, mapDispatchToProps)(App);
