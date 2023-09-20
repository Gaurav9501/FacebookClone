import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './index.css'

function App() {
  return (
    <div className="App bg-gray-100 h-screen">
      <Header></Header>
      <div className='flex'>
      <Sidebar></Sidebar>
      <Feed></Feed>
      </div>
    </div>
  );
}

export default App;
