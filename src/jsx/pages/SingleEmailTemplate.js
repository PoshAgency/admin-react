import React, { useEffect, useState } from "react";
import {
  useForm,
  Controller,
  FormProvider,
  useFieldArray,
} from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Editor } from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import slugify from "slugify";
import TemplateVariable from "../components/TemplateVariable";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedEmailTemplate } from "../../store/actions/EmailTemplatesActions";

const SingleEmailTemplate = () => {
  const values = useSelector(
    (state) => state.emailTemplates.selectedEmailTemplate
  );
  const dispatch = useDispatch();
  const [disabledSlugInput, setDisabledSlugInput] = useState(true);
  const [variableFields, setVariableFields] = useState({
    title: "",
    variable: "",
  });
  const methods = useForm({
    defaultValues: { title: "", slug: "", message: "", variables: [] },
    values,
  });

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "variables",
  });

  useEffect(() => {
    return () => dispatch(removeSelectedEmailTemplate());
  }, [dispatch]);

  const onSubmit = (data) => {
    console.log(data);
  };

  const updateEmailTemplateSlug = (value) => {
    methods.setValue("slug", `${slugify(value).toLocaleLowerCase()}`);
  };

  const handleInputChange = (e) => {
    setVariableFields((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const createTemplateVariable = () => {
    append({
      variable: `{${variableFields.variable}}`,
      title: variableFields.title,
    });
  };

  const removeTemplateVariable = (index) => {
    remove(index);
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
                <h5>Template slug</h5>
                <div className="form-group mt-3 slug-field">
                  <input
                    type="text"
                    defaultValue={""}
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
                    name="message"
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
              <div className="col-4 w-100">
                <div className="form-group mt-3">
                  <h3>Field variable</h3>
                  <input
                    type="text"
                    className="form-control input-default px-2"
                    placeholder="Enter variable name"
                    name="variable"
                    value={variableFields.variable}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <h3>Field title</h3>
                  <input
                    type="text"
                    className="form-control input-default px-2"
                    placeholder="Enter variable title"
                    name="title"
                    value={variableFields.title}
                    onChange={handleInputChange}
                  />
                </div>
                <Button variant="primary" onClick={createTemplateVariable}>
                  Add Variable
                </Button>
                <div className="mt-3">
                  <h3>Template variables</h3>
                  {fields.map((field, index) => (
                    <TemplateVariable
                      field={field}
                      removeTemplateVariable={removeTemplateVariable}
                      index={index}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <Button variant="primary" type="submit">
                Create template
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default SingleEmailTemplate;
