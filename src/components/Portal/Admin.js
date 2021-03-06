import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import TopBar from './TopBar';
// import Menu from './Menu';
import CreateStudent from '../Admin/create.student.component';
import StudentsList from '../Admin/list.students.component';
import CreateTask from '../Admin/create.student.task.component';
// import Student from './Student';
// import StudentTasks from '../Student/student.tasks.component';
import EditTask from '../Admin/edit.task.component';
import EditStudent from '../Admin/edit.student.component';
// import StudentForms from '../Student/student.forms.component';
import StudentPortal from '../Student/student.portal.component';
import CreateForm from '../Admin/create.student.form.component';
import CreateClass from '../Admin/create.student.class.component';
import EditForm from '../Admin/edit.form.component';
import EditClass from '../Admin/edit.class.component';
import CreateTAAssignment from '../Admin/create.student.taassignment.component';
import TAAssignmentList from '../Admin/list.taassignments.component';

class Admin extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Admin portal</h2>
          <div class="flex-container">
            <Link to='/admin'>
              <button className='button'>Portal</button>
            </Link>

            <Link to='/admin/taassignment'>
              <button className='button'>TA Assignment</button>
            </Link>

            <Link to='/admin/create/taassignment'>
              <button className='button'>Create TA Assignment</button>
            </Link>

            <Link to='/admin/create/student'>
              <button className='button'>Create Student</button>
            </Link>

            <Link to='/admin/create/task'>
              <button className='button'>Create Task</button>
            </Link>

            <Link to='/admin/create/form'>
              <button className='button'>Create Form</button>
            </Link>

            <Link to='/admin/create/class'>
              <button className='button'>Create Class</button>
            </Link>
          </div>
          {/*<StudentsList />*/}

          <Route path='/admin/' exact component={StudentsList} />
          <Route path='/admin/taassignment/' component={TAAssignmentList} />
          <Route
            path='/admin/create/taassignment'
            component={CreateTAAssignment}
          />
          <Route path='/admin/create/student' component={CreateStudent} />
          <Route path='/admin/create/task' component={CreateTask} />
          <Route path='/admin/create/form' component={CreateForm} />
          <Route path='/admin/create/class' component={CreateClass} />

          <Route path='/admin/student/:id/tasks' component={StudentPortal} />

          <Route path='/admin/students/edit/:id' component={EditStudent} />
          <Route path='/admin/tasks/edit/:id' component={EditTask} />
          <Route path='/admin/forms/edit/:id' component={EditForm} />
          <Route path='/admin/classes/edit/:id' component={EditClass} />

          {/*<Route path="/admin/student/tasks" component={CreateTask} />*/}
          {/*<Route path="/admin/edit/:id" component={EditTodo} />*/}
        </div>
      </Router>
    );
  }
}

export default Admin;
