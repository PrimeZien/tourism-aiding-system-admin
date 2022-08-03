import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./LocationAttractionForm.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function NewLocationAttractionForm() {

    const [itemData, setItemData] = useState([]);

    const handleImageChange = event => {
        let image = event.target.files[0];
        let url = URL.createObjectURL(image);
        let name = image.name;
        let type = image.type;
        let id = itemData.length + 1;
        let items = [];
        {
            itemData.map((item) => (
                items.push(item)
            ))
        }
        items.push(createData(id, url, name, type));
        setItemData(items);
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
                <hr/>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField id="name" label="Location Attraction Name" type="text" sx={{m: 1, width: '97%'}}/>
                        <TextField
                            id="description"
                            label="Description"
                            multiline
                            maxRows={10}
                            sx={{m: 1, width: '97%'}}
                        />
                        <TextField id="telephone" label="Telephone" type="text" sx={{m: 1, width: '32%'}}/>
                        <TextField id="email" label="Email" type="text" sx={{m: 1, width: '32%'}}/>
                        <TextField id="website" label="Website" type="text" sx={{m: 1, width: '32%'}}/>
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
                        <Button color="success" variant="outlined" component="label">
                            Upload Image
                            <input hidden accept="image/*" multiple type="file" onChange={handleImageChange}/>
                        </Button>
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

export default NewLocationAttractionForm;