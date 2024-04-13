use axum::{routing::get, Router};

mod gpa_effect;
mod score_calcs;

#[tokio::main]
async fn main() {
    let app: Router = Router::new()
        .route("/gpa-effect/:cGPA/:numclasses/:newgrade", get(gpa_effect::get_new_gpa));

    println!("Running on http://localhost:3000");

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}