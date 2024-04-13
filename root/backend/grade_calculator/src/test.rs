#[tokio::test]
async fn test_calculate_grade() {
    let req = GradeCalculationRequest {
        current_grade: 88,
        grade_goal: 93,
        final_weight: 50,
    };
    let response = calculate_grade(Json(req)).await.unwrap();
    println!("{}", response.required_score);
}
