import Navbar from "../components/Navbar";




function Home() {
    
    return (
      <div>
      <Navbar />
      <div className="home-page">
        <h1 className="title">Madrone's Server Assessment</h1>
        <p className="instructions"><span className="instruction">Instructions: </span><i>
        "Once you have signed in at the top right, you will be navigated to your first Trail 1 quiz.
         Once completed, you will be automatically logged out and sent back to this homepage. 
         You will be taking one quiz a day leading up to the Expo Trail quiz, which will end your assessment. 
        This four-part assessment is just to see how much you know so we have an idea of where to start you on your first day on the floor."
        </i>
        </p> 
        </div>
      </div>
    );
  };

  export default Home;