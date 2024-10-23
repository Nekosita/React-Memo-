import React from 'react';
import ContactCard from './ContactCard';
import contactCardDatas from './ContactCardDatas';

function ViewA() {

  const cardComponent = contactCardDatas.map(contact => <ContactCard key={contact.id} name={contact.name} imgUrl={contact.imgUrl} phone={contact.phone} email={contact.email} />)
  
  return (
    <div>
      <h2>This is View A</h2>
      {cardComponent}
    </div>
  );
}

export default ViewA;