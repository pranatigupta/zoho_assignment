import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div>
        <h3>Toll Management Application</h3>
      </div>
      <div>
        <div className="search-header">
            <div>Toll Entries/Vehicle Entries</div>
            <div><i class="fa-solid fa-filter"></i></div>
            <div className="input-container">
                <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search Vehicle" />
            </div>
            <div className="option-container">
                <button>Add vehicle entry</button>
                <button>Add new toll</button>
                <button>View all tolls</button>
            </div>
        </div>
        <div className="table-container">
          <table className="my-table">
            <th className="table-head">
              <td>VEHICLE TYPE</td>
              <td>NUMBER</td>
              <td>DATE/TIME</td>
              <td>TOLL NAME</td>
              <td>TARIFF</td>
            </th>
            <tr className="table-row">
              <td>Car/Jeep/Van</td>
              <td>usdgfbskdj</td>
              <td>32879483098</td>
              <td>hjdskfsjd</td>
              <td>56</td>
            </tr>
            {/* <tr>
              <td>Car/Jeep/Van</td>
              <td>usdgfbskdj</td>
              <td>32879483098</td>
              <td>hjdskfsjd</td>
              <td>56</td>
            </tr>
            <tr>
              <td>Car/Jeep/Van</td>
              <td>usdgfbskdj</td>
              <td>32879483098</td>
              <td>hjdskfsjd</td>
              <td>56</td>
            </tr>
            <tr>
              <td>Car/Jeep/Van</td>
              <td>usdgfbskdj</td>
              <td>32879483098</td>
              <td>hjdskfsjd</td>
              <td>56</td>
            </tr> */}
          </table>
        </div>
      </div>
    </>
  );
}
