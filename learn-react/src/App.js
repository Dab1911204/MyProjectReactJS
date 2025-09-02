import './App.css';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import MainContent from './components/MainContent';
import NavigationMenu from './components/NavigationMenu';
import Content from './components/Content';

function App() {
  return (
    <>
      <Header />
      <NavigationMenu />
      <div className="main">
        <Content text="Content1" number={10} active={true}/>
        <MainContent />
        <Content text="Content2" number={5} active={false}/>
      </div>
      <Footer />
    </>
  );
}

export default App;
