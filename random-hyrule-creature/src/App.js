import "./App.css";
import CreatureCard from "./components/CreatureCard";

import { connect } from "react-redux";

import { getCreature } from "./actions";

function App(props) {
  return (
    <div className="App">
      <h1>Legend of Zelda: Breath of the Wild</h1>
      <button onClick={props.getCreature}>Random Creature</button>
      {props.loading && <h2>Loading...</h2>}
      {props.creature ? <CreatureCard /> : <p>Click for Hyrule creature</p>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    creature: state.creature,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCreature: () => dispatch(getCreature()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
