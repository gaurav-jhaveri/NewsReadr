window.NR = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function($rootEl, feedsData){
    var feeds = new NR.Collections.Feeds(feedsData);
    new NR.Routers.FeedsRouter($rootEl, feeds);
    Backbone.history.start();
  }
};