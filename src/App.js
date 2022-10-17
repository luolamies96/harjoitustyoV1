
import './App.css';
import Random from './pages/Random';
import {Route, Routes} from 'react-router-dom'
import Search from './pages/Search';

function App() {
 return(
  <>
<Routes>
<Route path="/" element={<Random/>}/>
<Route path="/Search" element={<Search/>}/>
</Routes>
</>
);
}
export default App;
