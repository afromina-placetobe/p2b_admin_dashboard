import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";


import ModalContainer from "./AddEvent";

const Datatable = () => {
  const [data, setData] = useState(userRows);
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
  const [modalShow, setModalShow] = useState(false);

  
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const addEvent=(e)=>{
    e.preventDefault();
    console.log("add Event")
    const data ={
      event_status:event.event_status,
      userId:event.userId,
      event_image: event.event_image,
      event_name:event.event_name,
      event_description: event.event_description,
      start_date:event.start_date,
      start_time:event.start_time,
      end_date: event.end_date,
      end_time:event.end_time,
      category: event.category,
      event_organizer:event.event_organizer,
      event_venue:event.event_venue,
      event_address:event.event_address,
      address_latitude:event.address_latitude,
      address_longitude:event.address_longitude,
      contact_phone:event.contact_phone,
      redirectUrl:event.redirectUrl,
      event_entrance_fee:event.event_entrance_fee
    }
    axios.get('/sanctum/csrf-cookie').then(response =>{
      axios.post('/api/addEvent', data).then((res) => {
        if (res.data.status === 200) {
          console.log('success');
          axios.get(`/api/pendingEvent`).then((res) => {
            if (res.data.status === 200) {
              setEvent(res.data.event);
            }
          });
    } 
      });
    });
  
}

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/detailpage" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            {/* <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div> */}
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
        <ModalContainer
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="datatableTitle ">
        Add New Events
        <div className="link" onClick={() => setModalShow(true)}>
          Add New Event
        </div>
      </div>

      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
