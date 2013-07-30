# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Feed.create(title: "yahoo nfl", url: "http://sports.yahoo.com/nfl/rss.xml")
Feed.create(title: "yhoo sccer", url: "http://sports.yahoo.com/soccer/rss.xml")
Feed.create(title: "sky prem", url: "http://www.skysports.com/rss/0,20514,11661,00.xml")
Feed.create(title: "sky liga", url: "http://www.skysports.com/rss/0,20514,11827,00.xml")
Feed.create(title: "reuters tech", url: "http://feeds.reuters.com/reuters/technologyNews?format=xml")