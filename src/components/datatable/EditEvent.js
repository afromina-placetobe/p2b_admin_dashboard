import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./inputwarrper.scss"
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import axios from "axios";
function EditEvent(props) {
    const [selectedImage, setSelectedImage] = useState();
    
    useEffect(() => {
        axios.get(`/api/showSingleEvent?event_id=${id}`).then((res) => {
            if (res.data.status === 200) {
                setEvent(res.data.event);
                console.log(event)
                console.log(res.data.event);
            }
        });
    }, []);
    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    let id = props.data;

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

      

    const editEvent=(e)=>{
        e.preventDefault();
        console.log("add Event");
        console.log(event.event_image)
    const fd = new FormData();
    fd.append('event_status',0);
    fd.append('userId', 1);
    fd.append('event_image',event.event_image);
    fd.append('event_name',event.event_name);
    fd.append('event_description',event.event_description);
    fd.append('start_date', event.start_date);
    fd.append('start_time',event.start_time);
    fd.append('end_date', event.end_date);
    fd.append('end_time',event.end_time);
    fd.append('category',event.category);
    fd.append('event_organizer',event.event_organizer);
    fd.append('event_venue',event.event_venue);
    fd.append('event_address',event.event_address);
    fd.append('address_latitude',event.address_latitude);
    fd.append('address_longitude',event.address_longitude);
    fd.append('contact_phone',event.contact_phone);
    fd.append('redirectUrl',event.redirectUrl);
    fd.append('event_entrance_fee',event.event_entrance_fee);
    console.log(fd);
    console.log('after fd')
        axios.get('/sanctum/csrf-cookie').then(response =>{
          axios.put(`/api/editEvent?event_id=${id}`, data).then((res) => {
            if (res.data.status === 200) {
              console.log('success');
              axios.get(`/api/pendingEvent`).then((res) => {
                if (res.data.status === 200) {
                  setEvent(res.data.event);
                  console.log('event edited')
                }
              });
        } 
          });
        });
      
    }
    
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
                <form className="row g-3 " action="#" method="post" onSubmit={editEvent}>
                    <div className='row g-2'>
                       <div className="col-md-4">
                            <div className='image'>
                            {selectedImage ? (
                                <div style={styles.preview}>
                                    {/* <img
                                        src={URL.createObjectURL(selectedImage)}
                                        style={styles.image}
                                        alt="Thumb"
                                     />
                                  
                                    <button onClick={removeSelectedImage} style={styles.delete}>
                                        Remove This Image
                                    </button> */}
                                </div>
                            ):<div className='imagecontainer'>
                                  <p className='picktext'>Pick image</p>
                                </div>}
                         
                        </div>
                        <div >
                        <input className='form-control' 
                                style={{width:"15rem"}}
                                // accept="image/*"
                                type="file"
                                onChange={(e) =>
                                    setEvent({
                                        ...event,
                                        event_image: e.target.files[0],
                                    })
                                }
                                src={
                                    "http://localhost:8000/assets/" +
                                    event.event_image
                                  }
                                name="event_image"
                                // value={event.event_image}
                            />
                        </div>
                            </div>
                            <br/><br/>
                        
                        <div className="col-md-4">
                            <label  style={{marginLeft:"7rem"}} className="form-label">Title</label>
                            <input 
                            style={{marginLeft:"7rem"}}
                            type="text" 
                            name="event_name"
                            value={event.event_name} 
                            required
                            className="form-control"
                            onChange={handleInput}
                            />
                            
                        </div>
                        <div className=" col-md-4 ">
                            <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea className="form-control" onChange={handleInput} name="event_description" value={event.event_description} cols={10} style={{width:"28rem"}}rows="3" required></textarea>
                            
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
                            <h2 className='mt-1'
                                style={{marginLeft:"8rem"}}
                            
                            >Starting Time</h2>
                            <TextField className='inputwrapper mt-2'
                                value={event.start_time}
                                defaultValue="12:00"
                                type="time"
                                onChange={handleInput}
                                name="start_time"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{marginLeft:"8rem"}}

                            // 5 minutes
                       
                            />
                        </div>
                      <div className='row mt-3 flex-center'>

                        <div className="col-md-3">
                            <h2 className='mt-1'>Ending Date</h2>
                            <input className='inputwarpper mt-2'
                                type="date"
                                name="end_date"
                                onChange={handleInput}
                                value={event.end_date}
                            />
                        </div>
                        <div className="col-md-3">
                            <h2 className='mt-1'
                                style={{marginLeft:"8rem"}}
                            
                            >Ending Time</h2>
                            <TextField className='inputwarpper mt-2'
                                value={event.end_time}
                                // defaultValue="12:00"
                                onChange={handleInput}
                                type="time"
                                name="end_time"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{marginLeft:"8rem"}}
                                // 5 minutes
                         
                            />
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Organizer</label>
                            <input type="text" value={event.event_organizer} onChange={handleInput} name="event_organizer" style={{width:"10rem"}} className="form-control" id="inputEmail4" required/>
                           
                        </div>
                        <div className="col-md-3">
                            <label for="inputState" className="form-label" style={{marginLeft:"8rem"}}>Category</label>
                            <select id="inputState" value={event.category} onChange={handleInput} name="category" style={{marginLeft:"8rem",width:"10rem"}} className="form-select" required>
                                <option>catagory 1</option>
                                <option>catagory 2</option>
                                <option>catagory 3</option>
                            </select>
                            
                        </div>
                    <div className='row mt-5'>

                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Event Address</label>
                            <input type="text" value={event.event_address} onChange={handleInput} name="event_address" className="form-control"  style={{width:"10rem"}} required />
                            
                        </div>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label" style={{marginLeft:"8rem"}}>Entrance fee</label>
                            <input type="text" className="form-control" onChange={handleInput} name="event_entrance_fee" value={event.event_entrance_fee} style={{marginLeft:"8rem",width:"10rem"}}  required />
                           
                        </div>
                    </div>
                    </div>

                    <div className='row mt-5'>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Phone</label>
                            <input type="text" className="form-control" onChange={handleInput} name="contact_phone" value={event.contact_phone} style={{width:"10rem"}}required />
                            
                        </div>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label" style={{marginLeft:"8rem"}}>Link</label>
                            <input type="text" className="form-control" onChange={handleInput} name="redirectUrl" id="inputEmail4" value={event.redirectUrl} style={{width:"10rem", marginLeft:"8rem"}} required/>
                            
                        </div>
                    <div className='row mt-5'>

                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Latitude</label>
                            <input type="text" className="form-control" onChange={handleInput} id="inputEmail4" name="address_latitude" value={event.address_latitude} style={{width:"10rem"}} required/>
                           
                        </div>

                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label" style={{marginLeft:"8rem"}}>Longitude</label>
                            <input type="text" className="form-control" onChange={handleInput} id="inputEmail4" name="address_longitude" value={event.address_longitude} style={{marginLeft:"8rem",width:"10rem"}}required/>
                            
                        </div> 
                        </div>
                    </div>
                    <div className='modalButton'>
                    <Button className='submit' type='submit' onClick={editEvent}>Edit Event</Button>
                    <Button className='close'onClick={props.onHide}>Close</Button>
                    </div>
                    
                </form>
            
    );
}


export default EditEvent;