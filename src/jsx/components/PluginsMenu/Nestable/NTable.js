import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Nestable from "react-nestable";
import { connect } from "react-redux";
import { editMenuItem } from "../../../../store/actions/MenuItemsActions";

// const items = [
//   { id: 0, text: "Item 1" },
//   {
//     id: 1,
//     text: "Item 2",
//     children: [
//       { id: 2, text: "Item 3" },
//       { id: 3, text: "Item 4" },
//       {
//         id: 4,
//         text: "Item 5",
//         children: [
//           { id: 5, text: "Item 6" },
//           { id: 6, text: "Item 7" },
//           { id: 7, text: "Item 8" },
//         ],
//       },
//       { id: 8, text: "Item 9" },
//       { id: 9, text: "Item 10" },
//     ],
//   },
// ];

class NTable extends Component {
  state = {
    example: 1,
    defaultCollapsed: false,
  };

  collapse = (collapseCase) => {
    if (this.refNestable) {
      switch (collapseCase) {
        case 0:
          this.refNestable.collapse("NONE");
          break;
        case 1:
          this.refNestable.collapse("ALL");
          break;
        case 2:
          this.refNestable.collapse([1]);
          break;
        default:
          this.refNestable.collapse("NONE");
      }
    }
  };

  renderItem = ({ item, collapseIcon, handler }) => {
    return (
      <div className="d-flex justify-content-between align-items-center">
        <div>
          {handler}
          {collapseIcon}
          {item.title}
        </div>
        <div>
          <Button
            className="btn btn-info shadow btn-xs sharp mr-1"
            onClick={() => this.props.dispatch(editMenuItem(item))}
          >
            <i className="fa fa-pencil"></i>
          </Button>
          <Button className="btn btn-danger shadow btn-xs sharp mr-1">
            <i className="fa fa-trash"></i>
          </Button>
        </div>
      </div>
    );
  };

  render() {
    const { defaultCollapsed } = this.state;

    return (
      <div>
        <Nestable
          items={this.props.items}
          collapsed={defaultCollapsed}
          renderItem={this.renderItem}
          ref={(el) => (this.refNestable = el)}
          maxDepth={3}
          onChange={(items) => console.log(items)}
        />
      </div>
    );
  }
}

export default connect()(NTable);
