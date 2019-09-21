import TaskList from "../ui/TaskList/TaskList";
import { connect } from "react-redux";
import { markNote, gettasks } from "../../actions";
import { bindActionCreators } from 'redux';
const mapStateToProps = (state, props) => ({
  tasks: state.tasks
});


function mapDispatchToProps(dispatch) {
    return {
        getData: bindActionCreators(gettasks, dispatch),
        MarkNote: bindActionCreators(markNote, dispatch)
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
