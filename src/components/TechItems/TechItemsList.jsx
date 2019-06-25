import React, { Component } from "react";
import { connect } from "react-redux";

import { getTechItems } from "../../actions/tech";

import TechItem from "./TechItem";

class TechItemsList extends Component {
  componentDidMount() {
    this.props.getTechItems();
  }

  render() {
    console.log(this.props);
    const { techItems } = this.props.tech;
    return (
      <div className="card-deck">
        {techItems.map(techItem => (
          <TechItem key={techItem.id} item={techItem} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(
  mapStateToProps,
  { getTechItems }
)(TechItemsList);
