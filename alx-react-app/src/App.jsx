import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
    return (
        <>
            <WelcomeMessage />
            <Header />
            <MainContent />
            <Footer />
            <UserProfile name="Benny" age={26} bio="React is cool and fun" />
        </>
    );
}
export default App;