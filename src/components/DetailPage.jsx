import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SimpleImageSlider from "react-simple-image-slider";
import useResizeObserver from "use-resize-observer";
import ShowMoreLess from 'show-more-less'
import 'show-more-less/dist/index.css'
import styles from './toggle.scss'
import Button from 'react-bootstrap/Button';
import './toggle.scss'
import EditIcon from '@mui/icons-material/Edit';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import DeleteIcon from '@mui/icons-material/Delete';

const DetailPage = () => {
    const images = [
        { url: "https://cdnuploads.aa.com.tr/uploads/Contents/2022/01/23/thumbs_b_c_e087a3f5a302e41d70b3407cb6c8f2c0.jpg?v=160048" },
        { url: "http://guidetoethiopia.com/wp-content/uploads/2016/05/Great-Ethiopian-Run.jpg" },
        { url: "http://guidetoethiopia.com/wp-content/uploads/2016/05/Great-Ethiopian-Run.jpg" },

    ];

    const [expanded, setExpanded] = useState(false);

    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nobis excepturi accusamus ipsum, doloremque voluptatem nisi odio quis voluptates facilis quam sequi quibusdam quia, in doloribus? Quisquam dolorem earum natusLorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nobis excepturi accusamus ipsum, doloremque voluptatem nisi odio quis voluptates facilis quam sequi quibusdam quia, in doloribus? Quisquam dolorem earum natus.';





    const { ref, width = 1, height = 1 } = useResizeObserver();
    return (
        <Container fluid="md">
            <Row className="justify-content-md-center m-auto">
                <Col xs md lg="6">
                    <div ref={ref} className="card_imgBox shadow p-1 mb-5 ml-5 mt-10 bg-white rounded" style={{ width: "100%", height: "350px" }} >
                        <SimpleImageSlider
                            width={width}
                            height={height}
                            images={images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>
                </Col>

                <Col xs md lg="6" className='flex items-center justify-center'>
                    <div className=' mb-5 ml-5 mt-10 flex-column items-center justify-center '>
                        <h2 className='text-center text-lg font-semibold '>Event Name</h2>
                        <ShowMoreLess
                            className="a"
                            text={text}
                            threshold={200}
                            expanded={expanded}
                            onExpand={setExpanded}
                            classes={{
                                root: styles.root,
                                text: styles.text,
                                clickable: styles.clickable
                            }}
                        />

                        {/* <p className='p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p> */}
                        <div className=' flex items-center  pt-4'>
                            <p className='bg-cyan-200 p-1 w-max rounded-lg text-[blue]'>Status</p> :
                            <p className='text-[#c0b388]' >Pending</p></div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-md-center m-auto">
                <Col xs md lg="6">

                    <Row className="justify-content-md-center m-auto">
                        <Col xs md lg="4">
                            <p className='text-green-900 decoration-4 font-semibold'>Starting Date:</p>
                        </Col>
                        <Col xs md lg="2" >
                            2/12/22
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center m-auto">
                        <Col xs md lg="4">
                            <p className='text-green-900 decoration-4 font-semibold'>Starting Time:</p>
                        </Col>
                        <Col xs md lg="2" >
                            1:00AM
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center m-auto">
                        <Col xs md lg="4">
                            <p className='text-green-900 decoration-4 font-semibold'>End Date:</p>
                        </Col>
                        <Col xs md lg="2" >
                            2:00AM
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center m-auto">
                        <Col xs md lg="4">
                            <p className='text-green-900 decoration-4 font-semibold'>Category:</p>
                        </Col>
                        <Col xs md lg="2" >
                            Music
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center m-auto">
                        <Col xs md lg="4">
                            <p className='text-green-900 decoration-4 font-semibold'>Event Address:</p>
                        </Col>
                        <Col xs md lg="2" >
                            Addis
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center m-auto">
                        <Col xs md lg="4">
                            <p className='text-green-900 decoration-4 font-semibold'>Venue:</p>
                        </Col>
                        <Col xs md lg="2" >

                        </Col>
                    </Row>
                </Col>

                <Col xs md lg="6" className='flex-colum items-center justify-center'>
                    <Row className="justify-content-md-center m-auto">
                        <Col xs md lg="4">
                            <p className='text-green-900 decoration-4 font-semibold'>Latitiude:</p>
                        </Col>
                        <Col xs md lg="2" >
                            232434
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center m-auto">
                        <Col xs md lg="4">
                            <p className='text-green-900 decoration-4 font-semibold'>Longtiude:</p>
                        </Col>
                        <Col xs md lg="2" >
                            454545
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center m-auto">
                        <Col xs md lg="4">
                            <p className='text-green-900 decoration-4 font-semibold'>Contact phone:</p>
                        </Col>
                        <Col xs md lg="2" >
                            +2519393939
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center m-auto">
                        <Col xs md lg="4">
                            <p className='text-green-900 decoration-4 font-semibold'>Link:</p>
                        </Col>
                        <Col xs md lg="2" >
                            www.p2b.com
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center m-auto">
                        <Col xs md lg="4">
                            <p className='text-green-900 decoration-4 font-semibold'>Enterance Fee:</p>
                        </Col>
                        <Col xs md lg="2" >
                            200 Birr
                        </Col>
                    </Row>

                </Col>
            </Row>


            <Row className="justify-content-md-center">
            <Col xs lg="2">
                   <Button className='bg-blue flex aligm-center' variant="primary"><CloudDoneIcon/> Publish</Button>

                </Col>
                <Col xs lg="2">
                   <Button className='bg-green' variant="success"><EditIcon/>Edit</Button>

                </Col>

                <Col xs lg="2">

                    <Button className='bg-red' variant="danger"><DeleteIcon/>Delete</Button>{' '}
                </Col>
            </Row>

        </Container>
    );

}
export default DetailPage;
