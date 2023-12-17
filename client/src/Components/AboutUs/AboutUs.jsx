

const AboutUs = () => {
    const people = [
        { name:'Jemila', 
          image: '/Jemila.jpg', 
          description: 'My name is Jemila and this is a place holder for my description.' },
        { name: 'Anuradha',
          image: '/Anu.jpg', 
          description: 'My name is Anuradha and this is a place holder for my description.',
        },
        { name: 'Hasan',
          image: '/hasan.jpg',        
          description: 'My name is Hasan and this is a place holder for my description.',
        },
    ]

    const groupDescription = "This is a group description and i want to see how will this placeholder show up in the page.";
    return (
      <div className='bg-center' style={{backgroundImage : `url(/m1.jpg)` }}>
          
         {/* <div style={{ position: 'relative', textAlign: 'center', color: 'white', minHeight: '100vh' }}>
      <img className="background-image" src="https://images7.alphacoders.com/132/1328228.png" alt="Background" />
      <div className="about-us" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60%', margin: 'auto' }}>
        <div className="people-container" style={{ display: 'flex', gap:'20px', justifyContent: 'space-between' }}>
          {people.map((person, index) => (
            <div key={index} className="person" style={{ textAlign: 'center', color: 'white', width: '50%', position: 'relative' }}>
              <img src={person.image} alt={person.name} style={{ width: '100%', height: '400px', borderRadius: '50%', marginBottom: '10px' }} />
              <p style={{position: 'absolute',top: '0',left: '50%',transform: 'translateX(-50%)',width: '70%',color: 'teal',background: 'rgba(255, 255, 255, 0.8)',padding: '5px',borderRadius: '50%',margin: 0,}}>{person.name}</p>
              <p>{person.description}</p>
            </div>
          ))}
        </div>
        <div className="group-description" style={{ textAlign: 'center', color: 'white', marginTop: '20px' }}>
          <p>{groupDescription}</p>
        </div>
      </div>
    </div> */}
        </div>
    );
};

export default AboutUs;