define(['timeAPI'], function(APIConstructor) {

    var API = new APIConstructor();
    var REPETITIONS = 200;

    API.addSettings('canvas', {borderColor:'black'});

	API.addTrialSets('instructions',{
        input: [ {handle:'end', on: 'space' } ],
		interactions: [
            { 
                conditions:  [{type:'inputEquals',value:'end'}],
                actions: [ {type:'endTrial'} ]
            }	
		],
		layout : [	
			{media:{html:'Welcome to the <strong>stimulus timing</strong> experiment. Press space to begin.'}}
		]
	});

    API.addTrialSets('main',{
        interactions: [
            { 
                conditions: [{type:'begin'}], 
                actions: [
                    {type:'trigger',handle:'showStimulus', duration:300} 
                ]
            },
            {
                conditions:  [{type:'inputEquals',value:'showStimulus'}],
                actions: [
                    {type:'showStim',handle:'All'},
                    {type:'trigger',handle:'hideStimulus', duration:200} 
                ]
            },
            {
                conditions:  [{type:'inputEquals',value:'hideStimulus'}],
                actions: [
                    { type:'hideStim', handle:'All'},
                    {type:'endTrial'} 
                ]
            },	
        ],
        stimuli : [	
			{media:{image:'img/white.png'}}
        ]
    });
	
	API.addSequence([
        { inherit: 'instructions' },
		{ 
		    mixer:'repeat',
			times: REPETITIONS,
			data: [ {inherit : {set:'main'}} ]
        }
	]);
    
	return API.script;
});
