import React from 'react';
 import { Container, Row, Col } from 'react-bootstrap';
 
 function Footer({ className }) {
   return (
     <footer className={`text-white mt-5 ${className}`}>
       <Container >
         <Row className="text-center text-md-left">
           <Col md={6}>
             <h5>Kathleen Badon</h5>
             <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
           </Col>
           <Col md={6} className="text-md-end">
             <a href="#privacy" className="text-white me-3">Privacy Policy</a>
             <a href="#terms" className="text-white">Terms of Service</a>
           </Col>
         </Row>
       </Container>
     </footer>
   );
 }
 
 export default Footer;