import { useState } from 'react';
import { Route, Switch, withRouter } from 'react-router';
import './App.css';
import Aidkit from './components/Aidkit';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import Products from './components/Products';
import WithDin from './components/WithDin';
import 'aos';
import Aos from 'aos';
import DeepTrust from './components/DeepTrust';

function App(props) {

  const [open, setOpen] = useState(false);
  const [error, upError] = useState(false)

  Aos.init({
    duration: 1200,

  });

  const handleClickOpen = () => {
    setOpen(true);
    upError(false)
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' render={(routeProps) => {
          return <Homepage handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} {...routeProps} />
        }} />
        <Route exact path='/aidkit' render={(routeProps) => {
          return <Aidkit  {...routeProps} />
        }} />
        <Route exact path='/products' render={(routeProps) => {
          return <Products  {...routeProps} />
        }} />
        <Route exact path='/work-DIN'> <WithDin /> </Route>
        <Route exact path='/deeptrust'><DeepTrust /></Route>
      </Switch>
      <Footer open={open} handleClickOpen={handleClickOpen} upError={upError} error={error} handleClose={handleClose} />
    </div >
  );
}

export default withRouter(App);
