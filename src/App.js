import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import DrumBtn from './components/drumBtns';
import { changeVolume } from './features/drumSlice';

const sounds = [
  {
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
]

function App() {

  const { display, volume } = useSelector(store => store.drums)

  const dispatch = useDispatch()
  
  const btns = sounds.map(btn => {
   return(<DrumBtn 
    id={btn.id}
    keyTrigger={btn.keyTrigger}
    audio={btn.url} 
    />)
  })

  const setKeyVolume = () => {
    const audios = sounds.map(sound => document.getElementById(sound.keyTrigger));
    audios.forEach(audio => {
      if(audio) {
        audio.volume = volume
      }
    })
  }

  return (
    <div className="App">
      <div id='drum-machine'>
      <h2 id='display'>{display}</h2>
      <input type="range" id="volume" min="0" max="1" step="0.01" value={volume} onChange={(e) => {dispatch(changeVolume(e.target.value))}}></input>
      <h3>Volume: %{Math.round(volume*100)}</h3>
        <div id='btn-container'>
          {setKeyVolume()}
          {btns}
        </div>
      </div>
    </div>
  );
}

export default App;
