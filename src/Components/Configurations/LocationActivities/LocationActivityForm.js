import React, {useState} from "react";
import "../ConfigurationForm.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";
import axios from "axios";
import Swal from "sweetalert2";

const endpointBaseURL = "http://localhost:8080/admin/activity";

const token = JSON.parse(sessionStorage.getItem('token'));
const config = {
    headers: {Authorization: `Bearer ` + token}
};

function LocationActivityForm(props) {

    const CreateButton = styled(Button)(({theme}) => ({
        backgroundColor: '#00565b',
        '&:hover': {
            backgroundColor: '#00565b'
        },
        width: '50%',
        margin: '1%',
        marginLeft: '25%',
        color: 'white'
    }));

    const [id, setId] = useState(props.id);
    const [activityName, setActivityName] = useState(props.activityName);
    const [image, setImage] = useState(props.image);
    const [imageBase64, setImageBase64] = useState("");

    const handleActivityNameChange = event => {
        setActivityName(event.target.value);
    }

    const handleImageChange = event => {
        let image = event.target.files[0];
        let url = URL.createObjectURL(image);
        setImage(url);
        getBase64(image).then(
            data => setImageBase64(data)
        );
    };

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const saveLocationActivity = event => {
        const data = {
            activityName: activityName,
            image: imageBase64
        }

        axios.post(endpointBaseURL, data, config)
            .then(res => {
                if (res.data.success) {
                    Swal.fire(
                        'Done',
                        res.data.message,
                        'success'
                    ).then(r => window.location.reload(false))
                } else {
                    Swal.fire(
                        'Failed',
                        res.data.message,
                        'error'
                    ).then(r => {
                    })
                }
            })
            .catch(err => {
                Swal.fire(
                    'Failed',
                    'Something went wrong',
                    'error'
                ).then(r => {
                })
            })

    }

    const updateLocationActivity = event => {
        const data = {
            id: id,
            activityName: activityName,
            image: imageBase64 === "" ? image : imageBase64
        }

        axios.put(endpointBaseURL, data, config)
            .then(res => {
                if (res.data.success) {
                    Swal.fire(
                        'Done',
                        res.data.message,
                        'success'
                    ).then(r => window.location.reload(false))
                } else {
                    Swal.fire(
                        'Failed',
                        res.data.message,
                        'error'
                    ).then(r => {
                    })
                }
            })
            .catch(err => {
                Swal.fire(
                    'Failed',
                    'Something went wrong',
                    'error'
                ).then(r => {
                })
            })

    }
    return (
        <div className="popup-box">
            <div className="box">
                <button className="btn-close" onClick={props.handleClose}>
                    <p>+</p>
                </button>
                <div className="card">
                    <div className="configuration-form-title">
                        {props.action === "update" ? "Modify Location Activity" : "Create New Location Activity"}
                    </div>
                </div>

                <div className="card">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {m: 0, width: '100%'},
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField id="activityName" label="Location Activity Name" type="text"
                                       value={activityName}
                                       onChange={handleActivityNameChange}/>
                            <br/><br/>
                            <h5>Location Activity Image</h5>
                            <Button color="success" variant="outlined" component="label">
                                {props.action === "update" ? "Change Image" : "Upload Image"}
                                <input hidden accept="image/*" multiple type="file" onChange={handleImageChange}/>
                            </Button>
                            <ImageList sx={{m: "2%", width: "96%", height: 200}} cols={2} rowHeight={1}>
                                <ImageListItem>
                                    <img
                                        src={image}
                                        // alt="Location Activity Image"
                                        loading="lazy"
                                        width="100%"
                                    />
                                </ImageListItem>
                            </ImageList>

                        </div>
                        <CreateButton
                            onClick={props.action === "update" ? updateLocationActivity : saveLocationActivity}>
                            {props.action === "update" ? "Update Location Activity" : "Save New Location Activity"}
                        </CreateButton>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default LocationActivityForm;