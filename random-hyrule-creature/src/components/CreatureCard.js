import React from "react";
import { connect } from "react-redux";

const CreatureCard = (props) => {
  return (
    <div className="creature-div">
      <img src={props.creature.image} alt="random creature" />
      <h3>{props.creature.name} Info</h3>
      <p>{props.creature.description}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    creature: state.creature,
  };
};

export default connect(mapStateToProps, {})(CreatureCard);
