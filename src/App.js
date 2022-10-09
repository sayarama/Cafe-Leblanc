import logo from './logo.svg';
import './App.css';
import persona from './audio/persona.mp3';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({duration: 1500});
  }, []);
  return (
    <div className="App">
      <audio autoPlay loop>
        <source src={persona} type="audio/mpeg"/>
      </audio>

      <div className='banner'>
        <p>coffee & curry</p>
        <h1>Café Leblanc</h1>
      </div>

      <div className='profile'>
        <h2>Profile</h2>
        <div className='content-1'>
          <div className='content-1 left'>
            <p data-aos="fade-right">Leblanc is a café in Yongen-Jaya owned by Sojiro Sakura, famous for its signature coffee and curry. The curry and coffee's recipes were invented by Sojiro himself, and the current curry recipe was also improved by Wakaba. His adopted daughter.</p>
          </div>

          <div className='content-1 right'>
          </div>
        </div>

        <div className='content-2'>
          <div className='content-2 left'>

          </div>

          <div className='content-2 right'>
<p data-aos="fade-left">Sojiro is a former government official who was in contact with the research center Wakaba Isshiki worked for. After Wakaba died in a traffic incident, which was supposedly a suicide, Sojiro left his job and became the owner of Café Leblanc.</p>
          </div>
        </div>

        <div className='content-3'>
          <div className='content-3 left'>
          <p data-aos="fade-right">"As long as I'm here, the world leaves me be. No annoyances or troublesome people to deal with. It's like my own personal hideaway."
—Sojiro Sakura, Persona 5</p>
          </div>

          <div className='content-3 right'>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
