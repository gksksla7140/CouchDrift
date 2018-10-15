class Api::HostingsController < ApplicationController
  def create
    @hosting = Hosting.create!(hosting_params)
    render :show
  end

  def index
    hostings = Hosting.all
    @hostings = hostings.includes(:host)
    render :index

  end

  def show
    @hosting = Hosting.find(params[:id])
  end



  private
  def hosting_params
    params.require(:hosting).permit(:address, :long, :lat, :rating, :rating_counts, :description, :host_id, :rating_counts, :rating, :wifi, :shower, :TV, :bathroom, :blanket, :electricity, :pet_allowed, :laundry, :kitchen, :max_guest )
  end
end
