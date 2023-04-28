import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import noImg from "../../images/no-image.jpg";

const Settings = () => {
  const [previewImage, setPreviewImage] = useState(noImg);

  const methods = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  const addedImage = methods.watch(`logo`);

  // useEffect for handling section image preview
  useEffect(() => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };

    if (addedImage?.length) {
      reader.readAsDataURL(addedImage[0]);
    }
  }, [addedImage, methods]);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Settings</h2>
        {/* <Link to="/team">
          <Button variant="transparent">Cancel</Button>
        </Link> */}
      </div>
      <div className="w-100 mt-5 card">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="card-body">
            <div className="row d-flex justify-content-between">
              <div className="col-8 w-100">
                <div className="form-group mt-3">
                  <h3 className="">Site name</h3>
                  <input
                    {...methods.register("siteName")}
                    type="text"
                    className="form-control input-default px-2"
                    placeholder="Enter site name"
                  />
                </div>
                <div className="form-group mt-3">
                  <h3 className="">Global email</h3>
                  <input
                    {...methods.register("globalEmail")}
                    type="text"
                    className="form-control input-default px-2"
                    placeholder="Enter global email"
                  />
                </div>
                <div className="socials mt-4">
                  <h3 className="pl-0 col-6">Social media</h3>
                  <div className="row">
                    <div className="col">
                      <div className="form-group mt-3">
                        <h5>LinkedIn</h5>
                        <input
                          type="text"
                          className="form-control input-default px-2"
                          placeholder="Global linkedin"
                          defaultValue=""
                          {...methods.register("linkedin")}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group mt-3">
                        <h5>Instagram</h5>
                        <input
                          type="text"
                          className="form-control input-default px-2"
                          placeholder="Global instagram"
                          defaultValue=""
                          {...methods.register("instagram")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group mt-3">
                        <h5>YouTube</h5>
                        <input
                          type="text"
                          className="form-control input-default px-2"
                          placeholder="Global Youtube"
                          defaultValue=""
                          {...methods.register("youtube")}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group mt-3">
                        <h5>Facebook</h5>
                        <input
                          type="text"
                          className="form-control input-default px-2"
                          placeholder="Global facebook"
                          defaultValue=""
                          {...methods.register("facebook")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group mt-3">
                        <h5>Twitter</h5>
                        <input
                          type="text"
                          className="form-control input-default px-2"
                          placeholder="Global twitter"
                          defaultValue=""
                          {...methods.register("twitter")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="mt-3 d-flex flex-column justify-content-center align-items-center single-image-uploader">
                  <img
                    src={previewImage}
                    alt=""
                    className="single-image-uploader__image"
                  />
                  <label
                    as="button"
                    htmlFor="add-gallery-images"
                    className="btn btn-primary btn-sm bottom-0 mb-0 mt-3"
                  >
                    <span className="">Add Logo</span>
                    <input
                      type="file"
                      accept="image/jpeg"
                      id="add-gallery-images"
                      hidden
                      {...methods.register(`logo`)}
                    />
                  </label>
                </div>
                <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
                  <h3>Edit Menu</h3>
                  <div className="mt-2">
                    <Link to="settings/header">
                      <Button
                        variant="primary"
                        type="submit"
                        className="btn-sm mr-3"
                        to="settings/header"
                      >
                        Header
                      </Button>
                    </Link>
                    <Link to="settings/footer">
                      <Button
                        variant="primary"
                        type="submit"
                        className="btn-sm"
                      >
                        Footer
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center mt-5">
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default Settings;
