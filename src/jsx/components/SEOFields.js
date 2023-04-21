import React from "react";

import googleHeader from "../../images/google-header.jpg";

const SEOFields = ({ methods }) => {
  const title = methods.watch("seoTitle");
  const description = methods.watch("seoDescription");
  const slug = methods.watch("slug");

  return (
    <div className="overflow-hidden mt-5">
      <h3>SEO</h3>
      <img src={googleHeader} alt="" className="object-fit-cover" />
      <div className="" style={{ marginLeft: "10rem", marginRight: "2rem" }}>
        <h5>{!title ? "SEO Title" : title}</h5>
        <h5>{`theposh.agency/${slug ? slug : ""}`}</h5>
        <h5>{!description ? "Fill in the description field." : description}</h5>
        <div className="form-group mt-3">
          <h5>Title</h5>
          <input
            type="text"
            className="form-control input-default px-2"
            placeholder="Enter button link"
            defaultValue=""
            {...methods.register("seoTitle")}
          />
        </div>
        <div className="form-group mt-3">
          <h5>Keywords</h5>
          <input
            type="text"
            className="form-control input-default px-2"
            placeholder="Enter button link"
            defaultValue=""
            {...methods.register("seoKeywords")}
          />
        </div>
        <div className="form-group mt-3">
          <h5>Description</h5>
          <textarea
            className="form-control input-default px-2"
            placeholder="Enter SEO description"
            defaultValue=""
            {...methods.register("seoDescription")}
          />
        </div>
      </div>
    </div>
  );
};

export default SEOFields;
