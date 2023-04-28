import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedContact } from "../../store/actions/NewsletterActions";

const NewsletterModal = ({ openModal, setOpenModal }) => {
  const dispatch = useDispatch();
  let { selectedContact } = useSelector((state) => {
    return state.newsletter;
  });

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { firstName: "", lastName: "", email: "" },
    values: selectedContact,
  });

  const onSubmit = (data) => {
    // clear form on submit
    // reset({ firstName: "", lastName: "", email: "" });
    console.log(data);
  };

  const handleRemoveSelectedContact = () => {
    dispatch(removeSelectedContact());
  };

  useEffect(() => {
    return () => {
      reset({ firstName: "", lastName: "", email: "" });
    };
  }, [openModal, dispatch, reset]);

  return (
    <Modal
      className="fade"
      show={openModal}
      onHide={() => {
        setOpenModal(false);
      }}
    >
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
                  {...register("firstName")}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group mt-3">
                <h3>Last Name</h3>
                <input
                  type="text"
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
        <Button
          onClick={() => {
            setOpenModal(false);
            handleRemoveSelectedContact();
          }}
          variant="danger light"
        >
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
