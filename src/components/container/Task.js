import Task from "../ui/Task/Task";
import { connect } from "react-redux";
import { markNote, removeNote, editNote } from "../../actions";
import { bindActionCreators } from 'redux';
const mapStateToProps = (state, props) => ({
  task: props.task
});

function mapDispatchToProps(dispatch) {
    return {
        DeleteNote: bindActionCreators(removeNote, dispatch),
        MarkNote: bindActionCreators(markNote, dispatch),
        UpdateNote: bindActionCreators(editNote, dispatch)
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
