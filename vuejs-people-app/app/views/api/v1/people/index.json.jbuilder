json.array! @peoples.each do |people|
  json.id people.id
  json.name people.name
  json.bio people.bio
  json.bioVisible false
  
end