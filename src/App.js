import logo from './logo.svg';
import './App.scss';

const accessLearning = async () => {
  const r = {
    client: 'PictureWealth',
    tenant_id: '42305e4e03',
    grant_type: 'client_credentials',
    first_name: 'Test',
    last_name: 'Integ',
    email: 'alexandra+1@smartup.io'
  };

  await fetch('https://pw-api.smrtp.io/get-access-token', {
    method: 'POST',
    body: JSON.stringify(r),
    mode: 'cors',
    credentials: 'include'
  })
  .then(response => console.log(response))
  .catch(e => console.log(e));
}

function App() {
  return (
    <div>
      <div className="btn-container">
        <button className="btn" onClick={accessLearning}>Access!</button>
        <button className="btn" onClick={() => { window.location.href = "https://pw-learn.smrtp.io" }}>Learn!</button>
      </div>
    </div>
  );
}

export default App;
