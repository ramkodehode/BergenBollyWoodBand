import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const URL =
    "https://3gyp0oi0.api.sanity.io/v2021-10-21/data/query/production?query=*%20%5B_type%3D%3D'post'%5D";
  const getMainSponsors = () => {
    axios.get(URL).then((res) => {
      return setData(res.data.result);
    });
  };

  useEffect(() => {
    getMainSponsors();
  }, []);

  return (
    <>
      <h1>BergenBollywoodBand</h1>

      {data.map((item) => {
        return (
          <div className="App">
            <header className="App-header">
              <h2> Song list </h2>

              <ol>
                <b>
                  <li> {item.Name}</li>
                </b>
                <h4>Orignal: </h4>

                <a target={'blank'} href={item.link}>
                  {item.link}
                </a>
                <h4>Alternative 1: </h4>

                <a target={'blank'} href={'https://youtu.be/0vgh5lBo2Ek'}>
                  https://youtu.be/0vgh5lBo2Ek
                </a>
                <h4>Alternative 2: </h4>

                <a target={'blank'} href={' https://youtu.be/YxgbjHYRxbQ'}>
                   https://youtu.be/YxgbjHYRxbQ
                </a>
              </ol>
            </header>
          </div>
        );
      })}
    </>
  );
}

export default App;
