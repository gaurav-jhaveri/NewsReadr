NR.Views.FeedShowView = Backbone.View.extend({

  tagName: "ul",

  className: "entries",

  events: {
    "click a.entry": "showEntry"
  },

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.entries = options.entries;
  },

  render: function(){
    var that = this;
    var feedShow = JST["feeds/show"]({
      entries: that.entries
    });

    that.$el.html(feedShow);
    return that;
  },

  showEntry: function (el) {
    //Display individual view for entry
  }
});