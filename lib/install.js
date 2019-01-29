module.exports = function(){
var myDevice = {
    device: {
        name: 'Freebox decoder',
        identifier: 'hd1',
        protocol: 'freebox',
        service: 'freebox'
    },
    types: [
        {
            identifier: "power",
            type: 'binary',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        },
        {
            identifier: "channel",
            type:'channel',
            unit: 'channel',
            min: 0,
            max: 999,
            sensor: false
        },
        {
            identifier: "ok",
            type: 'ok',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        },
        {
            identifier: "volup",
            type: 'volup',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        },
        {
            identifier: "voldown",
            type: 'voldown',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        },
	    {
	       identifier: "prgmup",
	       type: 'prgmup',
	       unit: 'binary',
	       min: 0,
	       max: 1,
	       sensor: false
	    },
	    {
            identifier: "prgmdown",
            type: 'prgmdown',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        },
        {
            identifier: "mute",
            type: 'mute',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        },
	    {
            identifier: "rec",
            type: 'rec',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        },
        {
            identifier: "home",
            type: 'home',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        },
        {
            identifier: "info",
            type: 'info',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        },
	    {
            identifier: "search",
            type: 'search',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        },
	    {
            identifier: "menu",
            type: 'menu',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        },
	    {
            identifier: "back",
            type: 'back',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        },
	    {
            identifier: "info",
            type: 'info',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        }

    ]   
};
	return  gladys.device.create(myDevice)
      .then(function(device){
          console.log("Attention, pensez à préciser dans les devices dans quelle pièce se situe votre décoder et éventuellement de remplacer hd1 par hd2 si il s'agit d'un décodeur secondaire.")
         // device created ! 
	var type={
		name: 'freebox',
		service: 'freebox'
		};
	return gladys.notification.install(type);
      })
      .catch(function(err){
          // something bad happened ! :/
                    console.log(err);

      });
}
