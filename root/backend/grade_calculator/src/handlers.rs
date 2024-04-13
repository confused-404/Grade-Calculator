use std::convert::Infallible;

use axum::Json;

use crate::models::{GradeCalculationRequest, GradeCalculationResponse};


pub async fn calculate_grade(req: Json<GradeCalculationRequest>) -> Result<Json<GradeCalculationResponse>, Infallible> {
    let current_grade = &req.current_grade;
    let grade_goal = &req.grade_goal;
    let final_weight = &req.final_weight;

    let required_score = (grade_goal - (((1 as f32) - final_weight) * current_grade))/final_weight;

    Ok(Json(GradeCalculationResponse { required_score }))
}
