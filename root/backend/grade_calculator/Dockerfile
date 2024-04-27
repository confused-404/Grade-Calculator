FROM rust:bookworm as builder

WORKDIR /usr/src/app

COPY . .

RUN cargo build --release

FROM debian:bookworm

WORKDIR /app

COPY --from=builder /usr/src/app/target/release/grade_calculator .

EXPOSE 8080

CMD ["./grade_calculator"]
