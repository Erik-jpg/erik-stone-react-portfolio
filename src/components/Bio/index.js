import React from "react";




function Bio() {
  return (
    <>
      <img className="ProfilePhoto" style={{ height:"25%", width:"25%" }} src='https://i.ibb.co/GWPPR8t/23668509-841127372723775-9055571650329706496-n.jpg' alt="MyFace2" />
      
      

      <div>
        <p className="BioDescription">
          This is my Bio, About me and photo of me... area. It's hard for me to
          sum myself up in a direct way. The reason it is so difficult is
          because I still learn new things and new things about myself.
        
          Things I have found that I enjoy: Ridding my bicycle, playing my
          guitar, playing table top games (aka board games) and some video
          games, I also love to homebrew, cook, bake, family, friends and a good
          brain teaser.

          It's the brain teaser part, and logic puzzles that I found that I
          really enjoyed learning to code. I have enjoyed all the spare time I
          put into it that I joined University of Oregon's Coding Boot Camp to
          see if I could make a career out of it.
        
          While this react profile is a requirement to complete a homework, I
          plan to come back after the boot camp and continue to add to it.
        </p>
      </div>
    </>
  );
}

export default Bio;

// The About me title and section are the default.
// The about me must contain a recent photo or avatar and a short bio.
