import React, { useEffect, useState } from 'react';
import Tour from './Tour';
const Tours = (props) => {
  

return (<section>
          <div className = "title"> 
            <h2>
            Our tours
            </h2>
          </div>

          <div>
            {props.tourDetails.map(tour => <Tour key = {tour.id} {...tour} removeTour = {props.removeTour}/>)}
          </div>
      </section>);
};

export default Tours;
