import React from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Editor } from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import CouponProductSelector from "../components/CouponProductSelector";

const SingleCoupon = () => {
  const methods = useForm({});

  const applyToCategory = methods.watch("applyToCategory");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2>New Coupon</h2>
        <Link to="/coupons">
          <Button variant="transparent">Cancel</Button>
        </Link>
      </div>
      <div className="w-100 mt-5 card">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="card-body">
            <div className="row">
              <div className="col-8 w-100">
                <div className="form-group mt-3">
                  <h3>Coupon Title</h3>
                  <input
                    type="text"
                    className="form-control input-default px-2"
                    placeholder="Enter first name"
                    defaultValue=""
                    {...methods.register("title")}
                  />
                </div>

                <div className="form-group mt-3">
                  <h3 className="">Coupon code</h3>
                  <input
                    {...methods.register("code")}
                    type="text"
                    className="form-control input-default px-2"
                    placeholder="Enter team member's position"
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
                    {...methods.register("useWithExistingDiscounts")}
                    className="custom-control-input"
                    id={`menu-item-used-with-other-discounts`}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={`menu-item-used-with-other-discounts`}
                  >
                    <p className="ml-2">Can be used with existing discounts</p>
                  </label>
                </div>
                <div className="custom-control custom-checkbox checkbox-success check-lg">
                  <input
                    type="checkbox"
                    {...methods.register("oneTimePurchaseOnly")}
                    className="custom-control-input"
                    id={`menu-item-one-time-purchase`}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={`menu-item-one-time-purchase`}
                  >
                    <p className="ml-2">One time purchase only</p>
                  </label>
                </div>
                <div className="form-group mt-3">
                  <h3 className="">Apply to category</h3>
                  <select
                    {...methods.register("applyToCategory")}
                    className="form-control form-control-lg"
                    id="inlineFormCustomSelect"
                    defaultValue={""}
                  >
                    <option value="">Select category</option>
                    <option value="shoes">Shoes</option>
                    <option value="bags">Bags</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>
                <div className="form-group mt-3">
                  <CouponProductSelector applyToCategory={applyToCategory} />
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

export default SingleCoupon;
