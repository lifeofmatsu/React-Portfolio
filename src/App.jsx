import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {
	const [currentPage, setCurrentPage] = useState("About");
    // return the correct component to render.
    const renderPage = () => {
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return null
    };
    
      const handlePageChange = (page) => setCurrentPage(page);
    
      return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} 
            ></Header>
            <div>
                <main>{renderPage()}</main>
            </div>
            <div>
				<Footer></Footer>
			</div>
        </div>
      );
    }


export default App;