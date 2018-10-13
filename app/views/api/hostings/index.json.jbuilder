@hostings.each do |hosting|
  json.set! hosting.id do
    json.partial! 'hosting', hosting: hosting
    json.reviewIds []
  end
end
