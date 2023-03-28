import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const SingleCustomer = () => {
  const methods = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2>New Customer</h2>
        <Link to="/customers">
          <Button variant="transparent">Cancel</Button>
        </Link>
      </div>
      <div className="w-100 mt-5 card">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="card-body">
            <div className="w-100">
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
              <div className="row">
                <div className="col">
                  <div className="form-group mt-3">
                    <h3>Email</h3>
                    <input
                      type="text"
                      className="form-control input-default px-2"
                      placeholder="Enter email"
                      defaultValue=""
                      {...methods.register("email")}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group mt-3">
                    <h3>Phone</h3>
                    <input
                      type="text"
                      defaultValue={""}
                      className="form-control input-default px-2"
                      placeholder="Enter phone"
                      {...methods.register("phone")}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group mt-3">
                    <h3>Company</h3>
                    <input
                      type="text"
                      className="form-control input-default px-2"
                      placeholder="Enter coompany name"
                      defaultValue=""
                      {...methods.register("company")}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group mt-3">
                    <h3>Tax ID</h3>
                    <input
                      type="text"
                      defaultValue={""}
                      className="form-control input-default px-2"
                      placeholder="Enter tax ID"
                      {...methods.register("taxID")}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group mt-3">
                    <h3>Country</h3>
                    <input
                      type="text"
                      className="form-control input-default px-2"
                      placeholder="Enter country"
                      defaultValue=""
                      {...methods.register("country")}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group mt-3">
                    <h3>City</h3>
                    <input
                      type="text"
                      defaultValue={""}
                      className="form-control input-default px-2"
                      placeholder="Enter city"
                      {...methods.register("city")}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <div className="row">
                  <div className="col">
                    <div className="form-group mt-3">
                      <h3>Address</h3>
                      <input
                        type="text"
                        className="form-control input-default px-2"
                        placeholder="Enter address"
                        defaultValue=""
                        {...methods.register("address")}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group mt-3">
                      <h3>Postal code</h3>
                      <input
                        type="text"
                        defaultValue={""}
                        className="form-control input-default px-2"
                        placeholder="Enter postal code"
                        {...methods.register("postalCode")}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <div className="row">
                  <div className="col">
                    <div className="form-group mt-3">
                      <h3 className="">Password</h3>
                      <input
                        {...methods.register("password")}
                        type="password"
                        className="form-control input-default px-2"
                        placeholder="Enter team member's position"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group mt-3">
                      <h3 className="">Confirm password</h3>
                      <input
                        {...methods.register("confirmPassword")}
                        type="password"
                        className="form-control input-default px-2"
                        placeholder="Enter team member's position"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <Button variant="primary" type="submit">
                Create user
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

export default SingleCustomer;
