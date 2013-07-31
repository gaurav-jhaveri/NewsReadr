NR.Views.FeedShowView = Backbone.View.extend({

  tagName: "ul",

  className: "entries hidden",

  events: {
    "click a.entry": "toggleEntry",
  },

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.entries = options.entries;
    this.children = [];
  },

  render: function(){
    var that = this;
    var feedShow = JST["feeds/show"]({
      entries: that.entries
    });

    that.$el.html(feedShow);
    return that;
  },

  toggleEntry: function (event) {
    event.preventDefault();
    var that = this;

    if (!$(event.target).hasClass("showed")){
      var entry
      _.filter(this.entries, function(entery){
        if($(event.target).attr("data-id") == entery.guid){
          entry = entery;
        }
      });
      console.log(entry)
      var entryShowView = new NR.Views.EntryShowView ({
        entry: entry,
        $rootEl: $(event.target)
      });
      that.children.push(entryShowView);
      $(event.target).addClass("showed");
      $(event.target).attr("view-id", entryShowView.cid)
      $(event.target).after(entryShowView.render().$el);
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
  }
});