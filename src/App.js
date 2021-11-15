import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import './App.css';
import News from './component/News/News';

function App() {
  const [news, setNews ] = useState([]);
  useEffect(()=> {
    fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1969ca22637c4c77b5a351cfe17ea329')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  },[])

  return (
    <div className="App">
      <Row xs={1} md={2} className="g-4">
   {
     news.map(nw => <News news = { nw }></News>)
   }
</Row>
      </div>
  );
}

export default App;
