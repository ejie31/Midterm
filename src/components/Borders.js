import React from "react";
 
 const Borders = ({ borders, onClick, selectedCountry }) => {
   return (
     <p>
       <strong>Borders: </strong> 
       {borders && borders.length > 0 ? (
         borders.map((border, index) => (
           <span
             key={index}
             onClick={() => onClick(border)} 
             style={{
               color: '#FF0000',
               cursor: 'pointer',
               textDecoration: 'underline',
               marginRight: '10px',
               fontWeight: border === selectedCountry ? 'bold' : 'normal',
               border: border === selectedCountry ? '2px solid #FF0000' : 'none',
               padding: border === selectedCountry ? '4px 8px' : '0',
               borderRadius: border === selectedCountry ? '12px' : '0',
               backgroundColor: border === selectedCountry ? '#FFCCCC' : 'transparent', 
             }}
           >
             {border}
           </span>
         ))
       ) : (
         "None"
       )}
     </p>
   );
 };
 
 export default Borders;