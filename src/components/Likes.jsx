import { connect } from "react-redux";

const Likes = (props) => {
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
      <button onClick={props.onDecrementLikes}>Dislike</button>
    </div>
  );
};

function mapStateToProps(state) {
  console.log("mapStateTOProps >>", state);
  const { likesReducer } = state
  return {
    // likes: 'state.likes',
    likes: likesReducer.likes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => {
      console.log("click");
      const action = { type: "INCREMENT_LIKES" };
      dispatch(action);
    },
    onDecrementLikes: () => {
      console.log("click");
      const action = { type: "DECREMENT_LIKES" };
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
