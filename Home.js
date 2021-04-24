
const Home = ({ data,array }) => {
    
    return ( 
        <div>
            <h2>{ array }</h2>
            {data.map((person) => (
                <div className="preview" key={person.id}>
                    <h3>Name is: { person.name }</h3>
                    <h4>Age is: { person.age }</h4>
                </div>
                ))}
        </div>
     );
}

export default Home;
