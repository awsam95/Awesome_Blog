const Home = () => {
    const handleCklick = () => {
        console.log("Hello Ninnga");
    }

    const handleCklickAgain = (name) => {
        console.log("Hello " + name);
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleCklick}>Click me</button>
            <button onClick={() => handleCklickAgain("Awsam")}>Click me again</button>
        </div>
     );
}
 
export default Home;