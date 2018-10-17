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

ActiveRecord::Schema.define(version: 2018_10_16_055443) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "bookings", force: :cascade do |t|
    t.integer "hosting_id", null: false
    t.integer "guest_id", null: false
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.string "status", default: "APPROVED", null: false
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
    t.string "address", null: false
    t.float "long", null: false
    t.float "lat", null: false
    t.string "img"
    t.float "rating", default: 0.0
    t.integer "rating_counts", default: 0
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "wifi", default: true
    t.boolean "shower", default: true
    t.boolean "TV", default: true
    t.boolean "bathroom", default: true
    t.boolean "blanket", default: true
    t.boolean "electricity", default: true
    t.boolean "pet_allowed", default: true
    t.boolean "laundry", default: true
    t.boolean "kitchen", default: true
    t.integer "max_guest", default: 1
    t.text "img_url", default: "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
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
    t.string "fname"
    t.string "lname"
    t.boolean "hosting", default: true
    t.string "about"
    t.integer "age"
    t.string "sex"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
