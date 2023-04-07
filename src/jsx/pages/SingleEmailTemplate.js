import React, { useState } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Editor } from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import slugify from "slugify";

const SingleEmailTemplate = () => {
  const [disabledSlugInput, setDisabledSlugInput] = useState(true);
  const methods = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  const updateEmailTemplateSlug = (value) => {
    methods.setValue("slug", `${slugify(value).toLocaleLowerCase()}`);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2>New Email Template</h2>
        <Link to="/email-templates">
          <Button variant="transparent">Cancel</Button>
        </Link>
      </div>
      <div className="w-100 mt-5 card">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="card-body">
            <div className="row">
              <div className="col-8 w-100">
                <div className="form-group mt-3">
                  <h3>Template Title</h3>
                  <input
                    type="text"
                    className="form-control input-default px-2"
                    placeholder="Enter first name"
                    defaultValue=""
                    {...methods.register("title")}
                    onChange={(e) => updateEmailTemplateSlug(e.target.value)}
                  />
                </div>
                <h5>Sale slug</h5>
                <div className="form-group mt-3 slug-field">
                  <input
                    type="text"
                    defaultValue={"https://theposh.agency/"}
                    className="form-control input-default px-2 mb-3 slug-field__input"
                    placeholder="Enter sale slug"
                    {...methods.register("slug")}
                    disabled={disabledSlugInput}
                  />
                  <Button
                    className="slug-field__button mb-3"
                    onClick={() => setDisabledSlugInput(!disabledSlugInput)}
                  >
                    Edit
                  </Button>
                </div>
                <div className="mt-3 form-group">
                  <h3 className="mb-3">Message</h3>
                  <Controller
                    name="info"
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
              <div className="col-4 w-100"></div>
            </div>
            <div className="row justify-content-center mt-5">
              <Button variant="primary" type="submit">
                Create Email Template
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default SingleEmailTemplate;
