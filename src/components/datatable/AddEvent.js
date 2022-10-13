import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./inputwarrper.scss"
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddEvent(props) {
    const [selectedImage, setSelectedImage] = useState();
    const navigate = useNavigate();
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

    const addEvent=(e)=>{
        e.preventDefault();
        console.log("add Event");
        console.log(event.event_image)
    const fd = new FormData();
    fd.append('event_status',0);
    fd.append('userId', localStorage.getItem('auth_id'));
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
    axios.post(`/api/addEvent`, fd).then((res) => {
        console.log("Event added api call");
        if (res.data.status === 200) {
          console.log("Event added");
          navigate('/')
        //   setEvent({ ...event, event_name: "", event_status: "" });
        } else {
          setEvent({
            ...event,
            error_list: res.data.validation_errors,
          });
          console.log("Event not added");
        }

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

                <form className="row g-3" action="#" method='POST' onSubmit={addEvent} encType='multipart/form-data' content-type='multipart/form-data'>
                    <div className='row g-2'>
                        <div className="col-md-4">
                            <div className='image'>
                            {selectedImage ? (
                                <div style={styles.preview}>
                                    {/* <img
                                        src={URL.createObjectURL(selectedImage)}
                                        style={styles.image}
                                        alt="Thumb"
                                     /> */}
                                  
                                    {/* <button onClick={removeSelectedImage} style={styles.delete}>
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
                                name="event_image"
                                type="file"
                                onChange={(e) =>
                                    setEvent({
                                        ...event,
                                        event_image: e.target.files[0],
                                    })
                                }
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
                            <textarea className="form-control" onChange={handleInput} name="event_description"  value={event.event_description} rows="3" cols={10} style={{width:"28rem"}} required></textarea>
                            
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
                            <h2 className='mt-1 ml-5' 
                                style={{marginLeft:"8rem"}}
                            
                            >Starting Time</h2>
                            <input
                                type="time"
                                className="start-time"
                                onChange={handleInput}
                                name="start_time"
                                value={event.start_time}
                                style={{marginLeft:"8rem"}}
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
                                <input              
                                type="time"
                                className="end-time"
                                onChange={handleInput}
                                name="end_time"
                                value={event.end_time}
                                style={{marginLeft:"8rem"}}

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
                            <select id="inputState" value={event.category} onChange={handleInput} style={{marginLeft:"8rem",width:"10rem"}} name="category" className="form-select" required>
                                <option>catagory 1</option>
                                <option>catagory 2</option>
                                <option>catagory 3</option>
                            </select>
                            
                        </div>
                    <div className='row mt-5'>

                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Event Address</label>
                            <input type="text" value={event.event_address} onChange={handleInput} name="event_address" className="form-control" style={{width:"10rem"}} required />
                            
                        </div>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label" style={{marginLeft:"8rem"}}>Entrance fee</label>
                            <input type="text" className="form-control" onChange={handleInput} name="event_entrance_fee" value={event.event_entrance_fee} style={{marginLeft:"8rem",width:"10rem"}} required />
                            
                        </div>
                    </div>
                            </div>
                    <div className='row mt-5'>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Phone</label>
                            <input type="text" className="form-control" onChange={handleInput} name="contact_phone" value={event.contact_phone} style={{width:"10rem"}} required />
                            
                        </div>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label"style={{marginLeft:"8rem"}}>Link</label>
                            <input type="text" className="form-control" onChange={handleInput} name="redirectUrl" id="inputEmail4" value={event.redirectUrl} style={{marginLeft:"8rem",width:"10rem"}} required/>
                            
                        </div>
</div>
                    <div className='row mt-5'>

                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Latitude</label>
                            <input type="text" className="form-control" onChange={handleInput} id="inputEmail4" name="address_latitude" value={event.address_latitude} style={{width:"10rem"}} required/>
                            
                        </div>

                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label"style={{marginLeft:"8rem"}}>Longitude</label>
                            <input type="text" className="form-control" onChange={handleInput} id="inputEmail4" name="address_longitude" value={event.address_longitude} style={{marginLeft:"8rem",width:"10rem"}}required/>
                        </div>
                    </div>
                    <div className='modalButton'>
                    <Button className='submit' type='submit'>Add Event</Button>
                    <Button className='close'onClick={props.onHide}>Close</Button>
                    </div>
                    
                </form>

    );
}


export default AddEvent;