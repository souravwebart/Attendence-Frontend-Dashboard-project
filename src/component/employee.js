/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery'


const loginIcon = <FontAwesomeIcon icon={faClock} />
const rightIcon = <FontAwesomeIcon icon={faChevronRight} />
const leftIcon = <FontAwesomeIcon icon={faChevronLeft} />






function employee() {
    $(document).ready(function () {
        $('select').change(function () {
            $('select option')[0].value = $('select option:selected').val();
            $('select option')[0].innerHTML = $('select option:selected').val();
            $("select").val($('select option:selected').val());
        });
    });
    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="top-box">
                            <h1>0h 00m Today</h1>
                            <p>Logged off: Apr 10 at 6
                                00 PM</p>
                            <button type="button" className="topbox-button"><span className="topbox-button-icon">{loginIcon}</span> Login</button>
                            <div className="input-group">
                                <div className="custom-file">
                                    <label className="custom-file-label" for="inputGroupFile04">Location Address...</label>
                                </div>
                                <div className="input-group-append">
                                    <label for="file-upload" className="address-file-upload">
                                        <i className="fa fa-cloud-upload"></i> Image.jpg
                                    </label>
                                    <input id="file-upload" type="file" />
                                    <a href="#" className="address-button">Check</a>
                                </div>
                            </div>
                        </div>
                        <div className="left-bottom-box">
                            <div className="Leaves-apply">
                                <h1>Leaves</h1>
                                <p>Apply</p>
                            </div>
                            <div className="Leaves-Reason">
                                <div className="Earned-Sick-Optional">
                                    <p>Earned</p>
                                    <h1>8</h1>
                                </div>
                                <div className="Earned-Sick-Optional">
                                    <p>Sick</p>
                                    <h1>10</h1>
                                </div>
                                <div className="Earned-Sick-Optional">
                                    <p>Optional</p>
                                    <h1>13</h1>
                                </div>
                            </div>
                            <div className="Leaves-Reason">
                                <div className="Earned-Sick-Optional">
                                    <p>Earned</p>
                                    <h1>8</h1>
                                </div>
                                <div className="Earned-Sick-Optional">
                                    <p>Sick</p>
                                    <h1>10</h1>
                                </div>
                                <div className="Earned-Sick-Optional">
                                    <p>Optional</p>
                                    <h1>13</h1>
                                </div>
                            </div>
                            <div className="leave-history">
                                <p>View Leave History</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="topmiddlebox">
                            <div className="month">
                                <select className="dropdownmonth" placeholder="month">
                                    <option name="" value="" className="menu">Month</option>
                                    <option name="January" value="January">January</option>
                                    <option name="February" value="February">February</option>
                                    <option name="March" value="March">March</option>
                                    <option name="April" value="April">April</option>
                                    <option name="May" value="May">May</option>
                                    <option name="June" value="June">June</option>
                                    <option name="July" value="July">July</option>
                                    <option name="August" value="Auguest">August</option>
                                    <option name="September" value="September">September</option>
                                    <option name="October" value="October">October</option>
                                    <option name="November" value="November">November</option>
                                    <option name="December" value="December">December</option>
                                </select>
                                <div className="daterange">
                                    <div className="rangedate">
                                        <span>{leftIcon}</span>
                                        <p> 14 - 20 </p>
                                        <span>{rightIcon}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <div className="Month-details">
                                    <p>Mon</p>
                                    <span>Oct 20</span>
                                </div>
                                <div className="description-details">
                                    <h1>logged in: 11:00 AM | logged off : 09:00 PM | <span>12h working, 4h overwork</span></h1>
                                    <p>more information...</p>
                                </div>
                            </div>
                            <div className="description1">
                                <div className="Month-details1">
                                    <p>Tue</p>
                                    <span>Oct 21</span>
                                </div>
                                <div className="description-details1">
                                    <div><h1>LOP</h1></div>
                                    <div> <p><a href="#">Take Action</a></p></div>
                                </div>
                            </div>
                            <div className="description">
                                <div className="Month-details">
                                    <p>Wed</p>
                                    <span>Oct 22</span>
                                </div>
                                <div className="description-details3">
                                    <div><h1>Leave applied: Casual</h1></div>
                                    <div> <p>Approved</p></div>
                                </div>
                            </div>
                            <div className="description4">
                                <div className="Month-details4">
                                    <p>Thu</p>
                                    <span>Oct 23</span>
                                </div>
                                <div className="description-details4">
                                    <p>National Holiday</p>
                                </div>
                            </div>
                            <div className="description4">
                                <div className="Month-details4">
                                    <p>Fri</p>
                                    <span>Oct 24</span>
                                </div>
                                <div className="description-details4">
                                    <p>Optional Holiday</p>
                                </div>
                            </div>
                            <div className="description">
                                <div className="Month-details1">
                                    <p>Sat</p>
                                    <span>Oct 25</span>
                                </div>

                            </div>
                            <div className="description">
                                <div className="Month-details1">
                                    <p>Sun</p>
                                    <span>Oct 26</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="topmiddlebox">
                            <div className="topheading">
                                <h1>Total week data</h1>
                            </div>
                            <div className="Work-hour">
                                <div className="Working-hour">
                                    <p>Working Hours</p>
                                    <h1>20h 30m</h1>
                                </div>
                                <div className="vertical-line"></div>
                                <div className="Working-hour2">
                                    <p>Worked</p>
                                    <h1>10h 30m</h1>
                                </div>
                            </div>
                            <div className="Work-hour1">
                                <div className="Working-hour">
                                    <p>Over Time</p>
                                    <h1>20h 30m</h1>
                                </div>
                                <div className="vertical-line"></div>
                                <div className="Working-hour2">
                                    <p>Under Time</p>
                                    <h1>01h 30m</h1>
                                </div>
                            </div>
                            <div className="topheading">
                                <h1>Extra Information</h1>
                            </div>
                            <div className="holiday-box">
                            <h1>Upcoming Holiday</h1>
                            <p>25th December | Christmas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default employee;
