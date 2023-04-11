import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

const NewsletterModal = ({ openModal, setOpenModal }) => {
  const { register, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal className="fade" show={openModal} onHide={() => setOpenModal(false)}>
      <Modal.Header>
        <Modal.Title>Newsletter contact</Modal.Title>
        <Button
          variant=""
          className="close"
          onClick={() => setOpenModal(false)}
        >
          <span>&times;</span>
        </Button>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="row">
            <div className="col">
              <div className="form-group mt-3">
                <h3>First Name</h3>
                <input
                  type="text"
                  className="form-control input-default px-2"
                  placeholder="Enter first name"
                  defaultValue=""
                  {...register("firstName")}
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
                  placeholder="Enter last name"
                  {...register("lastName")}
                />
              </div>
            </div>
          </div>
          <div className="form-group mt-3">
            <h3 className="">Email</h3>
            <input
              {...register("email")}
              type="email"
              className="form-control input-default px-2"
              placeholder="Enter contact email"
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setOpenModal(false)} variant="danger light">
          Close
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewsletterModal;
