
import './App.css';
import { Body } from './site/Body';
import { Footer } from './site/Footer';
import { Header } from './site/Header';

function App() {
  return (
    <>
    <Header titleHeader = {'Title HEADER'} />
    <Body titleBody = {'Title BODY'} />
    <Footer titleFooter = {'Title FOOTER'} />
    </>
  );
}

export default App;
