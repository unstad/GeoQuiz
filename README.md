# Start mongodb
mongod --config /usr/local/etc/mongod.conf

# Legg til bruker
curl -XPOST -H "Content-Type: application/json" -d '{"firstName":"Katharina","lastName":"Unstad","email":"katharina@test.tld","username":"kunstad","password":"1234"}' localhost:3000/users

#ny herokuapp
https://morning-reef-97881.herokuapp.com/ | https://git.heroku.com/morning-reef-97881.git

#used leaflet-control-osm geocoder to implement search
https://github.com/k4r573n/leaflet-control-osm-geocoder

# API

Hent neste spørsmål:
`curl localhost:3000/api/questions/next | python -m json.tool`

Besvar spørsmål (feil svar):
`curl -H 'Content-Type: application/json' -d '{"answer":"test"}' localhost:3000/api/questions/1/answer | python -m json.tool`

Besvar spørsmål:
`curl -H 'Content-Type: application/json' -d '{"answer":"Genève"}' localhost:3000/api/questions/1/answer | python -m json.tool`

Tilbakestill spørsmål:
`curl localhost:3000/api/questions/reset | python -m json.tool`
