import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logos from '../images/logos.webp';
import logos2 from '../images/logos2.jpg';
import { connect } from 'react-redux';

const Home = (props) => {
  console.log('props :', props);
  const navigate = useNavigate();
  const [data, setData] = useState('');
  const [time, setTime] = useState('');
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    console.log('allTasks :', taskList);
  }, [taskList]);
  //function for input task
  const handleChangetext = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };
  //function for input time
  const handleChangetime = (e) => {
    e.preventDefault();
    setTime(e.target.value);
  };
  //function for input task and time submission
  const handleSubmit = () => {
    console.log('text :', data);
    console.log('time :', time);
    let obj1 = { task: data, taskTime: time };
    props.addTask(obj1);
    setTaskList([...taskList, obj1]);
    setData('');
    setTime('');
  };
  //delete task function
  const handleDelete = (e) => {
    console.log(e);
    props.delTask(e.task);
    let newList = [];
    newList = taskList.filter((data) => data != e);
    setTaskList(newList);
  };
  //function to go to the next page
  const handleDetails = (e) => {
    console.log(e);
    navigate('/details', {
      state: {
        data: e,
      },
    });
  };
  return (
    <>
      <div className='main-box'>
        <div className='heading-box'>
          <img src={logos} />
        </div>
        <div className='input-box'>
          <input
            type='text'
            id='textInput'
            onChange={handleChangetext}
            value={data}
          />
          <input
            type='time'
            id='timeInput'
            onChange={handleChangetime}
            value={time}
          />
          <button id='btn-submit' onClick={handleSubmit}>
            Save
          </button>
        </div>
        <div className='display-box'>
          {props.data.tasks.map((data, id) => (
            <div className='display-tasklist' key={id}>
              <div className='dataDetails' onClick={() => handleDetails(data)}>
                {data.task}
              </div>
              <div>{data.taskTime}</div>

              <button id='btn-task' onClick={() => handleDelete(data)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (obj) => {
      dispatch({ type: 'AddTask', payload: obj });
    },
    delTask: (name) => {
      dispatch({ type: 'DelTask', payload: name });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
