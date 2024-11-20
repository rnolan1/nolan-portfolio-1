import AestheticShot from '../assets/RNolan_AestheticShot_InteractiveWorkshop_thumbnail.jpg'
import Headshot from '../assets/RNolan_Headshot_InteractiveWorkshop_thumbnail.jpg'
import Passion from '../assets/RNolan_Photo3Composite_InteractiveWorkshop_thumbnail.jpg'
import Logo from '../assets/Nolan_Logo.svg'
import '../Blog.css'

function Blog() {
    return (
    <>
    <div className="Logo">
        <a href="app.tsx"><img src={Logo}/></a>
    </div>
    <div>
    <div className="BlogTitle">
        <h2>Blog</h2>
    </div>
        <div className="Shot1">
            <img src={Headshot}/>
            <h3>Shot 1</h3>
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
        </div>
        <div className="Shot2">
            <img src={AestheticShot}/>
            <h3>Shot 2</h3>
            <p>
            This photo was taken at an iconic landmark in natural lighting. There were a decent number of clouds in the
            sky but as it was midday, it was still fairly bright. As such, I used an ISO 80. There was plenty of light
            available that I did not require a higher sensitivity. The focal length of my camera was 24mm, providing a 
            wide view that worked well in capturing the landscape and architecture in this shot. This focal length allows the
            foreground to appear slightly exaggerated, while the background is large enough without being overwhelming.
            My camera's aperture was set to f/1.78, a wide aperture. This allowed more light to come in and hit the sensor and a 
            faster shutter speed without having to use a higher ISO. The shutter speed was very fast at 1/1818 s. This was
            necessary to avoid overexposure in the bright outdoor lighting.  
            </p>
        </div>
    </div>
    <div className="Shot3">
        <img src={Passion}/>
        <h3>Shot 3</h3>
        <p>
          My passion in life is difficult to communicate in a single photo so I chose to create a photo composite using 
          multiple different images. I love creating digital art and while someone
          who's good at painting or drawing could easily take a photo of themselves with the physical materials, my 
          art is created on the computer, mostly using Adobe Photoshop.
          I wanted to clearly show the intimate environment that I prefer when I'm creating art, so I decided to take the 
          photo in my living space with limited light. Therefore, I set up my shot by first closing the 
          curtains in the room to make it as dark as possible. I wasn't happy with the result of using the light of the 
          actual laptop for illumination so I ultimately chose to use a ring light, positioned at an angle between myself 
          and the laptop. The ring light achieved the glow I was looking for, but the next challenge was to
          actually photograph it using my cell phone camera. <br></br>
          I used an ISO 320 as there was some natural light present in the room but with the curtains drawn it was not 
          overly bright. Shooting with an ISO 320 allowed the camera to capture the details without creating
          a photo that looked excessively grainy. My focal length was 30mm which worked well for the low-light setting. 
          It was useful for capturing the whole scene in suitable focus. My aperture was set to f/1.9 in order
          to let in more light as I was shooting in a setting without bright natural light. This aperture setting created 
          a shallower depth of field, allowing the subject (myself) to be in focus while the background was slightly
          blurred and soft. I used a shutter speed of 1/52 s, slightly slower to allow more light to hit the sensor. 
          With a wider aperture in a dimmer lighting environment, this speed helped balance the exposure of the shot.
        </p>
    </div>
    </>
    );
  }
 
  export default Blog;