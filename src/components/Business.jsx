import React, { useState } from 'react';
import './Land.css';


const Business = () => {
    const [formData, setFormData] = useState({
        bugTitle: '',
        issueDescription: '',
        operatingSystem: '',
        browser: '',
        assignedTo: '',
        priority: '',
        screenshot: null,
        status: '',
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission logic here, like sending the data to an API
    };

    return (
        <div className='bg1'>
        <div className="bug-tracker-form">
            <h2>Business Detials - Submit Information!</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name *</label>
                    <input
                        type="text"
                        name="bugTitle"
                        value={formData.bugTitle}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label> Business Description *</label>
                    <textarea
                        name="issueDescription"
                        value={formData.issueDescription}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Business Type</label>
                    <select
                        name="operatingSystem"
                        value={formData.operatingSystem}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="Windows">Farm Business</option>
                        <option value="macOS">Rural Business</option>
                        <option value="Linux">Urban Business</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Lease*</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="browser"
                                value="Internet Explorer"
                                checked={formData.browser === 'Internet Explorer'}
                                onChange={handleChange}
                                required
                            />
                            6 months
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="browser"
                                value="Chrome"
                                checked={formData.browser === 'Chrome'}
                                onChange={handleChange}
                                required
                            />
                            1 year
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="browser"
                                value="Firefox"
                                checked={formData.browser === 'Firefox'}
                                onChange={handleChange}
                                required
                            />
                            2 year
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="browser"
                                value="Safari"
                                checked={formData.browser === 'Safari'}
                                onChange={handleChange}
                                required
                            />
                            3 years
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="browser"
                                value="Opera"
                                checked={formData.browser === 'Opera'}
                                onChange={handleChange}
                                required
                            />
                            5 years
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="browser"
                                value="Other"
                                checked={formData.browser === 'Other'}
                                onChange={handleChange}
                                required
                            />
                            10 years
                        </label>
                    </div>
                </div>
                <div>
                    <label>Business To *</label>
                    <select
                        name="assignedTo"
                        value={formData.assignedTo}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="Developer A">Industry</option>
                        <option value="Developer B">Farming</option>
                        <option value="Developer C">Building</option>
                    </select>
                </div>
                <div>
                    <label>Avialable *</label>
                    <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="Low">Immediate</option>
                        <option value="Medium">6 months</option>
                        <option value="High">1 year</option>
                    </select>
                </div>
                <div>
                    <label>Business Plan</label>
                    <input
                        type="file"
                        name="screenshot"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Status *</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="Open">Self</option>
                        <option value="In Progress">Patnership</option>
                        <option value="Closed">Community</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default Business;


