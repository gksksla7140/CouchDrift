@hostings.each do |hosting|
  json.set! hosting.id do
    json.partial! 'hosting', hosting: hosting
    json.host do
      json.extract! hosting.host, :username, :email, :fname, :lname, :about, :age, :sex, :id
    end
  end
end
