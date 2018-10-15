class Api::BookingsController < ApplicationController

    def index
      @bookings = Booking.where("guest_id = ?", params[:guest_id])
    end

    def create
      @booking = Booking.new(request_params)
      if @booking.save
        render :show
      else
        render json: @booking.errors.full_messages, status: 422
      end
    end

    private
    def request_params
      params.require(:booking).permit(:guest_id, :hosting_id, :start_date, :end_date)
    end
end
