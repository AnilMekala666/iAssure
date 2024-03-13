import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';



function AssessmentDetails() {
   
    return (
        <div style={{ marginTop: "40px" }}>
            <div className='right-cont ms-4 gap-3 me-4'>
                <div className='card'>
                    <div className='body-cont'>
                        <div className='bodycont-in d-flex bd-highlight border-0 mb-0'>
                            <h3 className='flex-grow-1 bd-highlight'>Warehouse Safety Checklist</h3>
                            <button className='btn btn-edit bd-highlight me-2 ms-2'><SearchIcon /></button>
                            <button className='btn btn-danger btn-orange d-flex bd-highlight'>New Assessments</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssessmentDetails