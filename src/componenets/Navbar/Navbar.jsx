import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  Button,
  Input,
  FormLabel,
} from '@chakra-ui/react'


const Navbar = () => {

  const [formData, setFormData] = useState({
    id:"",
    name:"",
    hospital:"",
    specialization:"",
    salary:"",
    details:""
});

const handleSubmitter = (e)=>{ 
    axios.post("http://localhost:8080/doctor", formData)
    .then(()=>{
        setFormData({
            id:"",
            name:"",
            hospital:"",
            specialization:"",
            salary:"",
            details:""
        })
    })
}

const handleChange = (e)=>{
    const {id, value} = e.target;
    setFormData({
        ...formData,
        [id]: value
    })
}


  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  

  return (
    <div>
        <Link to="/" ><button>Home</button></Link>


        <div>
        <Button 
        onClick={onOpen}
        onClickCapture={handleSubmitter}
        >Doctor</Button>
      {/* <Button ml={4} ref={finalRef}>
        Hospital
      </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>ID</FormLabel>
              <Input ref={initialRef} 
              placeholder='Enter ID' 
              id='id' 
              type="number" 
              onChange={handleChange}
              value={formData.id}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input ref={initialRef} 
              id='name' 
              type="text" 
              placeholder='Enter name' 
              onChange={handleChange}
              value={formData.name}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Hospital</FormLabel>
              <Input ref={initialRef} 
              id='hospital' 
              type="text" 
              placeholder='Enter Hospital' 
              onChange={handleChange}
              value={formData.hospital}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Specialization</FormLabel>
              <Input ref={initialRef} 
              id='specialization' 
              type="text" 
              placeholder='Enter specialization' 
              onChange={handleChange}
              value={formData.specialization}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Salary</FormLabel>
              <Input ref={initialRef} 
              id='salary' 
              type="number" 
              placeholder='Enter salary' 
              onChange={handleChange}
              value={formData.salary}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Details</FormLabel>
              <Input 
              id='details' 
              type="text" 
              placeholder='Enter details' 
              onChange={handleChange}
              value={formData.details}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div>






       
    </div>
  )
}

export default Navbar