use axum::{
    response::Html, routing::{get, post}, Router
};

use crate::handlers::calculate_grade;

mod handlers;
mod models;

#[tokio::main]
async fn main() {
    let app: Router = Router::new()
        .route("/calculate", post(calculate_grade))
        .route("/", get(test_main));

    println!("Running on http://localhost:8080");

    let listener = tokio::net::TcpListener::bind("0.0.0.0:8080").await.unwrap();
    axum::serve(listener, app.into_make_service()).await.unwrap();
}

async fn test_main() -> Html<&'static str> {
    Html("<h1>Hello World!</h1>")
}
