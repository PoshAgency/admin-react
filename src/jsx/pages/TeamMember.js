import React, { useEffect, useState } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Editor } from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import noImg from "../../images/no-image.jpg";

const TeamMember = () => {
  const [previewImage, setPreviewImage] = useState(noImg);

  const methods = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  const addedImage = methods.watch(`image`);

  // useEffect for handling section image preview
  useEffect(() => {
    console.log(addedImage);

    const reader = new FileReader();

    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };

    if (addedImage.length) {
      reader.readAsDataURL(addedImage[0]);
    }
  }, [addedImage, methods]);

  // useEffect for dynamically creating full name
  useEffect(() => {
    const firstName = methods.watch("firstName");
    const lastName = methods.watch("lastName");

    methods.setValue("fullName", firstName + " " + lastName);
  }, [methods]);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2>New Team Member</h2>
        <Link to="/team">
          <Button variant="transparent">Cancel</Button>
        </Link>
      </div>
      <div className="w-100 mt-5 card">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="card-body">
            <div className="row d-flex justify-content-between">
              <div className="col-8 w-100">
                <div className="row">
                  <div className="col">
                    <div className="form-group mt-3">
                      <h3>First Name</h3>
                      <input
                        type="text"
                        className="form-control input-default px-2"
                        placeholder="Enter first name"
                        defaultValue=""
                        {...methods.register("firstName")}
                        onChange={(e) => {}}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group mt-3">
                      <h3>Last Name</h3>
                      <input
                        type="text"
                        defaultValue={""}
                        className="form-control input-default px-2"
                        placeholder="Enter page title"
                        {...methods.register("lastName")}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <h3 className="">Position</h3>
                  <input
                    {...methods.register("position")}
                    type="text"
                    className="form-control input-default px-2"
                    placeholder="Enter team member's position"
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
                          placeholder="Enter first name"
                          defaultValue=""
                          {...methods.register("linkedin")}
                          onChange={(e) => {}}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group mt-3">
                        <h5>Instagram</h5>
                        <input
                          type="text"
                          className="form-control input-default px-2"
                          placeholder="Enter first name"
                          defaultValue=""
                          {...methods.register("instagram")}
                          onChange={(e) => {}}
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
                          placeholder="YouTube link"
                          defaultValue=""
                          {...methods.register("youtube")}
                          onChange={(e) => {}}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group mt-3">
                        <h5>Facebook</h5>
                        <input
                          type="text"
                          className="form-control input-default px-2"
                          placeholder="Facebook link"
                          defaultValue=""
                          {...methods.register("facebook")}
                          onChange={(e) => {}}
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
                          placeholder="Twitter link"
                          defaultValue=""
                          {...methods.register("twitter")}
                          onChange={(e) => {}}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 form-group">
                  <h3 className="mb-3">Team member bio</h3>
                  <Controller
                    name="pageContent"
                    control={methods.control}
                    defaultValue=""
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <CKEditor
                        editor={Editor}
                        data={value}
                        onReady={(editor) => {
                          // console.log("ready");
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          onChange(data);
                        }}
                        onBlur={(event, editor) => {
                          // console.log("Blur.", editor);
                          onBlur();
                        }}
                        onFocus={(event, editor) => {
                          // console.log("Focus.", editor);
                        }}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="mt-3 d-flex flex-column juctify-content-center align-items-center single-image-uploader">
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
                    <span className="">Add photo</span>
                    <input
                      type="file"
                      accept="image/jpeg"
                      id="add-gallery-images"
                      hidden
                      {...methods.register(`image`)}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="row justify-content-center mt-5">
              <Button variant="primary" type="submit">
                Publish
              </Button>
              <Button className="ml-3" variant="light">
                Save as draft
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default TeamMember;
