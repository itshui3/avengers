import React, { useContext, useState, useEffect } from 'react';
import {Card, CardBody, CardImg} from 'reactstrap';

import { AvengerContext } from '../contexts/AvengerContext';

export default AvengerCard;

function AvengerCard(props) {
  const [avenger, setAvenger] = useState({});
  const avg = useContext(AvengerContext);

  useEffect( () => {
    setAvenger(avg[Number(props.match.params.id) - 1]);
  }, [props.match.params])
  return (
    <Card>
      <CardImg src={avenger.thumbnail} />
      <CardBody>
        {avenger.description} 
      </CardBody>
    </Card>
  )

}

// how to consume data from .Provider value={avg}