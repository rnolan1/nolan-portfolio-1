import { useState } from 'react';
import { Link } from 'react-router-dom';
import Project3Video from '../assets/CS60411_Video_Assignment.mp4';
import './Work.css';
import AestheticShot from '../assets/RNolan_AestheticShot_InteractiveWorkshop_thumbnail.jpg';
import Headshot from '../assets/RNolan_Headshot_InteractiveWorkshop_thumbnail.jpg';
import Passion from '../assets/RNolan_Photo3Composite_InteractiveWorkshop_thumbnail.jpg';

function Work() {
  // Define a type for the emoji counts state
  const [emojiCounts, setEmojiCounts] = useState<{
    heart: number;
    thumbsUp: number;
    clap: number;
    sick: number;
  }>({
    heart: 0,
    thumbsUp: 0,
    clap: 0,
    sick: 0,
  });

  const handleEmojiClick = (emoji: keyof typeof emojiCounts) => {
    setEmojiCounts((prevCounts) => ({
      ...prevCounts,
      [emoji]: prevCounts[emoji] + 1,
    }));
  };

  return (
    <div className="container">
      <div className="content-section">
        <div className="text-section">
          <h1>Assessment 3:<br /> Product Demo Video</h1>
          <button className="Blog-button">
            <Link to="/Blog">Check Out Our Blog Post</Link>
          </button>
        </div>

        <div className="video-section">
          <video width="700" height="394" controls>
            <source src={Project3Video} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="emoji-reactions">
        <div className="emoji" onClick={() => handleEmojiClick('heart')}>
          ❤️ {emojiCounts.heart}
        </div>
        <div className="emoji" onClick={() => handleEmojiClick('thumbsUp')}>
          👍 {emojiCounts.thumbsUp}
        </div>
        <div className="emoji" onClick={() => handleEmojiClick('clap')}>
          👏 {emojiCounts.clap}
        </div>
        <div className="emoji" onClick={() => handleEmojiClick('sick')}>
          🤢 {emojiCounts.sick}
        </div>
    </div>
    <div className="container2">
     <div className="container-section2">
      <div className="photo-text-section">
          <h1>Assessment 2:<br /> Photography</h1>
          <button className="Blog-button">
            <Link to="/Blog">Check Out Our Blog Post</Link>
          </button>
        </div>
        <div className="work-photo-gallery">
            <img src={AestheticShot} alt="Photo 1" />
            <img src={Headshot} alt="Photo 2" />
            <img src={Passion} alt="Photo 3" />
        </div>
     </div>
    </div>
    </div>
  );
}

export default Work;
