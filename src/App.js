import React, {useState} from 'react';
import './App.css';
import ShowPosts from './components/showPosts';

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  
  const fetchPosts = async () => {
      setLoading(true)
      const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${input}`)
      const data = await res.json()
      setPosts(data.results)
      setLoading(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchPosts()
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }


  return (
    <div className="App container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input onChange={handleChange} type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Button</button>
          </div>
        </div>
      </form>
      <ShowPosts posts={posts} loading={loading} />
    </div>
  );
}

export default App;
