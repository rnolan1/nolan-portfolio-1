import React from 'react';
import AestheticShot from '../assets/RNolan_AestheticShot_InteractiveWorkshop_thumbnail.jpg';
import Headshot from '../assets/RNolan_Headshot_InteractiveWorkshop_thumbnail.jpg';
import Passion from '../assets/RNolan_Photo3Composite_InteractiveWorkshop_thumbnail.jpg';

const PhotoBlogTab: React.FC = () => {
  return (
    <div className="photo-blog">
      <h2>Photo Blog</h2>
      <p>Maybe add some intro text here.</p>
      <div className="gallery">
        <img src={AestheticShot} alt="Aesthetic Photo" />
        <img src={Headshot} alt="Headshot Photo" />
        <img src={Passion} alt="Passion Photo" />
      </div>
      <div className="blog-entries">
      <h3>Shot 1 – Aesthetic</h3>
      <p>This photo was taken at an iconic landmark in natural lighting. There were a decent number of clouds in the
        sky but as it was midday, it was still fairly bright. As such, I used an ISO 80. There was plenty of light
        available that I did not require a higher sensitivity. The focal length of my camera was 24mm, providing a 
        wide view that worked well in capturing the landscape and architecture in this shot. This focal length allows the
        foreground to appear slightly exaggerated, while the background is large enough without being overwhelming.
        My camera's aperture was set to f/1.78, a wide aperture. This allowed more light to come in and hit the sensor and a 
        faster shutter speed without having to use a higher ISO. The shutter speed was very fast at 1/1818 s. This was
        necessary to avoid overexposure in the bright outdoor lighting. </p>
      <h3>Shot 2 - Headshot</h3>
      <p>For my corporate headshot, I aimed to create a photo that looked professional
         but still allowed my personality to shine through. I chose to pose relaxed 
         and smiling, with my body angled slightly away from the camera as I didn't
         want to appear too stoic. A headshot is one of the first things employers will
         see while going through massive amounts of resumes and it should catch their attention. 
         I set up my photo close to a window to take advantage of the natural light.<br></br>
         I used an ISO 250 as the lighting conditions were moderate and I didn't need to
         drastically brighten the shot. The focal length used for the photo was 30mm. This is a
         very versatile focal length that I felt worked well for this particular shot. My aperture
         was set to f/1.9 as was appropriate for this portrait. I, the subject, am in focus while
         the background has a soft blur effect. Shutter speed was 1/60 s. This speed strikes a balance
         between allowing enough light to hit the sensor and minimizes any blurriness that 
         could be caused by movement.</p>
      <h3>Shot 3 - Passion</h3>
      <p>This photo was taken at an iconic landmark in natural lighting. There were a decent number of clouds in the
         sky but as it was midday, it was still fairly bright. As such, I used an ISO 80. There was plenty of light
         available that I did not require a higher sensitivity. The focal length of my camera was 24mm, providing a 
         wide view that worked well in capturing the landscape and architecture in this shot. This focal length allows the
         foreground to appear slightly exaggerated, while the background is large enough without being overwhelming.
         My camera's aperture was set to f/1.78, a wide aperture. This allowed more light to come in and hit the sensor and a 
         faster shutter speed without having to use a higher ISO. The shutter speed was very fast at 1/1818 s. This was
         necessary to avoid overexposure in the bright outdoor lighting. </p>
      </div>
    </div>
  );
};

export default PhotoBlogTab;