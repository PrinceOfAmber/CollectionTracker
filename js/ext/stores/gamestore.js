Ext.define('Sam.stores.gamestore',
{
   extend: 'Sam.base.Store' 
   ,initComponent: function() {  this.callParent(arguments); }
   ,requires  : ['Sam.models.gamemodel']
   ,model     :  'Sam.models.gamemodel'
   ,constructor:function(config)
   {  
        console.log('game store constructor');
        
		if(typeof config == 'undefined') {config = {}; }
		
        config.url="/rest/game";
        this.callParent(arguments);
   }
});
 
 