NR.Views.FeedsIndexView = Backbone.View.extend({
  events: {
    "click a.feed": "showFeed",
    "click button.refresh": "refreshFeed"
  },

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.feeds = options.collection;

    var that = this;
    var events = ["add", "change", "remove", "reset"];

    // console.log(feeds);
    _(events).each(function(event){
      that.listenTo(that.feeds, event, that.render);
    });
  },

  render: function(){
    var that = this;
    var feedIndex = JST["feeds/index"]({
      feeds: that.feeds
    });

    that.$el.html(feedIndex);
    return that;
  },

  showFeed: function (el) {
    //Display individual view for feed
  },

  //backboneRelational.autoFetch().... every two minutes

  refreshFeed: function(el){
    // $.ajax(
    //   url: )
  }

});