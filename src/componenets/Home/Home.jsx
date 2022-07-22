import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SortAndFilterButtons } from '../SortAndFilterButtons/SortAndFilterButtons';
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

const Home = () => {

    const [formData, setFormData] = useState({
        name:"",
        address:""
    });
    
    const handleSubmitter = (e)=>{ 
        axios.post("http://localhost:8080/hospital", formData)
        .then(()=>{
            setFormData({
                name:"",
                address:""
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


    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/doctor")
        .then((res)=>{
            setData(res.data)
        })
    }, [])


    const [data1, setData1] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/hospital")
        .then((res)=>{
            setData1(res.data)
        })
    }, [])

    function handleSort(nameBy, order) {
             if (nameBy === 'name' && order === 1)
          setData((prev) =>
            [...prev.sort((a, b) => a.name > b.name ? 1 : -1)])
        else if (nameBy === 'name' && order === -1)
          setData((prev) =>
            [...prev.sort((a, b) => a.name > b.name ? -1 : 1)])
        else if (nameBy === 'salary' && order === 1)
          setData((prev) =>
            [...prev.sort((a, b) => a.salary > b.salary ? 1 : -1)])
        else if (nameBy === 'salary' && order === -1)
          setData((prev) =>
            [...prev.sort((a, b) => a.salary > b.salary ? -1 : 1)])
      }



  return (
    <div>


<div>
        <Button 
        onClick={onOpen}
        onClickCapture={handleSubmitter}
        >Hospital</Button>
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
              placeholder='Enter Hospital Name' 
              id='name' 
              type="text" 
              onChange={handleChange}
              value={formData.name}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input ref={initialRef} 
              id='address' 
              type="text" 
              placeholder='Enter Address' 
              onChange={handleChange}
              value={formData.address}
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










        <div>
        <SortAndFilterButtons
           handleSort={handleSort}
        />
        </div>
        <h1>Doctor Details</h1>
        <table style={
            {
                border: "1px solid black",
                margin: "auto",
            }
        }>
            <thead>
                <tr style={
            {
                border: "1px solid black"
            }
        }>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Hospital</td>
                    <td>Specialization</td>
                    <td>Salary</td>
                    <td>Details</td>
                </tr>
            </thead>
            {data.map((e)=>{
                return(
                    <tbody>
                        <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.hospital}</td>
                        <td>{e.specialization}</td>
                        <td>{e.salary}</td>
                        <td>{e.details}</td>
                        </tr>
                    </tbody>
                )
                })}
        </table>








        <div>
        <h1>Hospital Details</h1>
        <table style={
            {
                border: "1px solid black",
                margin: "auto",
            }
        }>
            <thead>
                <tr style={
            {
                border: "1px solid black"
            }
        }>
                    <td>Hospital Name</td>
                    <td>Address</td>
                </tr>
            </thead>
            {data1.map((e)=>{
              console.log(e.name, e.address);
              
                return(
                    <tbody>
                        <tr>
                        <td>{e.name}</td>
                        <td>{e.address}</td>
                        </tr>
                    </tbody>
                )
                })}
        </table>
        </div>
    </div>
  )
}

export default Home