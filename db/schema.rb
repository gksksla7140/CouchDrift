# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20181009231552) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer "hosting_id", null: false
    t.integer "guest_id", null: false
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.string "status", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["guest_id"], name: "index_bookings_on_guest_id"
    t.index ["hosting_id"], name: "index_bookings_on_hosting_id"
  end

  create_table "cities", force: :cascade do |t|
    t.string "name", null: false
    t.integer "zipcode", null: false
    t.string "state", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "hostings", force: :cascade do |t|
    t.integer "host_id", null: false
    t.integer "city_id", null: false
    t.string "address", null: false
    t.float "long", null: false
    t.float "lat", null: false
    t.string "img"
    t.float "rating", default: 0.0
    t.integer "rating_counts", default: 0
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["host_id"], name: "index_hostings_on_host_id"
  end

  create_table "necessities", force: :cascade do |t|
    t.integer "hosting_id", null: false
    t.boolean "wifi", default: false
    t.boolean "shower", default: false
    t.boolean "TV", default: false
    t.boolean "bathroom", default: false
    t.boolean "blanket", default: false
    t.boolean "electricity", default: false
    t.boolean "pet_allowed", default: false
    t.boolean "laundry", default: false
    t.boolean "kitchen", default: false
    t.integer "max_guest", default: 1
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hosting_id"], name: "index_necessities_on_hosting_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "hosting_id", null: false
    t.integer "author_id", null: false
    t.string "title", null: false
    t.text "body", null: false
    t.index ["author_id"], name: "index_reviews_on_author_id"
    t.index ["hosting_id"], name: "index_reviews_on_hosting_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.boolean "hosting", default: true
    t.string "about", null: false
    t.integer "age", null: false
    t.string "sex", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
