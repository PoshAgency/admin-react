import React from "react";
import { Card, Nav, Tab } from "react-bootstrap";
import OrderInfo from "../components/OrderInfo";
import OrderProducts from "../components/OrderProducts";
import OrderAddress from "../components/OrderAddress";
import OrderTimeline from "../components/OrderTimeline";
import OrderProfile from "../components/OrderProfile";
import { useSelector } from "react-redux";

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
    </div>
  );
};

export default SingleOrder;
