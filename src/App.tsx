import React from 'react'
import logo from './logo.svg'
import './App.css'
import ContentEditor from './components/ContentEditor'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Card>
        
        <ContentEditor />
      </Card>
    </div>
  )
}

export default App
