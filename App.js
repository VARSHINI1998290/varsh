import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const url = "http://timeapi.kaaylabs.com/api/v1/project_view/"
  const [data, setData] =useState({});
  

  async function getData(setData) {
    await fetch(url)
    .then(response => response.json())
    .then((json) => setData(json));
  }
  useEffect(() => {
    getData(setData);
  }, [])

  
  if (data && data.success === true) {
    const firstObj = data.data[0]
    return(
    <div className="table-responsive">
      <div className="dropdown">
              <button className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                 status  <span className="caret"></span>
              </button>
               < ul className="dropdown-menu">
                      <li><a href="button">Completed</a></li>
                      <li><a href="button">In Progress</a></li>
            </ul>
          </div>

        <table className="table table-stripped table-bordered table-dark table-hover table-condensed" >
          <thead>
            <tr className="table-danger">
    
              {Object.keys(firstObj).map(key => {
                return (
                <td>
                    {key}
                    </td>
                )
              })}
            </tr>
            
          </thead>
          <tbody>
            {data.data.map(project_data => {
              return (
                <tr >
                  <td>{project_data.project_id}</td>
                  <td>{project_data.project_code}</td>
                  <td>{project_data.description}</td>
                  <td>{project_data.start_date}</td>
                  <td>{project_data.end_date}</td>
                  <td>{project_data.company_name}</td>
                  <td>{project_data.status}</td>
                 
              
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
      } else {
    return (
      <div>
        <h6>content</h6>
      </div>
    )};
}
export default App;