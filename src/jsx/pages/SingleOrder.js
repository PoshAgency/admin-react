import React from "react";
import { Accordion, Button, Card, Nav, Tab } from "react-bootstrap";
import OrderInfo from "../components/OrderInfo";
import OrderProducts from "../components/OrderProducts";
import OrderAddress from "../components/OrderAddress";
import OrderTimeline from "../components/OrderTimeline";
import OrderProfile from "../components/OrderProfile";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const componentSwitch = (param) => {
  switch (param) {
    case "info":
      return <OrderInfo />;
    case "products":
      return <OrderProducts />;
    case "address":
      return <OrderAddress />;
    case "timeline":
      return <OrderTimeline />;
    case "profile":
      return <OrderProfile />;
    default:
      return null;
  }
};

const tabData = [
  {
    name: "Info",
    icon: "info",
  },
  {
    name: "Products",
    icon: "shopping-basket",
  },
  {
    name: "Address",
    icon: "address-card",
  },
  {
    name: "Timeline",
    icon: "calendar",
  },
  {
    name: "Profile",
    icon: "user",
  },
];

const SingleOrder = () => {
  const { selectedOrder } = useSelector((state) => state.orders);
  const methods = useForm({ defaultValues: { id: selectedOrder.id } });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="row">
      <div className="col-8">
        <Card>
          <Card.Header>
            <Card.Title>Order ID: {selectedOrder?.id}</Card.Title>
          </Card.Header>
          <Card.Body>
            {/* <!-- Nav tabs --> */}
            <div className="custom-tab-1">
              <Tab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
                <Nav as="ul" className="nav-tabs">
                  {tabData.map((data, i) => (
                    <Nav.Item as="li" key={i}>
                      <Nav.Link eventKey={data.name.toLowerCase()}>
                        <i className={`la la-${data.icon} mr-2`} />
                        {data.name}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
                <Tab.Content className="pt-4">
                  {tabData.map((data, i) => (
                    <Tab.Pane eventKey={data.name.toLowerCase()} key={i}>
                      {componentSwitch(data.name.toLowerCase())}
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Tab.Container>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="col-4">
        <Card className="h-auto">
          <Card.Body>
            <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit" className="btn-sm w-100">
                Preview confiramtion
              </Button>
              <Button
                variant="primary"
                type="submit"
                className="btn-sm w-100 ml-3"
              >
                Preview print
              </Button>
            </div>
            <hr />
            <Button variant="primary" type="submit" className="btn-sm w-100">
              Invoice PDF
            </Button>
            <hr />
            <div>
              <Accordion className="accordion accordion-rounded-stylish accordion-bordered container mt-3 ml-0 ">
                <div className="accordion__item mb-0">
                  <Accordion.Toggle
                    as={"div"}
                    eventKey="0"
                    className={`accordion__header accordion__header--primary d-flex justify-content-between align-items-center p-0 pb-2`}
                  >
                    <p className="mb-0">Change order status</p>
                    <i className={`la la-angle-down mr-2`} />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0" className="accordion__body">
                    {/* <p>Status description</p> */}
                    <ul>
                      <li className="mb-1 d-flex">
                        <span style={{ width: "30%" }}>
                          <b>Received</b>
                        </span>
                        <span>
                          Customer created order (auto email with order
                          confirmation)
                        </span>
                      </li>
                      <li className="mb-1 d-flex">
                        <span style={{ width: "30%" }}>
                          <b>Accepted</b>
                        </span>
                        <span>Checking if order can be sent</span>
                      </li>
                      <li className="mb-1 d-flex">
                        <span
                          className="d-inline-block"
                          style={{ width: "30%" }}
                        >
                          <b>Rejected</b>
                        </span>
                        <span>
                          Package delivered service courier (auto email)
                        </span>
                      </li>
                      <li className="mb-1 d-flex">
                        <span
                          className="d-inline-block"
                          style={{ width: "30%" }}
                        >
                          <b>Sent</b>
                        </span>
                        <span>
                          Package has returned, customer didn't received package
                          (auto email)
                        </span>
                      </li>
                      <li className="mb-1 d-flex">
                        <span
                          className="d-inline-block"
                          style={{ width: "30%" }}
                        >
                          <b>Changed</b>
                        </span>
                        <span>Order is cancelled (auto email)</span>
                      </li>
                    </ul>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </div>
            <div>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="form-group mt-3">
                  <select
                    {...methods.register("status")}
                    className="form-control form-control-lg"
                    id="inlineFormCustomSelect"
                    defaultValue={"received"}
                  >
                    <option value="received">Received</option>
                    <option value="accepted">Accepted</option>
                    <option value="rejected">Rejected</option>
                    <option value="sent">Sent</option>
                    <option value="changed">Changed</option>
                  </select>
                </div>
                <Button
                  variant="primary"
                  type="submit"
                  className="btn-sm w-100"
                >
                  Save
                </Button>
              </form>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SingleOrder;
