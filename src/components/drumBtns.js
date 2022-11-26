import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { displaySound} from '../features/drumSlice';
import './drumBtn.scss'

const DrumBtn = ({ id, keyTrigger, audio }) =>{
    
    const dispatch = useDispatch()

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown)
    }, [])

    const play = () => {
    const sound = document.getElementById(keyTrigger);
    const btn = document.getElementById(id)
    btn.style.backgroundColor = 'gray'
    sound.currentTime = 0;
    sound.play()
    dispatch(displaySound(id))
    setTimeout(() => {
        btn.style.backgroundColor = ''
    }, 100)
    }

    const detectKeyDown = (e)=> {
        if (e.key.toUpperCase() === keyTrigger){
            play()
            
        }
    }

    return(
        <>
            <div className='drum-pad' id={id} onClick={() => play()}>
                <audio className='clip' id={keyTrigger} src={audio}></audio>
                {keyTrigger}
            </div>
        </>
    )
}

export default DrumBtn