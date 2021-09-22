import './App.css';
import { MyNavbar } from './Components/Navbar';
import { getStudents } from './libs/requests';



async function App() {
    const response = await getStudents()
    console.log(response)
    return (
        <div>
            <MyNavbar />
            <h1>Hej</h1>
            <h2>{response.success ? response.data : 'med dig'}</h2>
        </div>
    );
}

export default App;
