/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 08:05:11
**/

import { CordovaWebviewDirective } from "./cordova-webview.directive";

describe("CordovaWebviewDirective", () => {
	it("should create an instance", () => {
		let elementRef = null;
		let inAppBrowser = null;
		// please write the code manually
		const directive = new CordovaWebviewDirective(elementRef,inAppBrowser);
		expect(directive).toBeTruthy();
	});
});
