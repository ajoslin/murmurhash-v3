var test = require('tape')
var hash = require('./')

test('sanity test', function (t) {
  t.equal(hash('it should hash this'), 3699533434)
  t.end()
})
