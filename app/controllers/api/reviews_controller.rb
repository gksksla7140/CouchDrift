class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages
    end
  end

  def index
    @reviews = Review.where("hosting_id = ?", params[:review][:hosting_id])
  end


  def destroy
    @review = Review.find(params[:id])
    if @review.destroy
      render :show
    else
      render json: "Couldn't Delete", status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:author_id, :hosting_id,:title, :body)
  end
end
