# json.array! @guests, :name, :age

json.array! @guests.each do |guest|
  # json.name guest.name
  # json.age guest.age
  json.extract! guest, :name
  json.extract! guest, :age
end