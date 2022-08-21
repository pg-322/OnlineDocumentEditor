import TextEditor from './TextEditor'
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import {v4 as uuidV4} from "uuid"  



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<a href={`/documents/${uuidV4()}`}>create document</a>} />
        <Route path="/documents/:id" element={<TextEditor/>}/>
      </Routes>

    </Router>
  ) 
}

export default App;
