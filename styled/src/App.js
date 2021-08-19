import './App.css';
import {Switch, Route} from 'react-router-dom';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import {Wrapper} from './Components/Wrapper'
import {ImageContain, Image} from './Components/ImageContainer'
import Logo from './assets/padlock.svg';


function App() {
  return (
    <>
    <div className="App">
      <Wrapper>
          <ImageContain>
            <Image src={Logo}/>
          </ImageContain>
          <Switch>
            <Route exact path ='/' component={SignIn}/>  
            <Route path ='/sign-up' component={SignUp}/>
          </Switch>
        </Wrapper>
    </div>
    </>
  );
}

export default App;
