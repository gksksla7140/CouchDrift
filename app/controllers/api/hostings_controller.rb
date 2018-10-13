class Api::HostingsController < ApplicationController
  def create
    @hosting = Hosting.create!(hosting_params)
    render :show
  end

  def index
    hostings = Hosting.all
    @hostings = hostings
    render :index

  end

  def show
  @hostings = Hosting.find(params[:id])
  end



  private
  def hosting_params
    params.require(:hosting).permit(:address, :long, :lat, :rating, :rating_counts, :description, :host_id, :rating_counts, :rating)
  end
end
