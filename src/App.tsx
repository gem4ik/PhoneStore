import s from './App.module.css';

function App() {
    return (
        <div className={s.AppWrapper}>
            <header className={s.header}>
                <div className={s.headerTop}>
                    HEADER TOP
                </div>
                <div className={s.headerBot}>
                    HEADER BOT
                </div>
            </header>
            <main className={s.mainWrapper}>
                <nav className={s.nav}>
                    Nav Bar
                </nav>
                <div>
                    Main content
                </div>
            </main>
            <footer className={s.footer}>
                Footer
            </footer>
        </div>
    );
}

export default App;
