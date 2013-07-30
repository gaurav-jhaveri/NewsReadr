NewReader::Application.routes.draw do
  resources :feeds, only: [:index, :create] do
    resources :entries, only: [:index]
  end

  root to: "feeds#index"

  get "/feeds/refresh", to: "feeds#refresh"
end
