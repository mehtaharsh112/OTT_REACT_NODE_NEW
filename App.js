import Header from "./components/Header"
import Footer from "./components/Footer"
import './components/Footer.css'
import './App.css';
import './components/Header.css'
import Home from "./components/Pages/Home";
import Practice from "./components/Practice";

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      {/* <Practice/> */}
      <Footer/>
    </div>
  );
}
export default App;