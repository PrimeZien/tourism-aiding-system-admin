import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import "../Configurations.css"
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import * as FaIcons from "react-icons/fa";
import Switch from "@mui/material/Switch";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import VehicleTypeForm from "../../../Components/Configurations/VehicleTypes/VehicleTypeForm";

//Table columns
const columns = [
    {
        id: 'id',
        label: 'ID',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'typeName',
        label: 'Type Name',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'pricePerKilometer',
        label: 'Price Per Kilometer',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'visibilityStatus',
        label: 'Visibility',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'moreActions',
        label: 'More Actions',
        minWidth: 100,
        align: 'center'
    }
];

//Create data for table row
function createData(id, typeName, pricePerKilometer, visibilityStatus) {
    return {
        id, typeName, pricePerKilometer, visibilityStatus
    }
}

function VehicleTypes() {

    //Value variables
    const [id, setId] = useState(0);
    const [typeName, setTypeName] = useState("");
    const [pricePerKilometer, setPricePerKilometer] = useState(0);
    const [action, setAction] = useState("save");

    //Pop up form
    const [isFormOpen, setIsFormOpen] = useState(false);
    const toggleFormPopup = () => {
        setIsFormOpen(!isFormOpen);
    }

    //Button
    const StyledButton = styled(Button)(({theme}) => ({
        backgroundColor: '#00565b',
        '&:hover': {
            backgroundColor: '#00565b'
        },
        width: '100%',
        marginTop: '10px'
    }));


    // Table functions

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const formatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    };

    const rows = [
        createData(45, "Small", 250.00, "VISIBLE"),
        createData(46, "Medium", 500.00, "VISIBLE"),
    ];
    // const [rows, setRows] = useState([]);
    // useEffect(() => {
    //     axios.get("http://localhost:8080/admin/location")
    //         .then(res => {
    //             const locations = res.data.body;
    //             setRows(locations);
    //         })
    // }, []);

    const handleVisibility = (id) => (event) => {
        // const baseURL = "http://localhost:8080/admin/location/" + id;
        // axios
        //     .patch(baseURL)
        //     .then((response) => {
        //         alert(response.data.message);
        //         axios.get("http://localhost:8080/admin/location")
        //             .then(res => {
        //                 const locations = res.data.body;
        //                 setRows(locations);
        //             })
        //     });
    };

    const createVehicleType = () => {
        setId(0);
        setTypeName("");
        setPricePerKilometer("");
        setAction("save");
        toggleFormPopup();
    };

    const editVehicleType = (id, typeName, pricePerKilometer) => (action) => {
        setId(id);
        setTypeName(typeName);
        setPricePerKilometer(pricePerKilometer);
        setAction("update");
        toggleFormPopup();
    };

    const deleteVehicleType = (id) => (action) => {
    };

    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Vehicle Types</p>
                <p className="sub-title">Configurations / Vehicle Types</p>
            </div>
            <div className='main-section'>
                <div className="card">
                    <Grid container spacing={2}>
                        <Grid item xs={9}>
                            <TextField
                                className="search-field"
                                id="vehicle-type-search"
                                label="Search Vehicle Types"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <StyledButton className="create-button" variant="contained"
                                          onClick={createVehicleType}>Create New Vehicle Type</StyledButton>
                        </Grid>
                    </Grid>
                </div>
                <div className="card">
                    <Paper sx={{width: '100%', overflow: 'hidden'}}>
                        <TableContainer sx={{maxHeight: 440}}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{
                                                    minWidth: column.minWidth,
                                                    color: "#14292A",
                                                    fontWeight: "bold"
                                                }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        if (column.label === "More Actions") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align}>
                                                                    <div className="more-action more-action-edit"
                                                                         onClick={editVehicleType(row.id, row.typeName, row.pricePerKilometer)}>
                                                                        <FaIcons.FaPencilRuler/>
                                                                    </div>
                                                                    <div className="more-action more-action-delete"
                                                                         onClick={deleteVehicleType(row.id)}>
                                                                        <FaIcons.FaRecycle/>
                                                                    </div>
                                                                </TableCell>
                                                            );
                                                        } else if (column.label === "Visibility") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align}>
                                                                    <Switch
                                                                        checked={value === "VISIBLE"}
                                                                        onChange={handleVisibility(row.id)}
                                                                        inputProps={{'aria-label': 'controlled'}}
                                                                    />
                                                                </TableCell>
                                                            );
                                                        } else {
                                                            return (
                                                                <TableCell key={column.id} align={column.align}>
                                                                    {value}
                                                                </TableCell>
                                                            );
                                                        }
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </div>
                {isFormOpen && <VehicleTypeForm
                    id={id} typeName={typeName} pricePerKilometer={pricePerKilometer}
                    action={action}
                    handleClose={toggleFormPopup}
                />}
            </div>
        </>
    );
}

export default VehicleTypes;