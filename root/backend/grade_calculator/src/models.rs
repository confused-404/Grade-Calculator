use serde::{Deserialize, Serialize};

#[derive(Deserialize)]
pub struct GradeCalculationRequest {
    pub current_grade: f32,
    pub final_weight: f32, // weight of final
    pub grade_goal: f32, // wanted grade
}

#[derive(Serialize)]
pub struct GradeCalculationResponse {
    pub required_score: f32,
}


