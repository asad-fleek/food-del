import { assets } from '../../utiles/image';
import './styles.css' 

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience <br /> Tomato App</p>
        <div className='app-download-platforms'>
            <img src={assets.play_store} alt="image" />
            <img src={assets.app_store} alt="image" />
        </div>
    </div>
  )
}

export default AppDownload;