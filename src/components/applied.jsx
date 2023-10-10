import React, { useEffect, useState } from 'react'
import "./common.css"
import {IoMdAdd} from "react-icons/io"
import Modal from "react-modal"
import { Box, Button, Input,Spinner } from '@chakra-ui/react'

import DisablePastDates from './DisablePastDates'
const initState={
  Photo:'',
  Candidate_name:'',
  Location:'',
  DateApplied:'',
  Stage:''
}

const Applied = () => {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)
  const [isOpen,setIsOpen]=useState(false)
  const [formValue,setFormValue]=useState(initState)

  const getData=()=>{
    setLoading(true)
    fetch('https://sandeepapi-gxyn.onrender.com/jobsUser')
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        // console.log(data)
        setData(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    const inputValue= value;

    setFormValue({ ...formValue, [name]: inputValue });
  };

  const handleSubmit=()=>{
    console.log(formValue);
    fetch(`https://sandeepapi-gxyn.onrender.com/jobsUser`, {
        method: 'POST',
        body: JSON.stringify(formValue),

        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
    })
    .then((res)=>res.json())
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    alert("New User Added Successfully")
  }


  
  const openModal=()=>{
    setIsOpen(true)
  }
  const closeModal=()=>{
    setIsOpen(false)
  }
  
  useEffect(() => {
    getData()
  }, []);

  // if(loading){
    //   return loading
  // }
  
  
  const {Candidate_name,Photo,Location,DateApplied,Stage}=formValue;
  return (
   <>
      {loading?(
      <>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </>):(
      <>
      <div className='outerBox'>
          {
           data.map((el)=>{
                if(el.Stage==="Applied"){
                  return <div key={el.id} className='innerBox'>
                    <img src={el.Photo} alt="" style={{borderRadius:"50%"}} />
                    <h2>{el.Candidate_name}</h2>
                    <h2>{el.Location}</h2>
                    <h2>{el.DateApplied}</h2>
                  </div>
                }
            })
          }
      </div>
      <div className='addbtn'>
        <IoMdAdd onClick={openModal} color="#357EC7" fontSize="5rem" cursor={'pointer'}/>
      </div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} className='modal_styling'>
          <Box>
            <Input type="text" placeholder='Enter Name' name='Candidate_name' onChange={handleChange} value={Candidate_name} required />
            <Input type="img" placeholder='Enter Image Url' name='Photo' onChange={handleChange} value={Photo}  required/>
            <Input type="text" placeholder='Location' name='Location' onChange={handleChange} value={Location}  required/>
            <Input type="date" min={DisablePastDates()} placeholder='Enter Date' name='DateApplied' onChange={handleChange}  value={DateApplied} required/>
            <select name="Stage" value={Stage} onChange={handleChange} required className='option'>
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="In-Touch">In Touch</option>
              <option value="Hired">Hired</option>
              <option value="Rejected">Rejected</option>
            </select> <br /> <br />
            <Input type="submit" backgroundColor={'darkgreen'} onClick={handleSubmit}  cursor='pointer' fontWeight={'bold'} color={'white'}/>
            
          <Button onClick={closeModal}>Close</Button>
          </Box>
      </Modal>
      </>
     )}
   </>
  )
}

export default Applied