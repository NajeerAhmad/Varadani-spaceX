import { Component, OnInit } from '@angular/core';
import { SpaceXServiceService } from '../services/space-x-service.service';

@Component({
  selector: 'app-space-x-list',
  templateUrl: './space-x-list.component.html',
  styleUrls: ['./space-x-list.component.css']
})
export class SpaceXListComponent implements OnInit {
  productList: any;
  launchYear = [2006, 2007, 2008];
  launch = [true, false];
  landing = [true, false];
  launchStaus: any;
  landStatus: any;

  constructor(private spaceXServiceService: SpaceXServiceService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.spaceXServiceService.getProductList().subscribe((res: any) => {
      console.log('reessss', res);
      if (res && res.length > 0) {
        this.productList = res;
      }
    });
  }

  valuechange(year) {
    console.log('ksjdskd', year);
    this.allStausFilter(year)
  }

  launchStatus(launch) {
    console.log('launch', launch);
    this.launchStaus = launch;
    this.spaceXServiceService.launchStatus(launch).subscribe((res: any) => {
      console.log('res', res);
      if (res && res.length > 0) {
        this.productList = res;
      }
    });
  }

  landingStatus(landing) {
    console.log('kssssssssssssss', landing)
    this.landStatus = landing;
    this.launchandLandingFilter(this.landStatus);
  }

  launchandLandingFilter(landStatus?) {
    console.log('landing', landStatus);
    // this.landStatus = landing;
    this.spaceXServiceService.launchLandingStatus(this.launchStaus, landStatus).subscribe((res: any) => {
      if (res && res.length > 0) {
        this.productList = res;
      }
    });
  }

  allStausFilter(year) {
    this.spaceXServiceService.allStatusFilter(this.landStatus, this.launchStaus, year).subscribe((res: any) => {
      console.log('launch landing', res);
      if (res && res.length > 0) {
        this.productList = res;
      }
    });
  }

}
