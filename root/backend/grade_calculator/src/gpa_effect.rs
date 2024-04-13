use axum::{
    extract::{Path, Query},
    response::{Html, IntoResponse},
    routing::get,
    Router,
};

pub async fn get_new_gpa(Path((cGPA, num_classes, new_grade)): Path<(f32, u32, String)>) -> impl IntoResponse {
    let val_of_new_grade: f32 = match new_grade.as_str() {
        "A" => 4.0,
        "A-" => 3.67,
        "B+" => 3.33,
        "B" => 3.0,
        "B-" => 2.67,
        "C+" => 2.33,
        "C" => 2.0,
        "D" => 1.0,
        "F" => 0.0,
        _ => {
            println!("illegal grade input, handling as if an F");
            0.0
        }
    };

    let num_classes = num_classes as f32;

    let new_gpa: f32 = (cGPA * num_classes + val_of_new_grade) / (num_classes + (1 as f32));
    Html(format!("New GPA: {}", new_gpa)) 
}