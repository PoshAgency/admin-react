import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const OrderProfile = () => {
  const { selectedOrder } = useSelector((state) => state.orders);
  const methods = useForm({ defaultValues: { ...selectedOrder.clientInfo } });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="px-4">
      <h5>Client info</h5>
      <hr />
      <div className="container m-0 p-0">
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col">
              <div className="form-group mt-3">
                <h5>Full name</h5>
                <input
                  type="text"
                  className="form-control input-default px-2"
                  placeholder="Enter first and last name"
                  defaultValue=""
                  {...methods.register("fullName")}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group mt-3">
                <h5>Email</h5>
                <input
                  type="email"
                  className="form-control input-default px-2"
                  placeholder="Enter email"
                  defaultValue=""
                  {...methods.register("email")}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group mt-3">
                <h5>Phone</h5>
                <input
                  type="text"
                  className="form-control input-default px-2"
                  placeholder="Enter phone"
                  defaultValue=""
                  {...methods.register("phone")}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group mt-3">
                <h5>Address</h5>
                <input
                  type="text"
                  className="form-control input-default px-2"
                  placeholder="Enter address"
                  defaultValue=""
                  {...methods.register("address")}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group mt-3">
                <h5>City</h5>
                <input
                  type="text"
                  className="form-control input-default px-2"
                  placeholder="Enter city"
                  defaultValue=""
                  {...methods.register("city")}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group mt-3">
                <h5>Zip Code</h5>
                <input
                  type="text"
                  className="form-control input-default px-2"
                  placeholder="Enter zip code"
                  defaultValue=""
                  {...methods.register("zipCode")}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-group mt-3">
                <h5>Country</h5>
                <input
                  type="text"
                  className="form-control input-default px-2"
                  placeholder="Enter country"
                  defaultValue=""
                  {...methods.register("country")}
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderProfile;
