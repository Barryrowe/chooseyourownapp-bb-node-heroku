App.Views.NewQuestion = Backbone.View.extend({
	initialize: function(options){
		App.currentUser.on("change", this.render, this);
		this.render();
	},
	render: function(){
		var uname = App.currentUser.get("userName");
		console.log(uname);
		this.$("#asker").text(uname);
		this.$el.toggleClass("hidden", !App.currentUser.isLoggedIn());
		return this;
	}
});
