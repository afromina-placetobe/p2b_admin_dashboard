import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SimpleImageSlider from "react-simple-image-slider";
import useResizeObserver from "use-resize-observer";
// import ShowMoreLess from 'show-more-less'
// import 'show-more-less/dist/index.css'
import styles from "./toggle.scss";
// import Modal from "@mui/material/Modal";
import Button from "react-bootstrap/Button";
import "./toggle.scss";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import DeleteIcon from "@mui/icons-material/Delete";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Alert } from "@mui/material";
import EditEvent from "./datatable/EditEvent";
const DetailPage = () => {
  // const images = [
  //   {
  //     url: {"http://localhost:8000/uploads/ProfilePicture/" +
  //       event.event_image},
  //   },
  //   {
  //     url: "http://guidetoethiopia.com/wp-content/uploads/2016/05/Great-Ethiopian-Run.jpg",
  //   },
  //   {
  //     url: "http://guidetoethiopia.com/wp-content/uploads/2016/05/Great-Ethiopian-Run.jpg",
  //   },
  // ];

  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nobis excepturi accusamus ipsum, doloremque voluptatem nisi odio quis voluptates facilis quam sequi quibusdam quia, in doloribus? Quisquam dolorem earum natusLorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nobis excepturi accusamus ipsum, doloremque voluptatem nisi odio quis voluptates facilis quam sequi quibusdam quia, in doloribus? Quisquam dolorem earum natus.";
  const [event, setEvent] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/showSingleEvent?event_id=${location.state.event_id}`)
      .then((res) => {
        if (res.data.status === 200) {
          setEvent(res.data.event);
        }
      });
  }, []);

  const [show, setShow] = useState(false);
  let id = location.state.event_id;
  const deleteEvent = () => {
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.delete(`/api/deleteEvent?event_id=${id}`).then((res) => {
        if (res.data.status === 200) {
          console.log("deleted");
          navigate('/list');
        }
      });
    });
  };


  const publishEvent = () => {
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.put(`/api/publishEvent?event_id=${id}`).then((res) => {
        if (res.data.status === 200) {
          console.log('published')
          navigate('/list');
        }
      });
    });
  };
  const { ref, width = 1, height = 1 } = useResizeObserver();
  return (
    <>   
<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Delete Event</h5>
        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" style={{backgroundColor:"white",color:"black"}}>&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Are you sure you want to delete the event?
      </div>
      <div className="modal-footer">
        <button type="button" style={{color:"Black"}} className="btn btn-primary" data-bs-dismiss="modal">Close</button>
        <button type="button" style={{color:"Black"}} className="btn btn-danger" onClick={deleteEvent} data-bs-dismiss="modal">Delete</button>
      </div>
    </div>
  </div>
</div>

{/* //modal for publish */}

<div className="modal fade" id="PublishModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Publish Event</h5>
        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" style={{backgroundColor:"white",color:"black"}}>&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Are you sure you want to publish the event?
      </div>
      <div className="modal-footer">
        <button type="button" style={{color:"Black"}} className="btn btn-primary" data-bs-dismiss="modal">Close</button>
        <button type="button" style={{color:"Black"}} className="btn btn-danger" onClick={publishEvent} data-bs-dismiss="modal">Publish</button>
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="EditModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Edit Event</h5>
        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" style={{backgroundColor:"white",color:"black"}}>&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <EditEvent data={id}/>
      </div>
      {/* <div className="modal-footer">
        <button type="button" style={{color:"Black"}} className="btn btn-primary" data-bs-dismiss="modal">Close</button>
        <button type="button" style={{color:"Black"}} className="btn btn-danger" onClick={EditEvent} data-bs-dismiss="modal">Edit</button>
      </div> */}
    </div>
  </div>
</div>

      <Container fluid="md">
        <Row className="justify-content-md-center m-auto">
          <Col xs md lg="6">
            <div
              ref={ref}
              className="card_imgBox shadow p-1 mb-5 ml-5 mt-10 bg-white rounded"
              style={{ width: "100%", height: "350px" }}
            >
              <img
                width="1000rem"
                // height="20px"
                style={{height:'20rem'}}
                src={
                  "http://localhost:8000/assets/" +
                  event.event_image
                }
                // showBullets={true}
                // showNavs={true}
              />
            </div>
          </Col>

          <Col xs md lg="6" className="flex items-center justify-center">
            <div className=" mb-5 ml-5 mt-10 flex-column items-center justify-center ">
              <h2 className="text-center text-lg font-semibold ">Event Name</h2>
              
              <p>{event.event_name}</p>

              {/* <p className='p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p> */}
              <div className=" flex items-center  pt-4">
                <p className="bg-cyan-200 p-1 w-max rounded-lg text-[blue]">
                  Status
                </p>{" "}
                :<p className="text-[#c0b388]">{event.event_status}</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center m-auto">
          <Col xs md lg="6">
            <Row className="justify-content-md-center m-auto">
              <Col xs md lg="4">
                <p className="text-green-900 decoration-4 font-semibold">
                  Starting Date:
                </p>
              </Col>
              <Col xs md lg="2">
                {event.start_date}
              </Col>
            </Row>
            <Row className="justify-content-md-center m-auto">
              <Col xs md lg="4">
                <p className="text-green-900 decoration-4 font-semibold">
                  Starting Time:
                </p>
              </Col>
              <Col xs md lg="2">
                {event.start_time}
              </Col>
            </Row>
            <Row className="justify-content-md-center m-auto">
              <Col xs md lg="4">
                <p className="text-green-900 decoration-4 font-semibold">
                  End Date:
                </p>
              </Col>
              <Col xs md lg="2">
                {event.end_date}
              </Col>
            </Row>

            <Row className="justify-content-md-center m-auto">
              <Col xs md lg="4">
                <p className="text-green-900 decoration-4 font-semibold">
                  Starting Time:
                </p>
              </Col>
              <Col xs md lg="2">
                {event.end_time}
              </Col>
            </Row>
            <Row className="justify-content-md-center m-auto">
              <Col xs md lg="4">
                <p className="text-green-900 decoration-4 font-semibold">
                  Category:
                </p>
              </Col>
              <Col xs md lg="2">
                {event.category}
              </Col>
            </Row>
            <Row className="justify-content-md-center m-auto">
              <Col xs md lg="4">
                <p className="text-green-900 decoration-4 font-semibold">
                  Event Address:
                </p>
              </Col>
              <Col xs md lg="2">
                {event.event_address}
              </Col>
            </Row>
            <Row className="justify-content-md-center m-auto">
              <Col xs md lg="4">
                <p className="text-green-900 decoration-4 font-semibold">
                  Venue:
                </p>
              </Col>
              <Col xs md lg="2">
                {event.event_venue}
              </Col>
            </Row>
          </Col>

          <Col xs md lg="6" className="flex-colum items-center justify-center">
            <Row className="justify-content-md-center m-auto">
              <Col xs md lg="4">
                <p className="text-green-900 decoration-4 font-semibold">
                  Latitude:
                </p>
              </Col>
              <Col xs md lg="2">
                {event.address_latitude}
              </Col>
            </Row>
            <Row className="justify-content-md-center m-auto">
              <Col xs md lg="4">
                <p className="text-green-900 decoration-4 font-semibold">
                  Longitude:
                </p>
              </Col>
              <Col xs md lg="2">
                {event.address_longitude}
              </Col>
            </Row>
            <Row className="justify-content-md-center m-auto">
              <Col xs md lg="4">
                <p className="text-green-900 decoration-4 font-semibold">
                  Contact Phone:
                </p>
              </Col>
              <Col xs md lg="2">
                {event.contact_phone}
              </Col>
            </Row>
            <Row className="justify-content-md-center m-auto">
              <Col xs md lg="4">
                <p className="text-green-900 decoration-4 font-semibold">
                  Link:
                </p>
              </Col>
              <Col xs md lg="2">
                {event.redirectUrl}
              </Col>
            </Row>

            <Row className="justify-content-md-center m-auto">
              <Col xs md lg="4">
                <p className="text-green-900 decoration-4 font-semibold">
                  Enterance Fee:
                </p>
              </Col>
              <Col xs md lg="2">
                {event.event_entrance_fee}
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Button className="bg-blue flex aligm-center" variant="primary" data-bs-toggle="modal" data-bs-target="#PublishModal">
              <CloudDoneIcon /> Publish
            </Button>
          </Col>
          <Col xs lg="2">
            <Button className="bg-green" variant="success" data-bs-toggle="modal" data-bs-target="#EditModal">
              <EditIcon />
              Edit
            </Button>
          </Col>

          <Col xs lg="2">
            <Button className="bg-red" variant="danger" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
              <DeleteIcon />
              Delete
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default DetailPage;
