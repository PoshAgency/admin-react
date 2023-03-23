import React, { useState } from "react";
import slugify from "slugify";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Editor } from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import NewPageSections from "../components/NewPageSections";
import PageImagesUploader from "../components/PageImagesUploader";
import NewPageGalleries from "../components/NewPageGalleries";

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import "./NewPage.css";

const SinglePage = () => {
  const [disabledSlutInput, setDisabledSlugInput] = useState(true);
  const methods = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  const updatePageSlug = (value) => {
    methods.setValue("pageSlug", `https://theposh.agency/${slugify(value)}`);
  };

  const updateSeoValues = (field, value) => {
    methods.setValue(field, value);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2>New Page</h2>
        <Link to="/pages">
          <Button variant="transparent">Cancel</Button>
        </Link>
      </div>
      <div className="w-100 mt-5 card">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="card-body">
            <div className="row d-flex justify-content-between">
              <div className="col-8 w-100">
                <h3>Page Title</h3>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control input-default px-2 mb-3"
                    placeholder="Enter page title"
                    defaultValue=""
                    {...methods.register("title")}
                    onChange={(e) => {
                      updateSeoValues("seoTitle", e.target.value);
                      updatePageSlug(e.target.value);
                    }}
                    onClick={() => setDisabledSlugInput(true)}
                  />
                </div>
                <h5>Page slug</h5>
                <div className="form-group mt-3 slug-field">
                  <input
                    type="text"
                    defaultValue={"https://theposh.agency/"}
                    className="form-control input-default px-2 mb-3 slug-field__input"
                    placeholder="Enter page title"
                    {...methods.register("pageSlug")}
                    disabled={disabledSlutInput}
                  />
                  <Button
                    className="slug-field__button mb-3"
                    onClick={() => setDisabledSlugInput(!disabledSlutInput)}
                  >
                    Edit
                  </Button>
                </div>
                <h3 className="mt-4">Hero Title</h3>
                <div className="form-group mt-3">
                  <input
                    {...methods.register("hero")}
                    type="text"
                    className="form-control input-default px-2 mb-3"
                    placeholder="Enter hero title"
                  />
                </div>
                <PageImagesUploader register={methods.register} />
                <h3 className="mt-4">
                  Description{" "}
                  <span className="small ml-2">(300 characters)</span>
                </h3>
                <div className="form-group">
                  <textarea
                    {...methods.register("description")}
                    onChange={(e) =>
                      updateSeoValues("seoDescription", e.target.value)
                    }
                    className="form-control mt-3"
                    rows="4"
                    placeholder="Enter description"
                    id="description"
                    maxLength="300"
                  ></textarea>
                </div>
              </div>
              <div className="col-4 w-100">
                <div>
                  <h3 className="mb-3">Date Published</h3>
                  <Controller
                    control={methods.control}
                    name="published"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          autoOk
                          clearable
                          format="dd/MM/yyyy"
                          disableFuture
                          value={value}
                          onChange={onChange}
                          onBlur={onBlur}
                          inputRef={ref}
                        />
                      </MuiPickersUtilsProvider>
                    )}
                  />
                </div>
                <div>
                  <h3 className="mb-3 mt-3">Template</h3>
                  <div className="form-group">
                    <select
                      className="form-control"
                      {...methods.register("template")}
                    >
                      <option value="">Select a template</option>
                      <option value="homepage">Homepage</option>
                      <option value="about-us">About Us</option>
                      <option value="careers">Carrers</option>
                      <option value="default-page">Default Page</option>
                      <option value="team">Team</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex flex-column mt-5">
              <div className="col">
                <h3 className="mb-3">Page content </h3>
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
            <div className="row mt-5">
              <NewPageGalleries />
            </div>
            <div className="row mt-5">
              <NewPageSections control={methods.control} />
            </div>
            <div className="row mt-5">
              <div className="col">
                <h3>SEO</h3>
                <div className="form-group mt-3 w-50 px-3">
                  <h5>Title</h5>
                  <input
                    {...methods.register("seoTitle")}
                    id="seo-title"
                    type="text"
                    className="form-control input-default px-3 mb-3"
                    placeholder="SEO Title"
                  />
                </div>
                <div className="form-group mt-3 w-75 px-3">
                  <h5>Description</h5>
                  <textarea
                    id="seo-description"
                    {...methods.register("seoDescription")}
                    rows={4}
                    className="form-control input-default px-3"
                    placeholder="Max 160 characters"
                  />
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

export default SinglePage;
