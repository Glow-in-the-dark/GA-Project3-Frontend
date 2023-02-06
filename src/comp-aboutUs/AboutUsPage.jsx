import React from "react";
import Journey from "./Components/Journey";

const AboutUsPage = () => {
  const home = [
    {
      image: "Images/AboutUsPage/First_home.png",
      homeName: "First Home",
      year: "2003-2007",
      content: "Mr Tay began his charity in his home kitchen in 2003",
    },
    {
      image: "Images/AboutUsPage/Second_home.png",
      homeName: "Second Home",
      year: "2008-2009",
      content: "The Annex of the Nativity Church",
    },
    {
      image: "Images/AboutUsPage/Third_home.png",
      homeName: "Third Home",
      year: "2010-2012",
      content: "HighPoint Community Service Association",
    },
    {
      image: "Images/AboutUsPage/Fourth_home.png",
      homeName: "Fourth Home",
      year: "2013-2014",
      content: "Genting Lane, Cideco Industrial Complex",
    },
    {
      image: "Images/AboutUsPage/Fifth_home.png",
      homeName: "Fifth Home",
      year: "2014-2022",
      content: "Kembangan - Chai Chee Community Hub",
    },
    {
      image: "Images/AboutUsPage/Sixth_home.png",
      homeName: "Current Home",
      year: "2022-PRESENT",
      content: "No.1 Lorong J,Telok Kurau, Singapore 425792",
    },
  ];
  const displ = home.map((home, id) => {
    return (
      <>
        <div className="journeyCard">
          <li>
            <Journey
              image={home.image}
              homeName={home.homeName}
              year={home.year}
              content={home.content}
            />
          </li>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="story">
        <h1>OUR STORY</h1>
        <p>
          We are Willing hearts and we run a soup kitchen that provides around
          11,000 daily meals,island-wide 365 days a year (even on public
          holidays). we have a "no questions asked" policy, just as you would
          for your own family. That means that we provide meals to <b>anyone</b>
          who needs it.
        </p>
        <br />
        <p>
          Our belief is that every deserves access to a warm meal and we are
          committed to serving our community with compassion and respect. That's
          the mission of Willing Hearts when it was founded in 2005. We were
          awarded IPC(Institution of Public Character) status in2022.
        </p>
        <br />
        <p>
          As we are a community-based orgnaisation wholly run by volunteers, we
          hope to establish partnerships with different orgnaisations. These
          orgnaisations could be businesses as well as individual volunteers to
          support the Willing Hearts soup kitchen and the causes that we
          champion.
        </p>
      </div>
      <div className="journey">
        <h1>Our Journey</h1>
        {displ}
      </div>
      <div className="missionVision">
        <h2 className="missionHeader">MISSION</h2>
        <label className="missionContent">
          To provide daily meals and other support services to the
          underpriviledged, the need and other marginalised members in
          Singapore.We strive to assist and guide them towards rehabilitating
          and reinstating themselves as flourishing memebers of our society.
        </label>
        <h2 className="visionHeader">VISION</h2>
        <label className="visionContent">
          Improving the lives of the underpriviledged and marginalised by
          providing them with their "daily bread" and to help them become
          thriving members of our society.
        </label>
      </div>
      <div className="committee">
        <h1 className="committee members">COMMITTEE MEMBERS</h1>
        <img src="Images/AboutUsPage/Comm.png"></img>
      </div>
    </>
  );
};

export default AboutUsPage;
