class Api::NecessitiesController < ApplicationController

  def create
    @necessity = Necessity.new(necessity_params)
    @necessity.save!
    render :show
  end

  def index

    @necessity = Necessity.where('hosting_id = ?', params[:necessity][:hosting_id])
    render :show
  end

  private
  def necessity_params
    params.require(:necessity).permit(:hosting_id, :wifi,:shower, :TV, :bathroom, :electricity, :blanket, :pet_allowed, :laundry, :kitchen, :max_guest)
  end

end
