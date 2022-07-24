import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import moment from 'moment';
import logos from '../images/logos.webp';
import logos2 from '../images/logos2.jpg';
const Detailspage = () => {
  const [week, setWeek] = useState([]);
  let arr = [];
  useEffect(() => {
    getDatesOfWeek();
  }, []);
  function getDatesOfWeek() {
    for (var i = 0; i < 7; i++) {
      let date = moment().subtract(i, 'days').format('DD-MM-YYYY');
      let obj = {
        date: date,
        status: 'none',
      };
      arr.push(obj);
    }

    console.log('all Dates: ', arr);
    setWeek([...arr]);
  }

  let location = useLocation();
  const navigate = useNavigate();
  console.log('Data :', location.state.data);
  const handleHome = () => {
    navigate('/home');
  };
  const handleClick = (e, v) => {
    console.log('task change :', e);
    console.log('task change :', v);
    let temp_arr = [...week];

    let idx = temp_arr.findIndex((d) => d == e);

    let temp_element = { ...temp_arr[idx] };

    temp_element.status = v;

    temp_arr[idx] = temp_element;

    setWeek([...temp_arr]);
    console.log('new week:', week);
  };
  return (
    <>
      <div className='main-box'>
        <div className='heading-box'>
          <img src={logos} />
        </div>
        <div className='details-display-box'>
          <div>Task-Name: {location.state.data.task}</div>
          <div onClick={handleHome} style={{ cursor: 'pointer' }}>
            <i className='fa fa-regular fa-house-user'></i>
          </div>
          <div>Task-Time: {location.state.data.taskTime}</div>
        </div>
        <table>
          <tbody>
            <tr className='details-display-box'>
              <td>Date</td>
              <td>Status</td>
              <td>ChangeStatus</td>
            </tr>
          </tbody>
        </table>
        <div className='display-box'>
          {week.map((data, id) => (
            <div style={{ marginTop: '10px' }} key={id}>
              <span>{data.date}</span>
              <span style={{ marginLeft: '100px' }}>{data.status}</span>
              <span style={{ marginLeft: '160px' }}>
                <select
                  onChange={(event) => handleClick(data, event.target.value)}
                  style={{ width: '80px' }}
                >
                  <option value='none'>None</option>
                  <option value='complete'>Done</option>
                  <option value='not-complete'>Not-Done</option>
                </select>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Detailspage;
