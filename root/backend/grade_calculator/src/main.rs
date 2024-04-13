use axum::{routing::{get, post}, Router};

use crate::handlers::calculate_grade;

mod handlers;
mod models;

#[tokio::main]
async fn main() {
    let app: Router = Router::new()
        .route("/calculate", post(calculate_grade)); // TODO: change this

    println!("Running on http://localhost:3000");

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}