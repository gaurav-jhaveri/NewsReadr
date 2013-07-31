NR.Routers.FeedsRouter = Backbone.Router.extend({
  initialize: function($rootEl, feeds){
    this.$rootEl = $rootEl;
    this.feeds = feeds;
  },

  routes: {
    "": "index",
    "feeds/:id": "show"
  },

  index: function() {
    var that = this;
    var feedsIndexView = new NR.Views.FeedsIndexView({
      collection: that.feeds,
      $rootEl: that.$rootEl
    });
    var list = feedsIndexView.render().$el
    that.$rootEl.html(list);
    list.fadeIn("slow");
  },

  show: function(event) {
    var that = this;
    var feedShowView = new NR.Views.FeedShowView({
      $rootEl: that.$rootEl
    })
  }

})