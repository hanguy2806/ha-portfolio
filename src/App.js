import logo from './logo.svg';
import './App.css';
import Introduction from './components/Introduction/Introduction';
import About from './components/about/About';
import ProjectList from './components/projectList/Projects';


function App() {
  return (
    <div >
        <Introduction/>
        <About/>
        <ProjectList/>
    </div>
  );
}

export default App;
