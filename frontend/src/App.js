
import { Container } from 'react-bootstrap'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <main classname="py-3">
        <Container>
          <h1>Welcome To ProShop</h1>
        </Container>
      </main>
    </>
  );
}

export default App
