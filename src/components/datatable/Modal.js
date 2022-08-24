import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./inputwarrper.scss"
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";

function ModalContainer(props) {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, endStartDate] = useState(new Date())
    const [values, setValues] = useState(new Date());
    const [selectedImage, setSelectedImage] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
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

                <form className="row g-3 "onSubmit={handleSubmit(onSubmit)}>
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
                        <input className='inputc' style={styles.input}
                                accept="image/*"
                                type="file"
                                onChange={imageChange}
                            />
                        </div>
                            </div>
                        
                        <div className="col-md-4">
                            <label  className="form-label">Title</label>
                            <input type="text" className="form-control"{...register("title", { required: true,  })} />
                            {errors.title && <p className='errortext'>Please enter Titile</p>}
                        </div>
                        <div className=" col-md-4 ">
                            <label for="exampleFormControlTextarea1" className="form-label">Discription</label>
                            <textarea className="form-control" rows="3"{...register("discription", { required: true, })}></textarea>
                            {errors.discription && <p className='errortext'>Please enter discription</p>}
                        </div>
                    </div>
                    \   <div className='row mt-3 flex-center'>
                        <div className="col-md-3 ">
                            <h2 className='mt-1'>Starting Date</h2>
                            <DatePicker className='inputwarpper mt-2'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                {...register("startingdate", { required: true, maxLength: 10 })}
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
                            <input type="text" className="form-control" id="inputEmail4" {...register("organizer", { required: true, maxLength: 10 })}/>
                            {errors.organizer && <p className='errortext'>Please enter Organizer</p>}
                        </div>
                        <div className="col-md-3">
                            <label for="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select"{...register("catagory", { required: true,  })}>
                                <option>catagory 1</option>
                                <option>catagory 2</option>
                                <option>catagory 3</option>
                            </select>
                            {errors.catagory && <p className='errortext'>Please enter Organizer</p>}
                        </div>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Event Address</label>
                            <input type="text" className="form-control" {...register("eventaddress", { required: true,  })} />
                            {errors.eventaddress && <p className='errortext'>Please enter Event Address</p>}
                        </div>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Entrance fee</label>
                            <input type="text" className="form-control"   {...register("enterancefee", { required: true,  })} />
                            {errors.enterancefee && <p className='errortext'>Please enter Organizer</p>}
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Phone</label>
                            <input type="text" className="form-control"  {...register("phone", { required: true,  })} />
                            {errors.phone && <p className='errortext'>Please enter Phone Number</p>}
                        </div>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Link</label>
                            <input type="text" className="form-control" id="inputEmail4"  {...register("link", { required: true,  })}/>
                            {errors.link && <p className='errortext'>Please enter Organizer</p>}
                        </div>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Latitiud</label>
                            <input type="text" className="form-control" id="inputEmail4" {...register("latitiud", { required: true,  })}/>
                            {errors.latitiud && <p className='errortext'>Please enter Latitiud</p>}
                        </div>

                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label">Longtuid</label>
                            <input type="text" className="form-control" id="inputEmail4" {...register("longtiud", { required: true,  })}/>
                            {errors.longtiud && <p className='errortext'>Please enter Longtuid</p>}
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


export default ModalContainer