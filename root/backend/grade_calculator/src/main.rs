use axum::cors::Cors;
use axum::{
    http::{self, Method},
    routing::{get, post},
    Router,
};
use http::header::CONTENT_TYPE;

use crate::handlers::calculate_grade;

mod handlers;
mod models;

#[tokio::main]
async fn main() {
    let app: Router = Router::new().route("/calculate", post(calculate_grade)); // TODO: change this

    let cors = Cors::new()
        .allow_methods(vec![http::Method::POST]) // Allow only POST method
        .allow_origin("*") // Allow any origin
        .allow_headers(vec!["content-type"]); // Allow specific headers

    let app = app.layer(cors);

    println!("Running on http://localhost:8080");

    let listener = tokio::net::TcpListener::bind("0.0.0.0:8080").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
