import './App.css';
import Contents from './Components/Contents/Contents.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import { getCurrentPage } from './Redux/state.js';

function App(props) {
  return (
    <div className="App">
      
      <Header />
      
      <div className="Body">
        <NavBar currPage={props.state.currPage} getCurrentPage={getCurrentPage}/>
        <Contents state={props.state}/>
      </div>

      <Footer footerInformation={props.state.footerInformation}/>
    </div>
  );
}

export default App;
