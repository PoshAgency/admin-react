import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import "./NewPageSections.css";

import NewPageSection from "./NewPageSection";
import { useFieldArray } from "react-hook-form";

const NewPageSections = ({ control }) => {
  const [sections, setSections] = useState([]);
  const [activePanels, setActivePanels] = useState([]);

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "sections",
    }
  );

  // console.log(fields);

  const addNewSection = () => {
    // setSections((prevState) => [
    //   ...prevState,
    //   {
    //     id: Math.floor(Math.random() * 1000),
    //     title: `New Section ${Math.floor(Math.random() * 1000)}`,
    //     selectedColor: "#fff",
    //     imagePosition: "left",
    //     buttonText: "",
    //     buttonURL: "",
    //     description: "",
    //   },
    // ]);
    append({
      title: `New Section ${Math.floor(Math.random() * 1000)}`,
      selectedColor: "#fff",
      imagePosition: "left",
      buttonText: "",
      buttonURL: "",
      sectionDescription: "",
    });
  };

  const collapseAllSections = () => {
    setActivePanels([]);
  };

  const removeField = (event, fieldId) => {
    event.stopPropagation();
    // const filteredFields = fields.filter((field) => field.id !== sectionId);
    // setSections([...filteredSections]);
    remove(fieldId);
  };

  // DRAG N DROP FUNCTIONALITY
  // prevent firing drag and drop element before moving more than 8px
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  // handle droping dragged element
  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (active.id !== over.id) {
      setSections((prevState) => {
        const activeIndex = prevState
          .map((image) => image.id)
          .indexOf(active.id);
        const overIndex = prevState.map((image) => image.id).indexOf(over.id);

        return arrayMove(prevState, activeIndex, overIndex);
      });
    }
  };

  return (
    <div className="col">
      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex flex-column justify-content-center">
          <h3>Page sections</h3>
          <p>Please collapse all sections before changing order.</p>
        </div>
        <div>
          <Button
            variant="light"
            className="btn-sm mr-3"
            onClick={addNewSection}
          >
            Add section
          </Button>
          <Button
            variant="light"
            className="btn-sm"
            onClick={collapseAllSections}
          >
            Collapse all sections
          </Button>
        </div>
      </div>
      <div>
        {!fields.length ? (
          <h4 className="mt-4 pl-4">Section list is empty.</h4>
        ) : (
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            sensors={sensors}
          >
            <SortableContext
              items={fields}
              strategy={verticalListSortingStrategy}
              disabled={activePanels.length > 0}
            >
              {fields.map((field, index) => (
                <NewPageSection
                  key={index}
                  field={field}
                  index={index}
                  activePanels={activePanels}
                  setActivePanels={setActivePanels}
                  removeField={removeField}
                />
              ))}
            </SortableContext>
          </DndContext>
        )}
      </div>
    </div>
  );
};

export default NewPageSections;
