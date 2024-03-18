import './App.css';
import Introduction from './components/introduction'
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      <p>
        HELLO
      <p>
      <MyButton/>
      </header>
    </div>
  );
}

export default App;
