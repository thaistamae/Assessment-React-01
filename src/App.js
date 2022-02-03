import {Container} from './components/Container/Container'
import {IdCard} from './components/IdCard/IdCard'

function App() {
  return (
    <div>
    
      <Container>
        <IdCard
          fullName='John Doe'
          gender='male'
          birthday="1992-07-14"
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
      </Container>
      
      <Container>
        <IdCard 
          fullName='Obrien Delores'
          gender='female'
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </Container>



    </div>
  );
}

export default App;
