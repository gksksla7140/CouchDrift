@hostings.each do |hosting|
  json.set! hosting.id do
    json.partial! 'hosting', hosting: hosting
    json.hostId hosting.host.id
  end
end
