const Home = () => {
    const handleCklick = (e) => {
        console.log("Hello Ninnga", e);
    }

    const handleCklickAgain = (name,e) => {
        console.log("Hello " + name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleCklick}>Click me</button>
            <button onClick={(e) => handleCklickAgain("Awsam", e)}>Click me again</button>
        </div>
     );
}
 
export default Home;