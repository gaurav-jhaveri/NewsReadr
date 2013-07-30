window.NR = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function($rootEl, feeds){
    new NR.Router.FeedsRouter($rootEl, feeds);
    Backbone.history.start();
  }
};