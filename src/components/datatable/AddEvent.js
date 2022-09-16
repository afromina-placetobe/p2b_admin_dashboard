import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./inputwarrper.scss"
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";

function AddEvent(props) {
    const [selectedImage, setSelectedImage] = useState();
    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage();
    };
    const [event,setEvent] = useState({
        event_status:"",
        userId:"",
        event_image:"",
        event_name:"",
        event_description:"",
        start_date:"",
        start_time:"",
        end_date:"",
        end_time:"",
        category:"",
        event_organizer:"",
        event_venue:"",
        event_address:"",
        address_latitude:"",
        address_longitude:"",
        contact_phone:"",
        redirectUrl:"",
        event_entrance_fee:""
      })

    // const addEvent=(e)=>{
    //     e.preventDefault();
    //     console.log("add Event")
    //     const data ={
    //       event_status:event.event_status,
    //       userId:event.userId,
    //       userId:"1",
    //       event_image: "event.event_image",
    //       event_name:event.event_name,
    //       event_description: event.event_description,
    //       start_date:event.start_date,
    //       start_time:event.start_time,
    //       end_date: event.end_date,
    //       end_time:event.end_time,
    //       category: event.category,
    //       event_organizer:event.event_organizer,
    //       event_venue:event.event_venue,
    //       event_address:event.event_address,
    //       address_latitude:event.address_latitude,
    //       address_longitude:event.address_longitude,
    //       contact_phone:event.contact_phone,
    //       redirectUrl:event.redirectUrl,
    //       event_entrance_fee:event.event_entrance_fee
    //     }
    //     axios.get('/sanctum/csrf-cookie').then(response =>{
    //       axios.post('/api/addEvent', data).then((res) => {
    //         if (res.data.status === 200) {
    //           console.log('success');
    //           axios.get(`/api/pendingEvent`).then((res) => {
    //             if (res.data.status === 200) {
    //               setEvent(res.data.event);
    //             }
    //           });
    //     } 
    //       });
    //     });
      
    // }
    
    // Just some styles
const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 10,
    },
    preview: {
      marginTop: 5,
      display: "flex",
      flexDirection: "column",
    },
    image: { maxWidth: "100%", maxHeight: 220 },
    delete: {
      cursor: "pointer",
      padding: 2,
      background: "red",
      color: "white",
      border: "none",
    },
    input: {
     maxWidth:180,
     maxHeight:100,
      },
  };
  const handleInput = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
};
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add event
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <form className="row g-3 " action="#" method="post" >
                    <div className='row g-2'>
                        <div className="col-md-4">
                            <div className='image'>
                            {selectedImage ? (
                                <div style={styles.preview}>
                                    <img
                                        src={URL.createObjectURL(selectedImage)}
                                        style={styles.image}
                                        alt="Thumb"
                                     />
                                  
                                    <button onClick={removeSelectedImage} style={styles.delete}>
                                        Remove This Image
                                    </button>
                                </div>
                            ):<div className='imagecontainer'>
                                  <p className='picktext'>Pick image</p>
                                </div>}
                         
                        </div>
                        <div >
                        <input className='input' style={styles.input}
                                accept="image/*"
                                type="file"
                                onChange={(e) =>
                                    setEvent({
                                        ...event,
                                        event_image: e.fileList[0].originFileObj,
                                    })
                                }
                                name="event_image"
                            />
                        </div>
                            </div>
                        
                        <div className="col-md-4">
                            <label  className="form-label">Title</label>
                            <input 
                            type="text" 
                            name="event_name"
                            value={event.event_name} 
                            required
                            className="form-control"
                            onChange={handleInput}
                            />
                            {errors.title && <p className='errortext'>Please enter Title</p>}
                        </div>
                        <div className=" col-md-4 ">
                            <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea className="form-control" onChange={handleInput} name="event_description" value={event.event_description} rows="3" required></textarea>
                            {errors.discription && <p className='errortext'>Please enter description</p>}
                        </div>
                    </div>
                      <div className='row mt-3 flex-center'>
                        <div className="col-md-3 ">
                            <h2 className='mt-1'>Starting Date</h2>
                            <input className='inputwarpper mt-2'
                                // selected={startDate}
                                type="date"
                                name="start_date"
                                onChange={handleInput}
                                value={event.start_date}
                            />
                  
                        </div>
                        <div className="col-md-3">
                            <h2 className='mt-1'>Starting Time</h2>
                            <TextField className='inputwrapper mt-2'
                                value={event.start_time}
                                defaultValue="12:00"
                                type="time"
                                onChange={handleInput}
                                name="start_time"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            // 5 minutes
                       
                            />
                        </div>
                        <div className="col-md-3">
                            <h2 className='mt-1'>Ending Date</h2>
                            {/* <input className='inputwarpper mt-2'
                                type="date"
                                name="end_date"
                                onChange={handleInput}
                                value={event.end_date}
                            /> */}
                        </div>
                        <div className="col-md-3">
                            <h2 className='mt-1'>Ending Time</h2>
                            <TextField className='inputwarpper mt-2'
                                value={event.end_time}
                                // defaultValue="12:00"
                                onChange={handleInput}
                                type="time"
                                name="end_time"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            // 5 minutes
                         
                            />
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Organizer</label>
                            <input type="text" value={event.event_organizer} onChange={handleInput} name="event_organizer" className="form-control" id="inputEmail4" required/>
                            {errors.organizer && <p className='errortext'>Please enter Organizer</p>}
                        </div>
                        <div className="col-md-3">
                            <label for="inputState" className="form-label">State</label>
                            <select id="inputState" value={event.category} onChange={handleInput} name="category" className="form-select" required>
                                <option>catagory 1</option>
                                <option>catagory 2</option>
                                <option>catagory 3</option>
                            </select>
                            {errors.catagory && <p className='errortext'>Please enter Category</p>}
                        </div>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Event Address</label>
                            <input type="text" value={event.event_address} onChange={handleInput} name="event_address" className="form-control" required />
                            {errors.eventaddress && <p className='errortext'>Please enter Event Address</p>}
                        </div>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Entrance fee</label>
                            <input type="text" className="form-control" onChange={handleInput} name="event_entrance_fee" value={event.event_entrance_fee}  required />
                            {errors.enterancefee && <p className='errortext'>Please enter Entrance Fee</p>}
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Phone</label>
                            <input type="text" className="form-control" onChange={handleInput} name="contact_phone" value={event.contact_phone} required />
                            {errors.phone && <p className='errortext'>Please enter Phone Number</p>}
                        </div>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Link</label>
                            <input type="text" className="form-control" onChange={handleInput} name="redirectUrl" id="inputEmail4" value={event.redirectUrl} required/>
                            {errors.link && <p className='errortext'>Please enter Link</p>}
                        </div>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Latitude</label>
                            <input type="text" className="form-control" onChange={handleInput} id="inputEmail4" name="address_latitude" value={event.address_latitude} required/>
                            {errors.latitiud && <p className='errortext'>Please enter Latitude</p>}
                        </div>

                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Longitude</label>
                            <input type="text" className="form-control" onChange={handleInput} id="inputEmail4" name="address_longitude" value={event.address_longitude} required/>
                            {errors.longtiud && <p className='errortext'>Please enter Longitude</p>}
                        </div>
                    </div>
                    <div className='modalButton'>
                    <Button className='submit' type='submit'>Submit</Button>
                    <Button className='close'onClick={props.onHide}>Close</Button>
                    </div>
                    
                </form>
            </Modal.Body>
          {/*   <Modal.Footer>
               
            </Modal.Footer> */}
        </Modal>
    );
}


export default AddEvent;