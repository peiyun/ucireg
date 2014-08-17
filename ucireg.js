/* 
	application: retrieve information from WebReg automatically
	author: Peiyun
	email: penn.peiyun@gmail.com
*/

function Course(code, name) {
	this.code = code;
	this.name = name;
	this.printCourse = function(){
		return this.code + ' ' + this.name;
	};
}

var retrieveFromWebReg = function(){

	var registered_courses = [];
	var waiting_courses = [];

	/* 1. head to the reg website */
	window.location.href = 'http://www.reg.uci.edu/cgi-bin/webreg-redirect.sh';

	/* 2. complete forms including UCINETID and Password */
	userdoc = document.getElementById('ucinetid');
	passdoc = document.getElementById('password');
	formdoc = document.getElementById('webauth_login_form_id');

	userdoc.value = 'peiyunh';
	passdoc.value = 'B1strong!';
	formdoc.click();

	/* 3. re-organize informations */


	return registered_courses, waiting_courses;
};