import AddTask from "../ui/AddTask/AddTask";
import { connect } from "react-redux";
import { addNote } from "../../actions";
import { bindActionCreators } from 'redux';
const mapStateToProps = (state, props) => ({
  task: props.task
});

function mapDispatchToProps(dispatch) {
    return {

        AddNote: bindActionCreators(addNote, dispatch)
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTask);
