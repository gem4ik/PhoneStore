import s from './App.module.css';
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";

function App() {
    return (
        <div className={s.AppWrapper}>
            <Header/>
            <main className={s.mainWrapper}>
                <nav className={s.nav}>

                    Nav Bar
                </nav>
                <div>
                    Main content
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
