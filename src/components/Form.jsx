import React,{ useState } from 'react'


const Form = () => {

    const [formData, setFormData] = useState({
        jobTitle: "",
        jobPosition: "",
        category: "",
        companyDetails: "",
        package: "",
        location: "",
        jobDescription: "",
        image: null,
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleImageChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          image: e.target.files[0],
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission (e.g., send data to the server)
      };
    

  return (


   <>
   
   <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="jobTitle" className="form-label">
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              className="form-control"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="jobPosition" className="form-label">
              Job Position
            </label>
            <input
              type="text"
              id="jobPosition"
              name="jobPosition"
              className="form-control"
              value={formData.jobPosition}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="form-control"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="package" className="form-label">
              Package (LPA)
            </label>
            <input
              type="number"
              id="package"
              name="package"
              className="form-control"
              value={formData.package}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="form-control"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="companyDetails" className="form-label">
            Company Details
          </label>
          <textarea
            id="companyDetails"
            name="companyDetails"
            className="form-control"
            value={formData.companyDetails}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="jobDescription" className="form-label">
            Job Description
          </label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            className="form-control"
            value={formData.jobDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
   
   </>


  )
}

export default Form