import './App.css';
import Introduction from './components/Introduction/Introduction';
import About from './components/about/About';
import ProjectList from './components/projectList/Projects';
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div >
        <Introduction/>
        <About/>
        <ProjectList/>
        <Footer/>
    </div>
  );
}

export default App;
