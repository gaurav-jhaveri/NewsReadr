NR.Views.EntryShowView = Backbone.View.extend({

  className: "details",

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.details = options.details;
  },

  render: function(){
    var that = this;
    console.log(that.details)
    var entryShow = JST["entries/show"]({
      entry: that.details
    });

    that.$el.html(entryShow);
    return that;
  }
})
