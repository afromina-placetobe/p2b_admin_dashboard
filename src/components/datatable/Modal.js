import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./inputwarrper.scss"
import TextField from '@material-ui/core/TextField';

function ModalContainer(props) {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, endStartDate] = useState(new Date())
    const [values, setValues] = useState(new Date());
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

                <form className="row g-3 ">
                    <div className='row'>
                    <div className="col-md-2">
                           <div className='imagecontainer'>

                           </div>
                        </div>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Image</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-3">
                            <label for="inputPassword4" className="form-label">Title</label>
                            <input type="text" className="form-control" id="inputPassword4" />
                        </div>
                        <div className=" col-md-4 ">
                            <label for="exampleFormControlTextarea1" className="form-label">Discription</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    \   <div className='row mt-3 flex-center'>
                        <div className="col-md-3">
                            <h2 className='mt-1'>Starting Date</h2>
                            <DatePicker className='inputwarpper mt-2'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                        </div>
                        <div className="col-md-3">
                            <h2 className='mt-1'>Starting Time</h2>
                            <TextField className='inputwarpper mt-2'

                                defaultValue="12:00"
                                type="time"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            // 5 minutes

                            />
                        </div>
                        <div className="col-md-3">
                            <h2 className='mt-1'>Ending Date</h2>
                            <DatePicker className='inputwarpper mt-2'
                                selected={endDate}
                                onChange={date => endStartDate(date)}
                            />
                        </div>
                        <div className="col-md-3">
                            <h2 className='mt-1'>Ending Time</h2>
                            <TextField className='inputwarpper mt-2'

                                defaultValue="12:00"
                                type="time"
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
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-3">
                            <label for="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">

                                <option>catagory 1</option>
                                <option>catagory 2</option>
                                <option>catagory 3</option>

                            </select>
                        </div>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Event Address</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Entrance fee</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                    </div>

                    <div className='row mt-5'>
                    <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Phone</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Link</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Latitiud</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                      
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Longtuid</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                    </div>
                   
                
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default ModalContainer