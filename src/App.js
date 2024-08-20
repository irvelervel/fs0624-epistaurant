// RICORDIAMOCI DI INCLUDERE IN APP.JS IL FILE CSS DI BOOTSTRAP PRESENTE IN NODE_MODULES
// !!!
import 'bootstrap/dist/css/bootstrap.min.css'
// !!!
import './App.css'
import CustomNavbar from './components/CustomNavbar'

function App() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>
      <main>
        <h2 className="text-center mt-5">IL CAROSELLO ANDRÀ QUA</h2>
      </main>
    </>
  )
}

export default App
