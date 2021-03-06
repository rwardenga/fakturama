var Unit = Ember.Model.extend({
    code: Ember.attr(),
    name: Ember.attr(),
    nameEN: Ember.attr()
});

Unit.reopenClass({
    adapter: Ember.FixtureAdapter.create(),
    primaryKey: "code",
    FIXTURES: [
        {code: "hour", name: "godz.", nameEN: "hrs"},
        {code: "service", name: "usł.", nameEN: "service"},
        {code: "piece", name: "szt.", nameEN: "pcs"},
        {code: "day", name: "dni", nameEN: "days"},
        {code: "discount", name: "rabat", nameEN: "discount"},
        {code: "kilogram", name: "kg", nameEN: "kg"},
        {code: "ton", name: "ton", nameEN: "tons"},
        {code: "metre", name: "m", nameEN: "m"},
        {code: "kilometre", name: "km", nameEN: "km"},
        {code: "advance", name: "zaliczka", nameEN: "advance"},
        {code: "set", name: "komplet", nameEN: "set"},
        {code: "squaremetre", name: "m²", nameEN: "m²"},
        {code: "cubicmetre", name: "m³", nameEN: "m³"}
    ]
});

export default Unit;
