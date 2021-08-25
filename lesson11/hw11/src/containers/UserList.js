import { connect } from 'react-redux';
import List from '../components/List';
// import { ShowUsers } from '../action';

function mapStateToProps(state) {
  const { user } = state;
  return { user: user };
}

export default connect(mapStateToProps, null)(List);
