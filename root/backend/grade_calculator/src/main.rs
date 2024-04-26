use axum::{
    routing::post,
    Router,
};

use crate::handlers::calculate_grade;

mod handlers;
mod models;

#[tokio::main]
async fn main() {
    let app: Router = Router::new()
        .route("/calculate", post(calculate_grade)); // TODO: change this

    println!("Running on http://localhost:8080");

    let listener = tokio::net::TcpListener::bind("0.0.0.0:8080").await.unwrap();
    axum::serve(listener, app.into_make_service()).await.unwrap();
}
