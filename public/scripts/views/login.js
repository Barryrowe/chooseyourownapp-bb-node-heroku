App.Views.Login = Backbone.View.extend({
	events:{
		"click #logIn": "login"
	},
	initialize: function(){
		this.model.on("change", this.render, this);
	},
	render: function(){
		console.log("Hey we rendered!");
		this.$el.toggleClass("hidden", this.model.isLoggedIn());
		return this;
	},
	login: function(){
		console.log("Hey We logged in!");
		this.model.logIn(this.$("#userName").val());
	}
});
