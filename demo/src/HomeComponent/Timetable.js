import React, { useState } from 'react';
import Calendar from 'react-calendar';
import AddIcon from '@material-ui/icons/Add';
import 'react-calendar/dist/Calendar.css';
import Button from '@material-ui/core/Button';
export default function Timetable() {
  const [value, onChange] = useState(new Date());
  // var gapi = window.gapi
  // var CLIENT_ID = "290976649960-it9ourl2qis1vr9obctpbmq65l0181ho.apps.googleusercontent.com"
  // var API_KEY = "AIzaSyAyjyoBg2IIqZesA0Kqtpji7OtCfLdmaCU"
  // var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  // var SCOPES = "https://www.googleapis.com/auth/calendar.readonly"
  // const handleClick=() => {
  //   gapi.load('client:auth2', () => {
  //     console.log('loaded client');

  //     gapi.client.init({
  //       apiKey: API_KEY,
  //       clientId: CLIENT_ID,
  //       discoverDocs: DISCOVERY_DOCS,
  //       scope:SCOPES,
  //     })
  //     gapi.client.load('calendar', 'v3', () => console.log("bam!"))

  //     gapi.auth2.getAuthInstance().sigIn()

  //       .then(() => {
  //         var event = {
  //           'summary': 'Google I/O 2015',
  //           'location': '800 Howard St., San Francisco, CA 94103',
  //           'description': 'A chance to hear more about Google\'s developer products.',
  //           'start': {
  //             'dateTime': '2015-05-28T09:00:00-07:00',
  //             'timeZone': 'America/Los_Angeles'
  //           },
  //           'end': {
  //             'dateTime': '2015-05-28T17:00:00-07:00',
  //             'timeZone': 'America/Los_Angeles'
  //           },
  //           'recurrence': [
  //             'RRULE:FREQ=DAILY;COUNT=2'
  //           ],
  //           'attendees': [
  //             {'email': 'lpage@example.com'},
  //             {'email': 'sbrin@example.com'}
  //           ],
  //           'reminders': {
  //             'useDefault': false,
  //             'overrides': [
  //               {'method': 'email', 'minutes': 24 * 60},
  //               {'method': 'popup', 'minutes': 10}
  //             ]
  //           }
  //         }
  //         var request = gapi.client.calendar.event.insert({
  //           'calendarId': 'primary',
  //           'resource': event,

  //         })

  //         request.execute(event => {
  //           window.open(event.htmlLink)
  //         })
  //     })
  //   })
  //   })

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mt-2">
          <div className="sidemenu">
            <div className="createbutton">
              {/* <Button variant="contained" onClick={handleClick} id="createbutton" color="primary" className="form-group" aria-label="contained primary button group">
                    <AddIcon /> Create 
                    </Button> */}
              < button className="btn btn-primary mt-5" data-toggle="modal" data-target="#exampleModal" > Create Table</button>
            </div>

            <div className="mt-5">
              <button className="" data-toggle="modal" data-target="#exampleModal" > <Calendar className="calendar"
                onChange={onChange}
                value={value}
              /></button>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <table class="table mytable">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Subject</th>
                <th scope="col">Description</th>
                <th scope="col">Date</th>
                <th scope="col">Color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>My Birthday</td>
                <td>My birthday day event . </td>
                <td>6/22/2021</td>
                <td type="color" value="#ff0000">Red</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>BF Birthday</td>
                <td>My frn  birthday event . </td>
                <td>1/6/2018</td>
                <td type="color" value="#ff0000">Pink</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Assignment Deadline</td>
                <td>Final Assignment Deadline . </td>
                <td>9/5/2020</td>
                <td type="color" value="#ff0000">Green</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* mode */}



      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Create Your Time Table</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div className="form-group">
                  <label>Title</label>
                  <input type="text" className="form-control" id="titleexampleinput" />
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <input type="text" className="form-control" id="description" />
                </div>

                <div className="form-group">
                  <label>Choose Date & Time</label>
                  <input type="datetime-local" className="form-control" id="dateexampleinput" />
                </div>
                <div className="form-group">
                  <label>Choose Color</label>
                  <input className="form-control" type="color" id="favcolor" name="favcolor" />
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
