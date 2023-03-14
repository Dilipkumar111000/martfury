import React from "react";
import  { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const  Main=() => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  

  return (
    <div>
      <button onClick={onOpenModal}>Register</button>
      <Modal open={open} onClose={onCloseModal} center>
        <input type='text' placeholder="enter the name"/> <br/>
        <input type='number' placeholder="enter mobile number"/><br/>
         <button>submit</button>
      </Modal>
    </div>
  );
};
export default Main;