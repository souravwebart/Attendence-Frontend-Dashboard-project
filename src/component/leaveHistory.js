/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const filterIcon = <FontAwesomeIcon icon={faFilter} />

function leaveHistory() {
    return (
        <div className="leave-history">
            <div className="leave-history-top">
                <div className="Leave-history-header">
                    <h1>Leave History</h1>
                </div>
                <div className="Leave-history-filter">
                    <p><span>{filterIcon}</span>Filter</p>
                    <div className="btn-group">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown-menu" aria-expanded="false">All</button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">All</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="Table-leave-history">
                        <table className="table table-hover table-responsive">
                            <thead>
                                <tr className="table-header">
                                    <th scope="col">Requested on</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Reason</th>
                                    <th scope="col">Attachment</th>
                                    <th scope="col">Status</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-first-child">
                                    <th scope="row">20 Oct 2021</th>
                                    <td>Vacation</td>
                                    <td>20 Oct 2021 - 26 Oct 2021</td>
                                    <td>Some reason.....</td>
                                    <td className="attachment">Some.png</td>
                                    <td className="status"><span>Approved</span></td>

                                </tr>
                                <tr className="row-first-child">
                                    <th scope="row">20 Oct 2021</th>
                                    <td>Vacation</td>
                                    <td>20 Oct 2021 - 26 Oct 2021</td>
                                    <td>Some reason.....</td>
                                    <td className="attachment">Some.png</td>
                                    <td className="status"><span>Approved</span></td>

                                </tr>
                                <tr className="row-first-child">
                                    <th scope="row">20 Oct 2021</th>
                                    <td>Vacation</td>
                                    <td>20 Oct 2021 - 26 Oct 2021</td>
                                    <td>Some reason.....</td>
                                    <td className="attachment">Some.png</td>
                                    <td className="status"><span>Approved</span></td>

                                </tr>
                                <tr className="row-first-child">
                                    <th scope="row">20 Oct 2021</th>
                                    <td>Vacation</td>
                                    <td>20 Oct 2021 - 26 Oct 2021</td>
                                    <td>Some reason.....</td>
                                    <td className="attachment">Some.png</td>
                                    <td className="status"><span>Approved</span></td>

                                </tr>
                                <tr className="row-first-child">
                                    <th scope="row">20 Oct 2021</th>
                                    <td>Vacation</td>
                                    <td>20 Oct 2021 - 26 Oct 2021</td>
                                    <td>Some reason.....</td>
                                    <td className="attachment">Some.png</td>
                                    <td className="status"><span>Approved</span></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default leaveHistory
