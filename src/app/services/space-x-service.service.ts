import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpaceXServiceService {

  constructor(private http: HttpClient) { }

  getProductList() {
    const url = 'https://api.spacexdata.com/v3/launches?limit=100'
    return this.http.get(url);
  }


  launchStatus(status) {
    const url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${status}`
    return this.http.get(url);
  }

  launchLandingStatus(launchStatus, landingStaus) {
    console.log('skjklanding', landingStaus)
    const lstatus = landingStaus ? landingStaus : '';
    const launStatus = launchStatus ? launchStatus : '';
    const url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launStatus}&land_success=${lstatus}`
    return this.http.get(url);
  }

  allStatusFilter(landingStaus, launchStatus, year) {
    const lstatus = landingStaus ? landingStaus : '';
    const launStatus = launchStatus ? launchStatus : '';
    const lYear = year ? year : '';
    const url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launStatus}&land_success=${lstatus}&launch_year=${lYear}`
    return this.http.get(url);
  }

}
