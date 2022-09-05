import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import './App.css';



function GitHubCard() {
    const [show, setShow] = useState(true);

  return (
    <>
  
    <div className="copy">
    <div className="github-card" >
    <Card >
      <Card.Img variant="top" src="https://avatars2.githubusercontent.com/u/101678267" />
      <Card.Body>
        <Card.Title className="" style={{fontSize: 45, color: '#b66e5d'}}>AGUSIENKA</Card.Title>
        <Card.Text className="font-loader" style={{color: '#2c9ff7'}}>
        The most unusual item within an arm’s reach of me is Dan Moi jaw harp.
        </Card.Text>
        <Alert show={show} variant="success">
        <Alert.Heading style={{color: '#9da462'}}>How's it going?!</Alert.Heading>
        <p style={{color: '#bf9f77'}}>
          Didn't I ask you not to click it? But since you did, have fun with it!
        </p>
        
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success" size="lg">
            Close me y'all!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)} style={{color: 'white', fontSize: '40px', rounded: true}}>Read Me!!!</Button>}
      
      </Card.Body>
    </Card>
    </div>
    </div>
    <footer className='footer'></footer>
    </>
   
  );
}

export default GitHubCard;