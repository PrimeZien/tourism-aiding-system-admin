import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./SingleAccommodationForm.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import Rating from "@mui/material/Rating";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ACCOMMODATION_1 from "./../../../Assets/Accommodations/accommodation-1.jpg";
import ACCOMMODATION_2 from "./../../../Assets/Accommodations/accommodation-2.jpg";

function SingleAccommodationForm() {

    const [checkInTime, setCheckInTime] = React.useState(new Date('2014-08-18T12:00:00'));

    const [checkOutTime, setCheckOutTime] = React.useState(new Date('2014-08-18T10:00:00'));

    const [itemData, setItemData] = useState(
        [createData(1, ACCOMMODATION_1, "Accommodation 01", "image/jpeg"),
            createData(2, ACCOMMODATION_2, "Accommodation 02", "image/jpeg")]);

    const handleCheckInTime = (newValue) => {
        setCheckInTime(newValue);
    };
    const handleCheckOutTime = (newValue) => {
        setCheckOutTime(newValue);
    };

    function createData(id, url, name, type) {
        return {
            id, url, name, type
        };
    }

    return (
        <>
            <div className="card">
                <h3>Basic Details</h3>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/>
                <hr/>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField id="name" label="Accommodation Name" type="text"
                                   InputProps={{
                                       readOnly: true,
                                   }}
                                   defaultValue="Granbell Hotel Colombo"
                                   sx={{m: 1, width: '32%'}}/>
                        <TextField id="telephone" label="Telephone" type="text"
                                   InputProps={{
                                       readOnly: true,
                                   }}
                                   defaultValue="+94 112 397 397"
                                   sx={{m: 1, width: '31%'}}/>
                        <TextField id="email" label="Email" type="text"
                                   InputProps={{
                                       readOnly: true,
                                   }}
                                   defaultValue="reservations1@granbellhotel.lk"
                                   sx={{m: 1, width: '32%'}}/>
                        {/*email_verified*/}
                        <TextField
                            id="description"
                            label="Description"
                            multiline
                            maxRows={10}
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            sx={{m: 1, width: '97%'}}
                        />
                        <FormControl
                            sx={{m: 1, width: '48%'}}>
                            <InputLabel id="vendor-type">Type</InputLabel>
                            <Select
                                labelId="accommodationType"
                                id="accommodationType"
                                label="Accommodation Type"
                                defaultValue={30}
                            >
                                <MenuItem value={10}>HOTEL</MenuItem>
                                <MenuItem value={20}>RESORT</MenuItem>
                                <MenuItem value={30}>CABIN</MenuItem>
                                <MenuItem value={40}>APARTMENT</MenuItem>
                                <MenuItem value={50}>COTTAGE</MenuItem>
                                <MenuItem value={60}>CAMPING</MenuItem>
                            </Select>
                        </FormControl>

                    </div>
                </Box>
                <h3>Location Details</h3>
                <hr/>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField id="location" label="Nearby Location" type="text"
                                   InputProps={{
                                       readOnly: true,
                                   }}
                                   defaultValue="Colombo"
                                   sx={{m: 1, width: '29%'}}/>
                        <TextField id="addressLine1" label="Address Line 01" type="text"
                                   InputProps={{
                                       readOnly: true,
                                   }}
                                   defaultValue="282/5 Kollupitiya Road"
                                   sx={{m: 1, width: '33%'}}/>
                        <TextField id="addressLine2" label="Address Line 02" type="text"
                                   InputProps={{
                                       readOnly: true,
                                   }}
                                   defaultValue="Marine Drive"
                                   sx={{m: 1, width: '33%'}}/>
                        <TextField id="city" label="City" type="text"
                                   InputProps={{
                                       readOnly: true,
                                   }}
                                   defaultValue="Colombo 03"
                                   sx={{m: 1, width: '18%'}}/>
                        <TextField id="province" label="Province" type="text"
                                   InputProps={{
                                       readOnly: true,
                                   }}
                                   defaultValue="Western"
                                   sx={{m: 1, width: '19%'}}/>
                        <TextField id="postalCode" label="Postal Code" type="text"
                                   InputProps={{
                                       readOnly: true,
                                   }}
                                   defaultValue="00300"
                                   sx={{m: 1, width: '19%'}}/>
                        <TextField id="latitude" label="Latitude" type="text"
                                   InputProps={{
                                       readOnly: true,
                                   }}
                                   defaultValue="6.9128"
                                   sx={{m: 1, width: '19%'}}/>
                        <TextField id="longitude" label="Longitude" type="text"
                                   InputProps={{
                                       readOnly: true,
                                   }}
                                   defaultValue="79.8507"
                                   sx={{m: 1, width: '18%'}}/>
                    </div>
                </Box>
                <h3>House Rules</h3>
                <hr/>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <LocalizationProvider dateAdapter={AdapterMoment}>

                            <TimePicker
                                label="Check In Time"
                                value={checkInTime}
                                onChange={handleCheckInTime}
                                renderInput={(params) => <TextField {...params} sx={{m: 1, width: '48%'}}/>}
                                className="time"
                            />
                            <TimePicker
                                label="Check Out Time"
                                value={checkOutTime}
                                onChange={handleCheckOutTime}
                                renderInput={(params) => <TextField {...params} sx={{m: 1, width: '48%'}}/>}

                            />
                        </LocalizationProvider>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={true} disabled/>} label="Parking Available"
                                              sx={{m: 0, width: '48%'}}/>
                            <FormControlLabel control={<Checkbox checked={true} disabled/>}
                                              label="Smoking Rooms Available"
                                              sx={{m: 0, width: '48%'}}/>
                            <FormControlLabel control={<Checkbox disabled/>} label="Pets Allowed"
                                              sx={{m: 0, width: '48%'}}/>
                        </FormGroup>
                        {/*+rating*/}
                        {/*+rating_count*/}
                    </div>
                </Box>
                <h3>Photo Gallery</h3>
                <hr/>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <ImageList sx={{m: "2%", width: "96%", height: 500}} cols={3} rowHeight={3}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.id}>
                                    <img
                                        src={item.url}
                                        alt={item.name}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </Box>
            </div>
        </>
    );
}

export default SingleAccommodationForm;