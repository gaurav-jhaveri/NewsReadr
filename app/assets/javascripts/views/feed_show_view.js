NR.Views.FeedShowView = Backbone.Views.extend({
  events: {
    "click a.entry": "showEntry"
  },

  initialize: function($rootEl, entries){
    this.$rootEl = $rootEl;
    this.entries = entries;
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
  };
});