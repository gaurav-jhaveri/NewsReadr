NR.Models.Feed = Backbone.Model.extend({
  parse: function(resp, options){
    var entries = new NR.Collections.Entries
    resp.entries.forEach(function(element) {
      var temp = new NR.Models.Entry(element)
      entries.add(temp)
    });
    this.attributes.entries = entries;
    return resp;
  }
});