# frozen_string_literal: true

class UsersController < ApplicationController

  before_action :require_signin, except: %i[new create]
  before_action :require_correct_user, only: %i[edit update destroy]

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def edit; end

  def create
    @user = User.new(user_params)

    if @user.save
      session[:user_id] = @user.id
      redirect_to user_path(@user), notice: 'User was successfully created.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      redirect_to user_path(@user), notice: 'User was successfully updated.'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    if @user.destroy
      session[:user_id] = nil
      redirect_to root_path, status: :see_other, alert: 'User was successfully destroyed.'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  private

  def require_correct_user
    @user = User.find(params[:id])
    return if current_user?(@user)

    redirect_to(root_path)
  end

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

end
