import React, { useEffect, useState } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Editor } from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ProductSelector from "../components/ProductSelector";

import noImg from "../../images/no-image.jpg";

const SingleSale = () => {
  const [previewImage, setPreviewImage] = useState("");
  const methods = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  const addedImage = methods.watch(`banner`);

  // useEffect for handling section image preview
  useEffect(() => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };

    if (addedImage) {
      reader.readAsDataURL(addedImage[0]);
    }
  }, [methods, addedImage]);

  const removeBanner = () => {
    methods.setValue("banner", "");
    setPreviewImage("");
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2>New Sale</h2>
        <Link to="/sales">
          <Button variant="transparent">Cancel</Button>
        </Link>
      </div>
      <div className="w-100 mt-5 card">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="card-body">
            <div className="row">
              <div className="col-8 w-100">
                <div className="form-group mt-3">
                  <h3>Sale Title</h3>
                  <input
                    type="text"
                    className="form-control input-default px-2"
                    placeholder="Enter first name"
                    defaultValue=""
                    {...methods.register("title")}
                  />
                </div>
                <div className="mt-3 form-group">
                  <h3 className="mb-3">Coupon info</h3>
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
                <ProductSelector
                  name={"saleProducts"}
                  title={"Sale products"}
                />
              </div>
              <div className="col-4 w-100">
                <div className="form-group mt-3">
                  <h3 className="">Type of discount</h3>
                  <select
                    {...methods.register("type")}
                    className="form-control form-control-lg"
                    id="inlineFormCustomSelect"
                    defaultValue={"precentage"}
                  >
                    <option value="precentage">Precentage</option>
                    <option value="cash">Cash</option>
                    <option value="delivery">Delivery</option>
                  </select>
                </div>
                <div className="form-group mt-3">
                  <h3>Parameter (% or cash)</h3>
                  <input
                    type="text"
                    className="form-control input-default px-2"
                    placeholder="Enter first name"
                    defaultValue=""
                    {...methods.register("title")}
                  />
                </div>
                <div className="form-group mt-3">
                  <h3>Start Date</h3>
                  <Controller
                    control={methods.control}
                    name="startDate"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          autoOk
                          clearable
                          format="dd/MM/yyyy"
                          disableToolbar
                          value={value}
                          onChange={onChange}
                          onBlur={onBlur}
                          inputRef={ref}
                        />
                      </MuiPickersUtilsProvider>
                    )}
                  />
                </div>
                <div className="form-group mt-3">
                  <h3>End Date</h3>
                  <Controller
                    control={methods.control}
                    name="endDate"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          autoOk
                          clearable
                          format="dd/MM/yyyy"
                          disableToolbar
                          value={value}
                          onChange={onChange}
                          onBlur={onBlur}
                          inputRef={ref}
                        />
                      </MuiPickersUtilsProvider>
                    )}
                  />
                </div>
                <div className="custom-control custom-checkbox checkbox-success check-lg">
                  <input
                    type="checkbox"
                    {...methods.register("visibleOnFrontEnd")}
                    className="custom-control-input"
                    id={`menu-item-used-with-other-discounts`}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={`menu-item-used-with-other-discounts`}
                  >
                    <p className="ml-2">Visible on Front End</p>
                  </label>
                </div>
                <div className="form-group mt-3 d-flex flex-column">
                  <h4 className="mb-3">Banner</h4>
                  <label
                    htmlFor="banner-image"
                    className="mb-0 position-relative"
                    role="button"
                  >
                    <Button
                      variant="outline-danger"
                      className="btn-rounded btn-xxs badge-circle position-absolute ml-2 mt-2"
                      onClick={removeBanner}
                    >
                      X
                    </Button>
                    <img
                      src={previewImage || noImg}
                      alt=""
                      className="img-fluid rounded object-fit-cover"
                      height={200}
                      width={300}
                      style={{ objectFit: "cover" }}
                    />
                    <input
                      type="file"
                      accept="image/jpeg, image/png"
                      id="banner-image"
                      {...methods.register(`banner`)}
                      hidden
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <Button variant="primary" type="submit">
                Create sale
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default SingleSale;
