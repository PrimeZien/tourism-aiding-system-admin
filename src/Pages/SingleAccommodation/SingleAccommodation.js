import React from "react";
import SingleAccommodationForm
    from "../../Components/SingleAccommodation/SingleAccommodationForm/SingleAccommodationForm";
import "./SingleAccommodation.css";
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';

function SingleAccommodation() {

    const UpdateButton = styled(Button)(({theme}) => ({
        backgroundColor: '#00565b',
        '&:hover': {
            backgroundColor: '#00565b',
            fontWeight: 'bold'
        },
        width: '50%',
        marginLeft: '25%'
    }));

    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Single Accommodation Details</p>
                <p className="sub-title">Vendor / Accommodation / View Accommodation</p>
            </div>
            <div className="main-section">
                <div className="card">
                    <SingleAccommodationForm/>
                </div>
                <div className="read-only-filter">
                </div>
            </div>
        </>
    );
}

export default SingleAccommodation;