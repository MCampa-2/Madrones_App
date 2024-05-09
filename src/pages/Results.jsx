function Results(){

    const trail1Results = localStorage.getItem("trail1");
    const trail2Results = localStorage.getItem("trail2");
    const trail3Results = localStorage.getItem("trail3");
    const expoTrailResults = localStorage.getItem("expoTrail");
    return(
        <div className="results-container">
            <h1 className="results-title">Quiz Results</h1>
            <div className="scores">
                <h2>Trail 1 score: {trail1Results ? trail1Results + "%" : ""}</h2>
                <h2>Trail 2 score: {trail2Results ? trail2Results + "%" : ""}</h2>
                <h2>Trail 3 score: {trail3Results ? trail3Results + "%" : ""}</h2>
                <h2>Expo Trail score: {expoTrailResults ? expoTrailResults + "%" : ""}</h2>
            </div>
            <div className="motivation">
                <p><i>"The more you know the more you'll make."</i></p>
            </div>
        </div>
    )
};

export default Results;