# frozen_string_literal: true

class ApplicationController < ActionController::Base

  private

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
  helper_method :current_user

  def current_user?(user)
    user == current_user
  end
  helper_method :current_user?

  def current_user_admin?
    current_user&.admin?
  end
  helper_method :current_user_admin?

  def require_signin
    return if current_user

    session[:intended_url] = request.url
    redirect_to(signin_path, alert: 'You need to sign in first!')
  end

  def require_admin
    return if current_user_admin?

    redirect_to(root_path, alert: 'You must be an admin to do that!')
  end

end
