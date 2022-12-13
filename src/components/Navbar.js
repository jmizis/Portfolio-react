import React from 'react';
import {Link} from 'react-router-dom';

const styles = {
    card: {
      margin: 20,
      // background: 'blue',
    },
    // heading: {
    //   background: '#9a74db',
    //   minHeight: 50,
    //   lineHeight: 3.5,
    //   fontSize: '1.2rem',
    //   color: 'white',
    //   padding: '0 20px',
    // },
  };
  

  function Navbar() {
    return (
      <><div style={styles.card}>
        <div style={styles.heading}><Link to ="/">Home</Link></div>
      </div><div style={styles.card}>
          <div style={styles.heading}><Link to="/contact">Contact</Link></div>
        </div><div style={styles.card}>
          <div style={styles.heading}><Link to="/projects">Projects</Link></div>
        </div></>
    );
  }
  
  export default Navbar;
  

