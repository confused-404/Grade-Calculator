use axum::{
    http::{Method}, response::Html, routing::{get, post}, Router
};

use tower_http::cors::{Any, CorsLayer};

use crate::handlers::calculate_grade;

mod handlers;
mod models;

#[tokio::main]
async fn main() {
    let cors: CorsLayer = CorsLayer::new()
        .allow_methods([Method::POST, Method::GET])
        .allow_origin(Any)
        .allow_headers(Any);

    let app: Router = Router::new()
        .route("/calculate", post(calculate_grade))
        .route("/", get(test_main))
        .layer(cors);

    println!("Running on http://localhost:8080");

    let listener = tokio::net::TcpListener::bind("0.0.0.0:8080").await.unwrap();
    axum::serve(listener, app.into_make_service()).await.unwrap();
}

async fn test_main() -> Html<&'static str> {
    Html("<h1>Hello World!</h1>")
}
