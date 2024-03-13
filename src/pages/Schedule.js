import React, { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import { Tabs, Tab } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Asgardia from '../assets/images/Assessment/Asgardia.png';

function Schedule() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const columns = [
    { field: 'schedule', headerName: 'Schedules', width: 300, renderCell: (params) => ( // Customize the cell renderer
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={Asgardia} alt="Warehouse" style={{ marginRight: '8px', width: '30px', height: '30px' }} /> {/* Display the image */}
            <span>{params.value}</span> {/* Display the schedule name */}
        </div>
    )},
    { field: 'duedate', headerName: 'Due Date', width: 130 },
    { field: 'lastmodified', headerName: 'Last modified', width: 130 },
    { field: 'scheduled', headerName: 'Scheduled', width: 100 },
    { field: 'access', headerName: 'Access', type: '', width: 130 },
    { field: 'edit', headerName: '', type: 'number', width: 130 },
    { field: 'action', headerName: '', width: 130 },
    
];
const rows = [
    { id: 1, schedule: 'Warehouse Safety Checklist', duedate: 'Feb 15-21', lastmodified: '7 days ago', scheduled:'Yes', access:'All Users',edit:'Edit', action: '...'},
    { id: 2, schedule: 'Warehouse Safety Checklist', lastpublished: '7 days ago', lastmodified: '7 days ago', scheduled:'All users', startassessment:'Start Assessment' },
];


  return (
    <div style={{ marginTop: "40px" }}>
      <div className='right-cont ms-4 gap-3 me-4'>
        <div className='card'>
          <div className='body-cont'>
            <div className='bodycont-in d-flex bd-highlight border-0 mb-0'>
              <Tabs value={activeTab} onChange={handleTabChange} className="flex-grow-1 bd-highlight">
                <Tab className='tab-text' label="Scheduled Tasks" />
                <Tab className='tab-text' label="Active Tasks" />
                <Tab className='tab-text' label="Completed Tasks" />
              </Tabs>
              <LocalizationProvider dateAdapter={AdapterDayjs} className="d-flex bd-highlight pt-0">
                <DemoContainer components={['DatePicker']}>
                  <DatePicker label="Date Filter" className='date-block'/>
                </DemoContainer>
              </LocalizationProvider>
              <button className='btn btn-edit bd-highlight me-2 ms-2'><SearchIcon /></button>
              <button className='btn btn-danger btn-orange d-flex bd-highlight'>New Assessments</button>
            </div>
            {/* Render content based on active tab */}
            {activeTab === 0 && (
                <div style={{ height: 400, width: '100%'}}>
                    <DataGrid
                        sx={{
                            '.MuiDataGrid-columnHeaderTitle': { 
                                fontWeight: '400 !important',
                                fontSize: '16px'
                            },
                            '.MuiDataGrid-cellContent':{
                                fontWeight: '500 !important',
                                fontSize: '16px'
                            }
                            }}
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />


                </div>
            )}
            {activeTab === 1 && (
              <div>
                {/* Content for Another Tab */}
                <h2>Content for Another Tab</h2>
                {/* Add your content here */}
              </div>
            )}
            {/* Add more conditionals for additional tabs */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
