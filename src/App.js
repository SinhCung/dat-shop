// import logo from './logo.svg';
import './App.css';
import Header from './components/dat-shop/head';
import Footer from './components/dat-shop/footer';
function App(props) {
  return (
    <div>
      <Header/>
      {props.children}
      <Footer/>
    </div>
  );
}

export default App;
