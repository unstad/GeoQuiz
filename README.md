# Start mongodb
mongod --config /usr/local/etc/mongod.conf

# Legg til bruker
curl -XPOST -H "Content-Type: application/json" -d '{"firstName":"Katharina","lastName":"Unstad","email":"katharina@test.tld","username":"kunstad","password":"1234"}' localhost:3000/users
