var Promise = require('bluebird');
//var config = require('./config.js')

module.exports = function exec(params){
	return gladys.param.getValue(`Freebox_net_remote`)
    .then((net_code) => {
var newState;
    switch(params.deviceType.type){
	  case 'binary':
            power();
    	break;
      	case 'channel':
		var chan_value = params.state.value + "";
			channel(chan_value)
	  	break;
		 case 'ok':
		validate()
		break;
		case 'volup':
		increasevolume()
		break;
		case 'voldown':
		decreasevolume()
		break;
		case 'prgmup':
		increaseprgm()
		break;
		case 'prgmdown':
                decreaseprgm()
                break;
		case 'mute':
                mute()
                break;
		case 'rec':
                rec()
                break;
		case 'home':
                home()
                break;
		case 'info':
                info()
                break;
		case 'search':
                search()
                break;
		case 'menu':
                menu()
                break;
		case 'back':
                back()
                break;
                }

function power(){
newState = "power";
request(newState);
}
function channel(channel){
switch(channel.length){
			case 1:
			newState = channel;
			request(newState);
			break;
			case 2:
			newState = channel.charAt(0);
			request(newState);
			newState = channel.charAt(1);
			request(newState);
			break;
			case 3:
			newState = channel.charAt(0);
			request(newState);
			newState = channel.charAt(1);
			request(newState);
			newState = channel.charAt(2);
			request(newState);
			break;
}	

}
function validate(){
newState = "ok";
request(newState);
}
function increasevolume(){
newState = "vol_inc";
request(newState);
}
function decreasevolume(){
newState = "vol_dec";
request(newState);
}
function increaseprgm(){
newstate = "prgm_inc";
request(newstate);
}
function decreaseprgm(){
newstate = "prgm_dec";
request(newstate);
}
function mute(){
newstate = "mute";
request(newstate);
}
function rec(){
newstate = "rec";
request(newstate);
}
function home(){
newstate = "home";
request(newstate);
}
function info(){
newstate = "yellow";
request(newstate);
}
function search(){
newstate = "blue";
request(newstate);
}
function menu(){
newstate = "green";
request(newstate);
}
function back(){
newstate = "red";
request(newstate);
}
function request(key){
gladys.utils.request('http://' +params.deviceType.identifier + '.freebox.fr/pub/remote_control?code=' +net_code +'&key=' + key);
console.log("Commande envoyée sur " + 'http://' +params.deviceType.identifier + '.freebox.fr/pub/remote_control?code=' +net_code +'&key=' + key)
	
}
    //return exec()
      // return false to tell Gladys there is no feedback, and
      // that Gladys need to create a deviceState
      //.then(() => false);
});
        
        return Promise.resolve(true);
    }
		
    
