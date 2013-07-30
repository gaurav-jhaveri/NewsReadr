window.NR = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function($rootEl, feeds){
    new NR.Routers.FeedsRouter($rootEl, feeds);
    Backbone.history.start();
  }
};