NR.Views.FeedsIndexView = Backbone.View.extend({
  events: {
    "click a.feed": "toggleFeed",
    "click button.refresh": "refreshFeed"
  },

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.feeds = options.collection;
    this.children = [];

    var that = this;
    var events = ["add", "change", "remove", "reset"];

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

  toggleFeed: function (event) {
    event.preventDefault();
    var that = this;

    if (!$(event.target).hasClass("showed")){
      var feed = this.feeds.get($(event.target).attr("data-id"))
      var feedShowView = new NR.Views.FeedShowView ({
        entries: feed.attributes.entries,
        $rootEl: $(event.target)
      });
      that.children.push(feedShowView);
      $(event.target).addClass("showed");
      $(event.target).attr("view-id", feedShowView.cid)
      $(event.target).after(feedShowView.render().$el);
    }
    else{
      var viewId = $(event.target).attr("view-id")
      that.children.forEach(function(child){
        if (child.cid == viewId){
          that.children.splice(that.children.indexOf(child), 1);
          child.remove();
          child.stopListening();
        }
      });
      $(event.target).removeClass("showed");
    }
    console.log(that.children);
  },
  //backboneRelational.autoFetch().... every two minutes

  refreshFeed: function(event){
    event.preventDefault();
    this.feeds.fetch();
  }

});