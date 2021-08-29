import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';



const headerIcon = <FontAwesomeIcon icon={faArrowLeft} />
const uploadIcon = <FontAwesomeIcon icon={faCloudUploadAlt} />


function apply() {

    return (
        <div className="applyleave-main">
            <div className="container-fluid">
                <div className="apply-header">
                <Link to="/"><h1><span>{headerIcon}</span>Apply Leave</h1></Link>   
                </div>
            </div>
            <div className="container formstart">
                <div className="row">
                    <div className="form-apply">
                        <div className="item-content one">
                            <div className="item">
                            <div className="form-heading">
                            <h1>Apply for leave</h1>
                            </div>
                                <form data-validation="true" action="#" method="POST" encType="multipart/form-data">
                                    <div className="mb-3 form-group">
                                        <label for="Select" >Leave Type</label>
                                        <select id="Select" className="form-select">
                                            <option></option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="name">Start date</label>
                                        <input type="name" className="form-control1" ></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="name">No. of days</label>
                                        <input type="name" className="form-control1" ></input>
                                    </div>
                                    <div className="item-inner">
                                        <div className="item-content">
                                            <div className="image-upload">
                                                <label for="file_upload"> <img src="" alt="" className="uploaded-image"></img>
                                                    <div className="h-100">
                                                        <div className="dplay-tbl">
                                                            <div className="dplay-tbl-cell">
                                                                <span>{uploadIcon}</span>
                                                                <h5><b>Drag and drop your file</b></h5>
                                                                <h6 className="mt-10 mb-70"> or click here to upload</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <input data-required="image" type="file" name="image_name" id="file_upload"
                                                        className="image-input" data-traget-resolution="image_resolution" ></input>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="form-leaves-button">save</button>
                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default apply
