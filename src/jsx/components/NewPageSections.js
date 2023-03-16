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
} from "@dnd-kit/sortable";

import "./NewPageSections.css";

import NewPageSection from "./NewPageSection";
import { useFieldArray } from "react-hook-form";

const NewPageSections = ({ control }) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "sections",
  });

  const [activePanels, setActivePanels] = useState([]);

  const addNewSection = () => {
    append({
      title: `New Section ${Math.round(Math.random() * 10000)}`,
      selectedColor: "#ffffff",
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

    const activeIndex = fields.findIndex((field) => field.id === active.id);
    const overIndex = fields.findIndex((field) => field.id === over.id);

    move(activeIndex, overIndex);
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
                  key={field.id}
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
