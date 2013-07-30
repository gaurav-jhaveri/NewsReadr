NR.Views.FeedsIndexView = Backbone.Views.extend({
  events: {
    "click a.feed": "displayShow"
  },

  initialize: function($rootEl, feeds){
    this.$rootEl = $rootEl;
    this.feeds = feeds;
  },

  render: function(){
    var that = this;

    var feedIndex = JST["feeds/index"]({
      feeds: that.feeds
    });

    that.$el.html(feedIndex);
    return that;
  },

  displayShow: function (el) {
    //Display individual view for feed
  };
});