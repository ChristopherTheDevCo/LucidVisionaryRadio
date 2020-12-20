import {useState, useEffect} from 'react';
import Player from './components/Player';
function App() {
const[songs] = useState([
  {
    title:"Hi's n Lows",
    artist: "Loonatic",
    img_src:"./images/LoonArt1.jpg",
    src: "./music/HiNLow.mp3"
  },

  {
    title:"Birthday Girl",
    artist: "Youngin Hall ft Oj Carter",
    img_src:"./images/Yart1.jpg",
    src: "./music/BdayGirl.mp3"
  },

  {
    title:"Terrorize",
    artist: "Youngin Hall ft Cooch",
    img_src:"./images/Yart2.jpg",
    src: "./music/Terrorize.mp3"
  },

  {
    title:"Royal Mode",
    artist: "Loonatic",
    img_src:"./images/LoonArt2.JPG",
    src: "./music/Royal.mp3"
  },

  {
    title:"Can we talk",
    artist: "Youngin Hall",
    img_src:"./images/Yart3.JPG",
    src: "./music/Cwt.mp3"
  },

  {
    title:"Queens Shit",
    artist: "DNA",
    img_src:"./images/DnaArt.JPG",
    src: "./music/Qshit.mp3"
  },

  {
    title:"Unavoidable",
    artist: "Youngin Hall",
    img_src:"./images/Yart1.jpg",
    src: "./music/Unavoid.mp3"
  },

  {
    title:"Venom",
    artist: "Loonatic ft Youngin Hall",
    img_src:"./images/LoonArt3.JPG",
    src: "./music/Venom.mp3"
  },

  {
    title:"Opp Shop",
    artist: "Youngin Hall",
    img_src:"./images/Yart2.jpg",
    src: "./music/Opp.mp3"
  },

  {
    title:"Yall Aint Ready",
    artist: "Loonatic",
    img_src:"./images/LoonArt1.jpg",
    src: "./music/Yar.mp3"
  },

  {
    title:"MayDay",
    artist: "Loonatic",
    img_src:"./images/LoonArt2.JPG",
    src: "./music/MayDay.mp3"
  }
]);

const [currentSongIndex, setCurrentSongIndex] = useState(0);
const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1 );

useEffect(()=> {
setNextSongIndex(()=> {
if (currentSongIndex + 1 > songs.length -1) {
  return 0;
} else {
  return currentSongIndex + 1;
}
});
}, [currentSongIndex, songs.length]);

  return (
    <div className="App">
    <Player 
    currentSongIndex ={currentSongIndex}
    setCurrentSongIndex={setCurrentSongIndex}
    nextSongIndex={nextSongIndex}
    songs={songs}
    />
    </div>
  );
}

export default App;
