import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {TouchID} from 'ionic-native';
import {LoggedinPage} from '../loggedin/loggedin';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

	private touchIdAvailable: boolean;

  constructor(public _navCtrl: NavController, private _platform: Platform) {

  }

  ionViewLoaded () {
  	this._platform.ready().then(()=>{
	  	TouchID.isAvailable().then(
		    res => this.touchIdAvailable = true,
		    err => this.touchIdAvailable = false
	  	);

		
	});
  }

  private startTouchID () {
  	TouchID.verifyFingerprintWithCustomPasswordFallback('Scan your fingerprint please')
		  .then(
		    res => this._navCtrl.push(LoggedinPage),
		    err => console.error('Error', err)
		  );
  }
}
