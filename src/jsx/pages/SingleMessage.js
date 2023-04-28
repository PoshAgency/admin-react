import React, { useEffect, useState } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Editor } from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import slugify from "slugify";
import SEOFields from "../components/SEOFields";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedMessage } from "../../store/actions/MessagesActions";

const SingleMessage = () => {
  const dispatch = useDispatch();
  const values = useSelector((state) => state.messages.selectedMessage);
  const [disabledSlugInput, setDisabledSlugInput] = useState(true);

  const methods = useForm({
    defaultValues: {
      title: "",
      slug: "",
      message: "",
      buttonLink: "",
      buttonText: "",
      template: "thank-you",
    },
    values,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const updateMessageSlug = (value) => {
    methods.setValue("slug", `${slugify(value).toLocaleLowerCase()}`);
  };

  useEffect(() => {
    return () => dispatch(removeSelectedMessage());
  }, [dispatch]);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2>New Message</h2>
        <Link to="/messages">
          <Button variant="transparent">Cancel</Button>
        </Link>
      </div>
      <div className="w-100 mt-5 card">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="card-body">
            <div className="row">
              <div className="col-8 w-100">
                <div className="form-group mt-3">
                  <h3>Message Title</h3>
                  <input
                    type="text"
                    className="form-control input-default px-2"
                    placeholder="Enter message title"
                    {...methods.register("title")}
                    onChange={(e) => updateMessageSlug(e.target.value)}
                  />
                </div>
                <h5>Message slug</h5>
                <div className="form-group mt-3 slug-field">
                  <input
                    type="text"
                    className="form-control input-default px-2 mb-3 slug-field__input"
                    placeholder="Message slug"
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
                <div className="form-group mt-3">
                  <h3>Button text</h3>
                  <input
                    type="text"
                    className="form-control input-default px-2"
                    placeholder="Enter button text"
                    {...methods.register("buttonText")}
                  />
                </div>
                <div className="form-group mt-3">
                  <h3>Button link</h3>
                  <input
                    type="text"
                    className="form-control input-default px-2"
                    placeholder="Enter button link"
                    {...methods.register("buttonLink")}
                  />
                </div>
                <div className="mt-3 form-group">
                  <h3 className="mb-3">Message</h3>
                  <Controller
                    name="message"
                    control={methods.control}
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
              <div className="col-4 w-100 h-auto">
                <div className="form-group mt-3">
                  <h3 className="">Message template</h3>
                  <select
                    {...methods.register("template")}
                    className="form-control form-control-lg"
                    id="inlineFormCustomSelect"
                  >
                    <option value="thank-you">Thank you</option>
                    <option value="error">Error</option>
                    <option value="warning">Warning</option>
                    <option value="success">Success</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <Button variant="primary" type="submit">
                Create Message
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default SingleMessage;
