import React from 'react';
import Project3Video from '../assets/CS60411_Video_Assignment.mp4';
import img3580 from '../assets/IMG_3580.jpg';
import img3576 from '../assets/IMG_3576.jpg';
import Photo5 from '../assets/PHOTO-2024-11-10-18-17-58 2.jpg';
import Photo4 from '../assets/PHOTO-2024-11-10-18-18-03.jpg';
import Photo3 from '../assets/PHOTO-2024-11-10-18-18-04.jpg';
import Photo6 from '../assets/PHOTO-2024-11-10-18-17-58.jpg';
import DogPhoto from '../assets/PHOTO-2024-11-10-18-18-05.jpg';
import Practice3 from '../assets/PHOTO-2024-10-30-19-04-12 2.jpg';
import Practice2 from '../assets/PHOTO-2024-10-30-19-04-12.jpg';
import Practice1 from '../assets/PHOTO-2024-10-30-19-04-11.jpg';

const VideoBlogTab: React.FC = () => {
  return (
    <div className="video-blog">
      {/* Video Blog Headline */}
      <h2>Video Blog</h2>
      <p>Take a look behind-the-scenes at the making of the Venture bag product demo video.</p>
      {/* Product Demo Video Goes Here */}
      <div className="video-gallery">
        <div className="video-item">
          <iframe
            width="560"
            style={{ border: 0 }}
            src={Project3Video}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Product Demo Video (final)</p>
        </div>
        {/* Video Blog Text */}
        <div className="video-progress">
         <p>Our group created our video over the course of several out-of-class meetings.
            First we met to brainstorm what product we might want to spotlight for our demo video.
            We shared videos that inspired us and talked about what compositions we really loved 
            and how we might incorporate a similar style into our own video. We ultimately decided 
            to feature a backpack that doubled as a travel bag, allowing you to pack shoes, 
            charging cables, clothes and anything you might need for a weekend away.<br></br>
            While talking through our storyboard ideas, it became clear that we should film our 
            video both indoors and outdoors, using the outdoor shots to highlight lifestyle 
            footage and the indoors to focus on the product itself and its features. Vimal acted 
            as our director, I (Rachel) did cinematography and video editing, Mridula was on sound, 
            Chidanand did lighting and acted in our outdoor shots, and Nehal was in charge of 
            continuity. Our video was shot on an iPhone 15 Pro. <br></br>
            Our first shoot took place outside. We knew we wanted to transition into the outdoor portion
            of our video by opening with the backback unzipping so we pressed record and placed the 
            phone inside the bag. It took quite a few tries and a coordinated effort between Mridula and 
            Chidanand to make sure that the backpack was opened wide enough to create the transition. 
            Next we headed over to the main building and took video on the stairs and some walking shots. 
            There was an event going on at the time which made filming difficult. Nehal made sure that we
            weren't capturing any children in the background of our video. <br></br>
            Our group wished to create a three-part walking scene where our subject walked from one frame to
            the next. These compositions proved tricky to film. It was difficult to decide where to cut the clip
            and unexpected objects moving into the frame of the video made the editing process more 
            complicated than it should have been. <br></br>
            In our indoor shots, we used a white backdrop to ensure the focus was solely on the product.
            We used lighting to create drama and emphasis on specific backpack features. During the editing
            process, I decided to recolor the scene with a blue tint to give it a cool, modern vibe. This also
            helped in camouflaging a wrinkly backdrop.<br></br>
            Before I began editing, Mridula chose an audio track for the video which helped to determine
            the overall pacing of transitions. Vimal and I met and discussed what video clips we should 
            use in the final edit and finalized the scene order. The biggest struggles I had in the editing process were
            the three-part walking transition scene and the indoor shots, as they didn't have the best backdrop.
            After I edited the video, the entire group met and made revisions. We used Handbrake to compress
            our video to a smaller file size.
         </p>
         {/* Behind-The-Scenes Photos */}
         <h3>Behind-The-Scenes</h3>
         <div className="videoPhoto-gallery">
            <img src={Practice1} />
            <img src={Practice2} />
            <img src={Practice3} />
            <img src={img3576} />
            <img src={img3580} />
            <img src={Photo3} />
            <img src={DogPhoto} />
            <img src={Photo4} />
            <img src={Photo5} />
            <img src={Photo6} />
         </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBlogTab;