import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import Modal from "react-modal"
import DisablePastDates from './DisablePastDates'

const ModalFunction = ({ openModal,closeModal, formValue, handleChange, handleSubmit }) => {  

  return (
    <Modal isOpen={openModal} onRequestClose={closeModal} className='modal_styling'>
          <Box>
            <Input type="text" placeholder='Enter Name' name='Candidate_name' onChange={handleChange} value={formValue.Candidate_name} required />
            <Input type="img" placeholder='Enter Image Url' name='Photo' onChange={handleChange} value={formValue.Photo}  required/>
            <Input type="text" placeholder='Location' name='Location' onChange={handleChange} value={formValue.Location}  required/>
            <Input type="date" min={DisablePastDates()} placeholder='Enter Date' name='DateApplied' onChange={handleChange}  value={formValue.DateApplied} required/>
            <select name="Stage" value={formValue.Stage} onChange={handleChange} required className='option'>
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="In-Touch">In Touch</option>
              <option value="Hired">Hired</option>
              <option value="Rejected">Rejected</option>
            </select> <br /> <br />
            <Input type="submit" onClick={handleSubmit} cursor={'pointer'}/>
            
          <Button onClick={closeModal}>Close</Button>
          </Box>
      </Modal>
  )
}

export default ModalFunction