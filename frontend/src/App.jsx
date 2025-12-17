import './App.css';
import { Navbar } from './components/Navbar';
import { SearchBar } from './components/Searchbar';

function App() {
    return (<>
        <Navbar/>
        <SearchBar/>
        <div className="p-6">
            <div className="
                bg-green-400 
                sm:bg-yellow-400 
                md:bg-orange-400 
                lg:bg-red-400
                text-white 
                text-center 
                p-10 
                rounded-xl
            ">
                Resize the screen
            </div>
        </div>
    </>
    );
}

export default App;
