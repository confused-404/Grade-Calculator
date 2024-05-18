use std::convert::Infallible;

use axum::Json;

use crate::models::{GradeCalculationRequest, GradeCalculationResponse};


pub async fn calculate_grade(req: Json<GradeCalculationRequest>) -> Result<Json<GradeCalculationResponse>, Infallible> {
    let current_grade = &req.current_grade;
    let grade_goal = &req.grade_goal;
    let final_weight = &req.final_weight;

    let required_score = (grade_goal - (1.0 - final_weight / 100.0) * current_grade) / (final_weight / 100.0);

    Ok(Json(GradeCalculationResponse { required_score }))
}
